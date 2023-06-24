'use client';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from "next/navigation";
import * as yup from 'yup';
import Form from './styles/Form';

const MAX_FILE_SIZE = 2000000; // 2MB

const formSchema = yup.object({
  picture: yup.mixed<FileList>().test("fileSize", "max allowed size is 2MB", value => value && value[0].size <= MAX_FILE_SIZE),
  name: yup.string().required(),
  price: yup.number().positive().required(),
  description: yup.string().required(),
})

type FormSchemaType = yup.InferType<typeof formSchema>

export default async function CreateProduct() {
  const router = useRouter();

  const onSubmit = async (data: FormSchemaType) => {
    const formData = new FormData();
  
    formData.append('picture', data.picture[0]);
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('description', data.description);
  
    const res = await fetch('/api/create-product', {
      method: "POST",
      body: formData
    });
    const createdProduct = await res.json();
    console.log('createdProduct: ', createdProduct);
    // Go to that product's page!
    router.push(`/product/${createdProduct.id}`);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    // @ts-ignore
    // <Form action={handleSubmit(onSubmit)}>
    <form action={handleSubmit(onSubmit)}>
      <h2>Post your product for sale</h2>
      <fieldset>
        <label>
          Image
          <input
            type="file"
            {...register('picture')}
          />
        </label>
        <p className='text-sm text-red-600 mt-1'>{errors.picture?.message}</p>
        <label>
          Name
          <input
            type="text"
            placeholder="Your name"
            {...register('name')}
          />
        </label>
        <p className='text-sm text-red-600 mt-1'>{errors.name?.message}</p>
        <label>
          Price
          <input
            type="number"
            placeholder="Price"
            {...register('price')}
          />
        </label>
        <p className='text-sm text-red-600 mt-1'>{errors.price?.message}</p>
        <label>
          Description
          <textarea
            rows={5}
            cols={20}
            placeholder="Description"
            {...register('description')}
          />
        </label>
        <p className='text-sm text-red-600 mt-1'>{errors.description?.message}</p>
        <button className="bg-red-600 text-white" type="submit">+ Add Product</button>
      </fieldset>
    </form>
    // </Form> 
  );
}