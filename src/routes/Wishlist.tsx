import { Link, useLoaderData } from 'react-router-dom'; // Use useLoaderData
import { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { WishlistItemType } from '../types/response.types';

const Wishlist = () => {
  const { wishlistItems } = useLoaderData() as {
    wishlistItems: WishlistItemType[];
  };
  const [cartItems, setCartItems] = useState<WishlistItemType[]>(wishlistItems);

  const handleRemoveItem = (item: WishlistItemType) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
  };

  return (
    <div className="container py-14">
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-primary">Wishlist is empty</h2>
          <img
            src="/images/Wishlist.svg"
            alt="Empty wishlist"
            className="mb-4 h-64 w-64"
          />
          <Link to="/shop" className="btn">
            Shop now
          </Link>
        </div>
      ) : (
        <div className="mx-auto grid max-w-screen-xl grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4">
          {cartItems.map((item) => (
            <WishlistItem
              key={item.id}
              item={item}
              onRemove={handleRemoveItem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function WishlistItem({
  item,
  onRemove,
}: {
  item: WishlistItemType;
  onRemove: (item: WishlistItemType) => void;
}) {
  const { title, price, discount, image } = item.product;

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full rounded-lg bg-secondary px-2 py-4">
        <img
          src={image}
          alt={title}
          className="m-auto h-[259px] w-[245px] rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col">
        <div>
          <h3 className="mb-6 text-2xl font-bold">{title}</h3>
          <div className="mb-8 flex gap-5">
            {/* Conditionally display the discounted price */}
            {discount ? (
              <div className="font-bold text-gray line-through">
                {price} EGP
              </div>
            ) : (
              <div className="font-bold text-gray">{price} EGP</div>
            )}
            {discount && (
              <div className="font-bold text-primary">
                {price - price * (discount / 100)} EGP
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <button className="btn flex w-full items-center justify-center gap-2.5">
          <Icon icon="solar:cart-plus-linear" className="size-8" />
          <span>Move to Cart</span>
        </button>
        <button
          className="btn btn-outline btn-charcoal mt-10 flex w-full items-center justify-center gap-2.5"
          onClick={() => onRemove(item)}
        >
          <Icon icon="solar:trash-bin-minimalistic-linear" className="size-8" />
          <span>Remove</span>
        </button>
      </div>
    </div>
  );
}

export default Wishlist;
