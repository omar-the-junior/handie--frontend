import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cartItems: any[] = [
  {
    id: 1,
    imageSrc:
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 15000,
    name: 'Sofa',
    quantity: 1,
  },
  {
    id: 1,
    imageSrc:
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 15000,
    name: 'Sofa',
    quantity: 1,
  },
  {
    id: 1,
    imageSrc:
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 15000,
    name: 'Sofa',
    quantity: 1,
  },
  {

    
    id: 1,
    imageSrc:
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 15000,
    name: 'Sofa',
    quantity: 1,
  },
];

function Cart() {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

 
  return (
    <div className="container flex flex-col items-start justify-between gap-10 py-16 md:flex-row">
      {cartItems.length === 0 ? (
        <div className="ml-auto mr-auto flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-primary">Cart is empty</h2>
          <img
            src="/images/cart_imgae.jpg"
            alt="Empty cart "
            className="mb-4"
          />
          <Link to="/shop" className="btn w-full text-center">
            Shop now
          </Link>
        </div>
      ) : (
        <>
          <div className="flex w-full flex-col md:w-2/3">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>

          <div className="w-full rounded-2xl bg-light-secondary p-6 md:mt-0 md:w-1/3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="mb-2 flex justify-between font-semibold"
              >
                <span>{item.name}</span>
                <span>{item.price} EGP</span>
              </div>
            ))}
            <div className="mt-11 flex justify-between font-bold">
              <span>Total</span>
              <span className="text-xl text-primary">Rs. {totalPrice}</span>
            </div>
            <button className="btn mt-11 w-full">Checkout</button>
            
          </div>
        </>
      )}
    </div>
  );
}

interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
  imageSrc: string;
}

function CartItem({ name, price, quantity, imageSrc }: CartItemProps) {
  return (
    <div className="mb-4 flex w-full flex-col items-start rounded-lg p-4">
      <div className="flex gap-10 border-b-2 pb-12">
        <div className="flex h-[288px] w-[302px] bg-secondary">
          <img
            src={imageSrc}
            alt={name}
            className="m-auto h-[259px] w-[245px] rounded-lg object-cover"
          />
        </div>

        <div className="flex flex-col">
          <div>
            <h3 className="mb-6 text-2xl font-bold">{name}</h3>
            <div className="mb-8 flex gap-16">
              <div className="text-gray line-through">2700 EGP</div>
              <p className="font-bold text-Netural">{price} EGP</p>
            </div>

            <div className="flex items-center">
              <div className="mb-8 flex flex-row gap-4">
                <select className="rounded border px-8 py-2 pl-2 text-sm font-semibold text-neutral">
                  <option>Some value</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>

                <select className="rounded border px-7 py-2 pl-2 text-xs font-semibold text-neutral">
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
            </div>

            <div className="flex items-center">

              <div className='gap-5 flex mr-12'>
              <p className='text-lg font-bold'>Quantity</p>
              <button className="font-bold px-2 py-1" >-</button>
              <span className="mx-2 px-5 pt-1 border border-charcoal text-Netural">{quantity}</span>
              <button className="font-bold px-2 py-1">+</button>
              </div>


              
              <img
                src="/images/Trash.svg"
                alt="trash icon"
              />


            </div>

          </div>
          
        </div>
    

      </div>
    
    </div>
  );
}
export default Cart;
