import { Breadcrumbs } from '../components/Breadcrumbs';
import { Breadcrumb } from '../components/Breadcrumbs';
import StarRating from '../components/Stars';
import { useState } from 'react';

const SingleProduct = () => {
  const breadcrumbs: Breadcrumb[] = [
    { name: 'Home', link: '/' },
    { name: 'Products', link: '/products' },
    { name: 'Single Product' },
  ];

  return (
    <>
      <div className="bg-secondary py-4 pl-14">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="container">
        <div className="mt-9 grid grid-cols-1 gap-7 lg:grid-cols-2">
          {/* product imgae */}
          <div className="flex flex-col-reverse gap-4 lg:flex-row">
            {/* small image which at left */}
            <div className="flex w-full flex-row gap-2 lg:w-auto lg:flex-col">
              <div className="h-10 w-full sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32">
                <img
                  src="/images/Product_item.png"
                  className="h-full w-full object-cover"
                  alt="Small Image 1"
                />
              </div>
              <div className="h-10 w-full sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32">
                <img
                  src="/images/Product_item.png"
                  className="h-full w-full object-cover"
                  alt="Small Image 2"
                />
              </div>
              <div className="h-10 w-full sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32">
                <img
                  src="/images/Product_item.png"
                  className="h-full w-full object-cover"
                  alt="Small Image 3"
                />
              </div>
              <div className="h-10 w-full sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32">
                <img
                  src="/images/Product_item.png"
                  className="h-full w-full object-cover"
                  alt="Small Image 4"
                />
              </div>
            </div>

            {/* large image */}
            <div className="flex flex-1 flex-col">
              <img
                src="/images/Product_item.png"
                className="h-auto max-h-64 w-full object-contain md:max-h-60 lg:max-h-80 xl:max-h-96 2xl:max-h-[32rem]"
                alt="XS Product"
              />
            </div>
          </div>

          {/* details of product */}
          <div>
            <h1 className="text-3xl font-normal">Asgaard sofa</h1>
            <p className="pt-3 text-lg font-semibold text-gray">15,000 EGP</p>

            <div className="my-4 flex items-center">
              <StarRating rating={4} maxStars={5} starSize="30px" />
              <p className="ml-3 mr-4 h-[30px] w-[1px] bg-gray"></p>
              <p className="text-gray-500 ml-2 text-xs text-gray">
                5 Customer Reviews
              </p>
            </div>

            <p className="text-black mb-4 text-lg">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>

            <p className="mb-4 text-sm font-normal text-gray">Size:</p>

            {/* size  */}
            <div className="mb-5 flex items-center gap-4">
              <button
                type="button"
                className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-gray focus:outline-none focus:ring-4 focus:ring-neutral dark:focus:ring-error"
              >
                L
              </button>
 
              <button
                type="button"
                className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-gray focus:outline-none focus:ring-4 focus:ring-neutral dark:focus:blue"
              >
                XL
              </button>
              <button
                type="button"
                className="rounded-lg bg-primary px-3 py-2.5 text-sm font-medium text-white hover:bg-gray focus:outline-none focus:ring-4 focus:ring-neutral dark:focus:ring-error"
              >
                XS
              </button>
            </div>

            {/* color */}
            <p className="mb-3 text-sm font-normal text-gray">color</p>

            <div className="mb-8 flex items-center gap-4">
            <img src='/images/Color.svg' alt="" />
            </div>

            {/* Cart */}
            <div className="flex items-center gap-4">
              <input
                type="number"
                className="border-gray w-20 border rounded-lg text-center"
                defaultValue={1}
              />
              <button className="bg-primary btn btn-outline text-white">
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="my-16">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">
            <div className="bg-gray-100 rounded-md p-4">
              <h3 className="font-semibold">Ali Ahmed</h3>
              <StarRating rating={5} maxStars={5} starSize="30px" />
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
