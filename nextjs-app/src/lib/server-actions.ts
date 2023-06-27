// @ts-nocheck
'use server';

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { uploadImageToS3 } from "@/app/api/create-product/route";
import { getServerSession } from "next-auth";
import { revalidatePath } from 'next/cache';
import bcrypt from "bcrypt";
import prisma from "./prisma";

export const signupHandler = async (data) => { 
    const userInput = Object.assign(data, {});
    const { name, email, password } = userInput;

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
            },
            include: {
                cart: true
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

export const getUserCartItems = async (userCart) => {
    try {

        // fetch all products and filter based on cartItem-productIds 
        const allProducts = await prisma.product.findMany();
        const selectedProductIds = userCart.map(item => item.productId);

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

        // cache the selectedIds with corresponding repeated times
        selectedProductIds.forEach(productId => {
            if(cache[productId]) {
                cache[productId] += 1;
            } else cache[productId] = 1
        });

        // filter through allProducts and augment the cached ones with "quantity"
        // then add the new products to endResult 
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
        const deletedItems = await prisma.cartItem.deleteMany(
            { where: { productId: id } }
        );
        console.log('cart item deleted ', deletedItems);
        revalidatePath('/');
      } catch (error) {
        console.error(error);
      }
}

export const deleteProduct = async (id) => { 
    try {
        const deletedItem = await prisma.product.delete(
            { where: { id } }
        );
        console.log('product deleted ', deletedItem);
        revalidatePath('/');
      } catch (error) {
        console.error(error);
      }
}

export const checkOutCart = async (token, totalPrice, userId, cartItems) => { 
    const orderItems = cartItems.map(cartItem => {
        return {
            name: cartItem.name,        
            description: cartItem.description, 
            photo: cartItem.photo,     
            price: cartItem.price,
            quantity: cartItem.quantity,
        }
    })
    
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

    try {
        // delete cart Items that belong to the current user 
        const deletedItems = await prisma.cartItem.deleteMany({ where: { userId } });

        revalidatePath('/');
        return newOrder;
    } catch (error) {
        console.error(error);
    }
}

export const updateProduct = async ( data, id ) => {
    // extract the key/value pairs from FormData 
    // const formDataObj = Object.fromEntries(myFormData.entries());

    // extract a single input from FormData 
    const imageFile = data.get('picture');

    // save image to aws-s3
    const imageURL = await uploadImageToS3(imageFile);    
    
    // create a new obj to upload 
    const uploadObj = {
        photo: imageURL
    }

    for(let [key, value] of data) {
        if(key === 'picture') continue;
        if(key === 'price') uploadObj[key] = parseInt(value);
        else uploadObj[key] = value;
    }

    // update the product and revalidate 
    try {
        const updatedProduct = await prisma.product.upsert({
            where: { id },
            update: uploadObj,
            create: uploadObj
        })

        revalidatePath('/');
        return updatedProduct;
    } catch (error) {
        console.error(error);
    }
}