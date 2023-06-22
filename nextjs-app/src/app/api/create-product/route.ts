// @ts-nocheck
import { NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import prisma from "../../../lib/prisma";
import { getCurrentUser } from '../../../lib/server-actions';

const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME;
const S3_REGION = process.env.S3_REGION;

const uploadImageToS3 = async (imageFile: any) => {
    let imageURL = '';
    const imageName = imageFile.name;
    const imageType = imageFile.type;

    const client = new S3Client({
        region: S3_REGION
    });

    // Setting up S3 upload parameters
    const blob = new Blob([imageFile])
    const readableStream = await blob.arrayBuffer();

    const params: any = {
        Bucket: S3_BUCKET_NAME,
        Key: imageName,
        Body: readableStream,
        ACL: "public-read",
        ContentType: imageType,
    }

    const command = new PutObjectCommand(params);

    try {
        const res = await client.send(command);
        if(res.$metadata.httpStatusCode === 200) {
            // construct aws-s3 image url
            imageURL = `https://${S3_BUCKET_NAME}.s3.${S3_REGION}.amazonaws.com/${imageName}`
        }
    } catch (err) {
        console.error(err);
    }

    return imageURL 
}

export async function POST(request: Request) {
    const formData = await request.formData();
    const pictureFile: any = formData.get('picture');
    const currentUser = await getCurrentUser();
    const newProduct = {};

    for(let [key, value] of formData) {
        if(key === 'picture') continue;
        if(key === 'price') newProduct[key] = parseInt(value);
        else newProduct[key] = value;
    }

    const storedImageURL = await uploadImageToS3(pictureFile);

    newProduct["photo"] = storedImageURL;
    newProduct["userId"] = currentUser.id;

    console.log('newProduct: ', newProduct);

    try {   
        const product = await prisma.product.create({
            data: newProduct
        })

        return NextResponse.json(product);
    } catch(err) {
        console.error(err);
    }
}