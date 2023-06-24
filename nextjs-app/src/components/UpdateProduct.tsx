'use client';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from "next/navigation";
import * as yup from 'yup';
import Form from './styles/Form';
import { updateProduct } from '../lib/server-actions';

const MAX_FILE_SIZE = 2000000; // 2MB

const formSchema = yup.object({
  picture: yup.mixed<FileList>().test("fileSize", "max allowed size is 2MB", value => value && value[0].size <= MAX_FILE_SIZE),
  name: yup.string().required(),
  price: yup.number().positive().required(),
  description: yup.string().required(),
})

type FormSchemaType = yup.InferType<typeof formSchema>

export default async function UpdateProduct({ id }) {
  const router = useRouter();

  const onSubmit = async (data: FormSchemaType) => {

    // wrap all user-inputs in FormData instance 
    // this is required to pass file-type to server-action 
    const formData = new FormData();
    formData.append('picture', data.picture[0]);
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('description', data.description);

    // invoke server-action 
    const updatedProduct = await updateProduct(formData, id);
    
    // Go to that product's page!
    router.push(`/product/${updatedProduct.id}`);
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
    <Form action={handleSubmit(onSubmit)}>
      <h2>Update existing product</h2>
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
            placeholder="Product name"
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
        <button className="bg-red-600 text-white" type="submit">Update Product</button>
      </fieldset>
    </Form>
  );
}