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
  const images = [
    "/images/Product_item.png",
    "/images/Product_item.png",
    "/images/Product_item.png",
    "/images/Product_item.png",
    "/images/login.png",
    "/images/signup.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const thumbnailsToShow = 4;

  const handleNext = () => {
    if (currentIndex + thumbnailsToShow < images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div className="bg-secondary py-4 pl-14">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="container">
        <div className="mt-9 grid grid-cols-1 gap-7 lg:grid-cols-2">
          {/* product image */}
          <div className="flex flex-col-reverse gap-4 lg:flex-row">
            {/* small image which at left */}
            <div className="relative flex w-full lg:w-auto items-center">
              {/* Previous button */}
              <button 
                className={`absolute left-0 z-10 bg-white p-1 rounded-full shadow-lg hover:bg-gray-200 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                &lt;
              </button>

              {/* Thumbnail images */}
              <div className="flex overflow-hidden w-full gap-2 lg:flex-col px-6">
                {images.slice(currentIndex, currentIndex + thumbnailsToShow).map((image, index) => (
                  <div
                    key={index}
                    className="h-10 w-full sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32 cursor-pointer"
                    onClick={() => handleThumbnailClick(image)}
                  >
                    <img
                      src={image}
                      className="h-full w-full object-cover"
                      alt={`Thumbnail ${currentIndex + index + 1}`}
                    />
                  </div>
                ))}
              </div>

              {/* Next button */}
              <button 
                className={`absolute right-0 z-10 bg-white p-1 rounded-full shadow-lg hover:bg-gray-200 ${currentIndex + thumbnailsToShow >= images.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleNext}
                disabled={currentIndex + thumbnailsToShow >= images.length}
              >
                &gt;
              </button>
            </div>

            {/* large image */}
            <div className="flex flex-1 flex-col ">
              <img
                src={selectedImage}
                className="h-auto max-h-64 w-full object-contain md:max-h-60 lg:max-h-80 xl:max-h-96 2xl:max-h-[32rem]"
                alt="Selected Product"
              />
            </div>
          </div>
          {/* details of product */}
          <div className='ml-5'>
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
                className="dark:focus:dark rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-gray focus:outline-none focus:ring-4 focus:ring-neutral"
              >
                L
              </button>

              <button
                type="button"
                className="dark:focus:dark rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-gray focus:outline-none focus:ring-4 focus:ring-neutral"
              >
                XL
              </button>
              <button
                type="button"
                className="dark:focus:dark rounded-lg bg-primary px-3 py-2.5 text-sm font-medium text-white hover:bg-gray focus:outline-none focus:ring-4 focus:ring-neutral"
              >
                XS
              </button>
            </div>

            {/* color */}
            <p className="mb-3 text-sm font-normal text-gray">color</p>

            <div className="mb-8 flex items-center gap-4">
              <img src="/images/Color.svg" alt="" />
            </div>

            {/* Cart */}
            <div className="flex items-center gap-4">
              <input
                type="number"
                className="w-20 rounded-lg border border-gray text-center"
                defaultValue={1}
              />
              <button className="btn btn-outline bg-primary text-white">
                Add To Cart
              </button>
            </div>
            <div className="mt-12 flex flex-col gap-3">
              <p className="text-gray">Category : Sofas</p>
              <p className="text-gray">Tags : Sofa, Chair, Home, Shop</p>
            </div>
          </div>
        </div>

        {/* review */}
         
  <div className="my-16">

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-md bg-gray p-4">

              <div className="mb-3 flex gap-3">

                <img src="/icons/profile_2.svg" alt="" />

                <h3 className="mt-1 font-semibold">Ali Ahmed</h3>

              </div>

              <div className="mb-4">

                <StarRating rating={5} maxStars={5} starSize="30px" />

              </div>

              <p className="text-gray-600 text-sm">

                Lorem ipsum dolor sit amet consectetur adipisicing elit.

              </p>

            </div>

  

            <div className="rounded-md bg-gray p-4">

              <div className="mb-3 flex gap-3">

                <img src="/icons/profile_2.svg" alt="" />

                <h3 className="mt-1 font-semibold">Ali Ahmed</h3>

              </div>

              <div className="mb-4">

                <StarRating rating={5} maxStars={5} starSize="30px" />

              </div>

              <p className="text-gray-600 text-sm">

                Lorem ipsum dolor sit amet consectetur adipisicing elit.

              </p>

            </div>

  

            <div className="rounded-md bg-gray p-4">

              <div className="mb-3 flex gap-3">

                <img src="/icons/profile_2.svg" alt="" />

                <h3 className="mt-1 font-semibold">Ali Ahmed</h3>

              </div>

              <div className="mb-4">

                <StarRating rating={5} maxStars={5} starSize="30px" />

              </div>

              <p className="text-gray-600 text-sm">

                Lorem ipsum dolor sit amet consectetur adipisicing elit.

              </p>

            </div>

  

            <div className="rounded-md bg-gray p-4">

              <div className="mb-3 flex gap-3">

                <img src="/icons/profile_2.svg" alt="" />

                <h3 className="mt-1 font-semibold">Ali Ahmed</h3>

              </div>

              <div className="mb-4">

                <StarRating rating={5} maxStars={5} starSize="30px" />

              </div>

              <p className="text-gray-600 text-sm">

                Lorem ipsum dolor sit amet consectetur adipisicing elit.

              </p>

            </div>

  

            <div className="rounded-md bg-gray p-4">

              <div className="mb-3 flex gap-3">

                <img src="/icons/profile_2.svg" alt="" />

                <h3 className="mt-1 font-semibold">Ali Ahmed</h3>

              </div>

              <div className="mb-4">

                <StarRating rating={5} maxStars={5} starSize="30px" />

              </div>

              <p className="text-gray-600 text-sm">

                Lorem ipsum dolor sit amet consectetur adipisicing elit.

              </p>

            </div>

  

            <div className="rounded-md bg-gray p-4">

              <div className="mb-3 flex gap-3">

                <img src="/icons/profile_2.svg" alt="" />

                <h3 className="mt-1 font-semibold">Ali Ahmed</h3>

              </div>

              <div className="mb-4">

                <StarRating rating={5} maxStars={5} starSize="30px" />

              </div>

              <p className="text-gray-600 text-sm">

                Lorem ipsum dolor sit amet consectetur adipisicing elit.

              </p>

            </div>

  

            <div className="rounded-md bg-gray p-4">

              <div className="mb-3 flex gap-3">

                <img src="/icons/profile_2.svg" alt="" />

                <h3 className="mt-1 font-semibold">Ali Ahmed</h3>

              </div>

              <div className="mb-4">

                <StarRating rating={5} maxStars={5} starSize="30px" />

              </div>

              <p className="text-gray-600 text-sm">

                Lorem ipsum dolor sit amet consectetur adipisicing elit.

              </p>

            </div>

  

            <div className="rounded-md bg-gray p-4">

              <div className="mb-3 flex gap-3">

                <img src="/icons/profile_2.svg" alt="" />

                <h3 className="mt-1 font-semibold">Ali Ahmed</h3>

              </div>

              <div className="mb-4">

                <StarRating rating={5} maxStars={5} starSize="30px" />

              </div>

              <p className="text-gray-600 text-sm">

                Lorem ipsum dolor sit amet consectetur adipisicing elit.

              </p>

            </div>

  

            <div className="rounded-md bg-gray p-4">

              <div className="mb-3 flex gap-3">

                <img src="/icons/profile_2.svg" alt="" />

                <h3 className="mt-1 font-semibold">Ali Ahmed</h3>

              </div>

              <div className="mb-4">

                <StarRating rating={5} maxStars={5} starSize="30px" />

              </div>

              <p className="text-gray-600 text-sm">

                Lorem ipsum dolor sit amet consectetur adipisicing elit.

              </p>

            </div>

  

            <div className="rounded-md bg-gray p-4">

              <div className="mb-3 flex gap-3">

                <img src="/icons/profile_2.svg" alt="" />

                <h3 className="mt-1 font-semibold">Ali Ahmed</h3>

              </div>

              <div className="mb-4">

                <StarRating rating={5} maxStars={5} starSize="30px" />

              </div>

              <p className="text-gray-600 text-sm">

                Lorem ipsum dolor sit amet consectetur adipisicing elit.

              </p>

            </div>

  

            <div className="rounded-md bg-gray p-4">

              <div className="mb-3 flex gap-3">

                <img src="/icons/profile_2.svg" alt="" />

                <h3 className="mt-1 font-semibold">Ali Ahmed</h3>

              </div>

              <div className="mb-4">

                <StarRating rating={5} maxStars={5} starSize="30px" />

              </div>

              <p className="text-gray-600 text-sm">

                Lorem ipsum dolor sit amet consectetur adipisicing elit.

              </p>

            </div>

  

            <div className="rounded-md bg-gray p-4">

              <div className="mb-3 flex gap-3">

                <img src="/icons/profile_2.svg" alt="" />

                <h3 className="mt-1 font-semibold">Ali Ahmed</h3>

              </div>

              <div className="mb-4">

                <StarRating rating={5} maxStars={5} starSize="30px" />

              </div>

              <p className="text-gray-600 text-sm">

                Lorem ipsum dolor sit amet consectetur adipisicing elit.

              </p>

            </div>

  

            <div className="rounded-md bg-gray p-4">

              <div className="mb-3 flex gap-3">

                <img src="/icons/profile_2.svg" alt="" />

                <h3 className="mt-1 font-semibold">Ali Ahmed</h3>

              </div>

              <div className="mb-4">

                <StarRating rating={5} maxStars={5} starSize="30px" />

              </div>

              <p className="text-gray-600 text-sm">

                Lorem ipsum dolor sit amet consectetur adipisicing elit.

              </p>

            </div>

  

            <div className="rounded-md bg-gray p-4">

              <div className="mb-3 flex gap-3">

                <img src="/icons/profile_2.svg" alt="" />

                <h3 className="mt-1 font-semibold">Ali Ahmed</h3>

              </div>

              <div className="mb-4">

                <StarRating rating={5} maxStars={5} starSize="30px" />

              </div>

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
