'use server';

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { revalidatePath } from 'next/cache';
import bcrypt from "bcrypt";
import prisma from "./prisma";
import { create } from "domain";

interface SignupPropsType {
    name: string,
    email: string,
    password: string
}

export const signupSubmitHandler = async (data: SignupPropsType) => { 
    const { name, email, password } = data;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword
        } 
    })

    console.log('signup server-action, created user: ', user);
    return user;
}

export const getSession = async () => {
    return await getServerSession(authOptions);
}

export const getCurrentUser = async () => {
    try {
        const session = await getSession();

        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        });

        if (!currentUser) {
            return null;
        }

            return currentUser;
    } catch (error: any) {
        throw new Error(error?.message);
    }
};

export const getAllCartItems = async (userId) => {
    try {

        // fetch all products and filter based on cartItem-productIds 
        const cartItems = await prisma.cartItem.findMany({ where: { userId } });
        const allProducts = await prisma.product.findMany();
        const selectedProductIds = cartItems.map(cartItem => cartItem.productId);

        interface Product {
            id: string,
            name: string,
            description: string,
            photo?: string,
            status?: string,
            price?: number,
            userId?: string
        }

        const cartProducts: Product[] = [];
        const cache = {};

        // Time complexity: OlogN
        // cache the selectedIds with corresponding repeated times
        selectedProductIds.forEach(productId => {
            if(cache[productId]) {
                cache[productId] += 1;
            } else cache[productId] = 1
        });

        // filter through allProducts and get the ones with selectedIds and augment with "quantity"
        // add the new products to endResult 
        allProducts.forEach(product => {
            if(cache[product.id]) {
                const newProduct = { ...product };
                newProduct["quantity"] = cache[product.id];
                cartProducts.push(newProduct);
            }
        })
        return cartProducts;
    } catch (error: any) {
        throw new Error(error?.message);
    }
};

export const addToCart = async (id, userId) => { 
    const createdCartItem = await prisma.cartItem.create({
        data: {
            product: { connect: { id: id } },
            user: { connect: { id: userId } },
        },
    }); 
    revalidatePath('/');
    return createdCartItem;
}

export const removeFromCart = async (id) => { 
    try {
        const deletedItem = await prisma.cartItem.deleteMany(
            { where: { productId: id } }
        );
        console.log('cart item deleted ', deletedItem);
        revalidatePath('/');
      } catch (error) {
        console.error(error);
      }
}

export const checkOutCart = async (token, totalPrice, userId) => { 
    // console.log('checkOutCart, userId: ', userId);

    // create/map each Product for OrderItems and store in an array
    const cartItems = await getAllCartItems();

    // console.log('checkOutCart, cartItems: ', cartItems);

    const orderItems = cartItems.map(cartItem => {
        return {
            name: cartItem.name,        
            description: cartItem.description, 
            photo: cartItem.photo,     
            price: cartItem.price,
            quantity: cartItem.quantity,
        }
    })

    // console.log('checkOutCart, cartItems after: ', orderItems);

    // const orderItems = await Promise.all(
    //     cartItems.map(async (cartItem) => {
    //         console.log('cartItem: ', cartItem);
    //         return await prisma.orderItem.create({
    //             data: {
    //                 name: cartItem.name,
    //                 description: cartItem.description,
    //                 photo: cartItem.photo,
    //                 price: cartItem.price,
    //                 quantity: cartItem.quantity,
    //             }
    //         })
    //     })
    // )
    // console.log('checkOutCart, orderItems: ', orderItems);
    
    try {
        const newOrder = await prisma.order.create({
            data: {
                total: totalPrice,
                userId,
                items: {
                    createMany: {
                        data: orderItems
                    }
                }
            },
            include: {
                items: true,
            },
        });
        console.log('checkOutCart server-action, newOrder: ', newOrder);
        revalidatePath('/');
        return newOrder;
    } catch (error) {
        console.error(error);
    }
}