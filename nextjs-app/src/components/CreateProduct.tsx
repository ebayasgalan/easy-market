// @ts-nocheck
'use client';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from "next/navigation";
import * as yup from 'yup';
import { PhotoIcon } from '@heroicons/react/24/solid';

const MAX_FILE_SIZE = 2000000; // 2MB

const formSchema = yup.object({
  picture: yup.mixed<FileList>().test("fileSize", "max allowed size is 2MB", value => value && value[0].size <= MAX_FILE_SIZE),
  name: yup.string().required(),
  price: yup.string().required(),
  description: yup.string().required(),
})

type FormSchemaType = yup.InferType<typeof formSchema>

export default function CreateProduct() {
  const router = useRouter();

  const onSubmit = async (data: FormSchemaType) => {
    const formData = new FormData()
  
    formData.append('picture', data.picture[0]);
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('description', data.description);
  
    const res = await fetch('/api/create-product', {
      method: "POST",
      body: formData
    });
    const newProduct = await res.json();
    console.log('newProduct: ', newProduct);
    // Go to new product's page!
    router.push(`/product/${newProduct.id}`);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <form className="p-8 m-auto md:w-1/2 lg:w-1/3" action={handleSubmit(onSubmit)}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="font-semibold leading-7 text-gray-900 text-lg lg:text-xl">Post your item for sale</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="picture"
                className="block font-medium leading-6 text-gray-900 text-sm md:text-lg lg:text-xl"
              >
                Photo
                <PhotoIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
              </label>
              <p className='text-sm text-red-600 mt-1'>{errors.picture?.message}</p>
                <input
                  required
                  type="file"
                  id="picture"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  {...register('picture')}
                />
            </div>
            
            <div className="sm:col-span-4">
              <label htmlFor="name" className="block font-medium leading-6 text-gray-900 text-sm md:text-lg lg:text-xl">
                Title
              </label>
              <p className='text-sm text-red-600 mt-1'>{errors.name?.message}</p>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    required
                    type="text"
                    id="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:leading-6 text-sm md:text-lg lg:text-xl"
                    {...register('name')}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="price" className="block font-medium leading-6 text-gray-900 text-sm md:text-lg lg:text-xl">
                Price
              </label>
              <p className='text-sm text-red-600 mt-1'>{errors.price?.message}</p>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    required
                    type="text"
                    id="price"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:leading-6 text-sm md:text-lg lg:text-xl"
                    {...register('price')}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="description" className="block font-medium leading-6 text-gray-900 text-sm md:text-lg lg:text-xl">
                Description
              </label>
              <p className='text-sm text-red-600 mt-1'>{errors.description?.message}</p>
              <div className="mt-2">
                <textarea
                  required
                  id="description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 text-sm md:text-lg lg:text-xl"
                  {...register('description')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button 
          type="button" 
          className="font-semibold leading-6 text-gray-900 text-sm md:text-lg lg:text-xl"
          onClick={() => router.push('/')}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-sm md:text-lg lg:text-xl"
        >
          Post
        </button>
      </div>
    </form>
  );
}