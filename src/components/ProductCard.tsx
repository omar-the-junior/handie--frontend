import React from 'react';
import StarRating from './Stars';
import { Icon } from '@iconify/react';
import SaleBadge from './Badge';

interface ProductCardProps {
  productName: string;
  sellerName: string;
  price: number;
  rating: number; // Only accepts whole numbers
  imageSrc: string; // Prop for image source
  isNew?: boolean; // Optional prop for sale type
  discount?: number; // Optional discount percentage for "best" type
}

const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  sellerName,
  price,
  rating,
  imageSrc,
  isNew,
  discount = 50, // Default discount percentage
}) => {
  // Calculate discounted price if saleType is "best" or "both"
  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div className="relative flex h-[462px] w-[300px] flex-col items-start justify-center rounded-md bg-[#FAF3EA] shadow-[0_2px_15px_5px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-secondary">
      {/* Product Image */}
      <div className="">
        <img
          src={imageSrc}
          className="h-auto w-full rounded-t-md object-cover"
          alt="Product"
        />

        <div className="flex gap-6">
          {isNew && <SaleBadge type="new" text="New" />}
          {discount && <SaleBadge type="discount" text={`%${discount}`} />}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Product Name */}
        <h5 className="font-poppins mb-2 text-[24px] font-semibold leading-[28.8px] text-[#3A3A3A]">
          {productName}
        </h5>

        {/* Seller Name */}
        <div className="mb-2 flex items-center">
          <Icon
            icon="solar:user-circle-linear"
            width="28"
            height="28"
            className="mr-2 text-black"
          />
          <p className="font-poppins text-[16px] font-medium leading-[24px] text-[#898989]">
            {sellerName}
          </p>
        </div>

        {/* Star Rating */}
        <div className="mb-4 flex h-[10px] items-start">
          <StarRating rating={rating} />
        </div>

        {/* Price */}
        <div className="font-poppins flex w-full items-center justify-between text-[20px] font-bold leading-[30px]">
          {discount ? (
            <>
              <span className="text-[#3A3A3A]">
                ${discountedPrice.toFixed(2)}
              </span>
              <span className="text-[#B0B0B0] line-through">
                ${price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-[#3A3A3A]">${price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
