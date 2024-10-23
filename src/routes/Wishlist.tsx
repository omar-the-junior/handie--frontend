import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

type WishlistItem = {
  id: number;
  imageSrc: string;
  price: number;
  name: string;
};

type WishlistItemProps = {
  name: string;
  price: number;
  imageSrc: string;
  onRemove: (id: number) => void;
  id: number;
};

const initialCartItems: WishlistItem[] = [
  {
    id: 1,
    imageSrc:
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 15000,
    name: 'Sofa',
  },
  {
    id: 2,
    imageSrc:
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 15000,
    name: 'Chair',
  },
  {
    id: 9,
    imageSrc:
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 15000,
    name: 'Table',
  },
  {
    id: 8,
    imageSrc:
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 15000,
    name: 'Table',
  },
  {
    id: 3,
    imageSrc:
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 15000,
    name: 'Table',
  },
  {
    id: 5,
    imageSrc:
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 15000,
    name: 'Table',
  },
  {
    id: 4,
    imageSrc:
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 15000,
    name: 'Table',
  },
];

const Wishlist = () => {
  const [cartItems, setCartItems] = useState<WishlistItem[]>(initialCartItems);

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
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
              id={item.id} // Pass id prop
              name={item.name}
              price={item.price}
              imageSrc={item.imageSrc}
              onRemove={handleRemoveItem} // Pass remove function
            />
          ))}
        </div>
      )}
    </div>
  );
};

function WishlistItem({
  name,
  price,
  imageSrc,
  onRemove,
  id,
}: WishlistItemProps) {
  return (
  
      <div className="w-full flex flex-col">
        <div className="flex w-full rounded-lg bg-secondary px-2 py-4">
          <img
            src={imageSrc}
            alt={name}
            className="m-auto h-[259px] w-[245px] rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div>
            <h3 className="mb-6 text-2xl font-bold">{name}</h3>
            <div className="mb-8 flex gap-5">
              <div className="font-bold text-gray">2700 EGP</div>
              <p className="text-gray line-through">{price} EGP</p>
          
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
            onClick={() => onRemove(id)}
          >
            <Icon
              icon="solar:trash-bin-minimalistic-linear"
              className="size-8"
            />
            <span>Remove</span>
          </button>
        </div>
      </div>

  );
}

export default Wishlist;
