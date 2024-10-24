import { Link, useLoaderData } from 'react-router-dom';
import { cartItem } from '../types/response.types';
import { useState } from 'react';

function Cart() {
  const { cartItems: initialCartItems } = useLoaderData() as {
    cartItems: cartItem[];
  };
  const [cartItems, setCartItems] = useState<cartItem[]>(initialCartItems);

  const handleQuantityChange = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, product: { ...item.product, quantity } }
          : item,
      ),
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.product.quantity,
    0,
  );

  return (
    <div className="container grid grid-cols-1 items-start justify-between py-16">
      {cartItems.length === 0 ? (
        <div className="ml-auto mr-auto flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-primary">Cart is empty</h2>
          <img src="/images/Empty_cart.svg" alt="Empty cart" className="mb-4" />
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
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemoveItem={handleRemoveItem}
              />
            ))}
          </div>

          <div className="w-full rounded-2xl bg-secondary p-6 md:mt-0 md:w-1/3">
            <div className="mt-11 flex justify-between font-bold">
              <span>Total</span>
              <span className="text-xl text-primary">EGP {totalPrice}</span>
            </div>
            <button className="btn mt-11 w-full">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

interface CartItemProps {
  item: cartItem;
  onQuantityChange: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

function CartItem({ item, onQuantityChange, onRemoveItem }: CartItemProps) {
  const { id, product } = item;

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newQuantity = Number(event.target.value);
    onQuantityChange(id, newQuantity); // Pass the id and new quantity
  };

  return (
    <div className="mb-4 flex w-full flex-col items-start rounded-lg p-4">
      <div className="flex gap-10 border-b-2 pb-12">
        <div className="flex h-[288px] w-[302px] bg-secondary">
          <img
            src={product.image}
            alt={product.title}
            className="m-auto h-[259px] w-[245px] rounded-lg object-cover"
          />
        </div>

        <div className="flex flex-col">
          <div>
            <h3 className="mb-6 text-2xl font-bold">{product.title}</h3>
            <div className="mb-8 flex gap-16">
              <p className="text-Netural font-bold">{product.price} EGP</p>
            </div>

            <div className="flex items-center">
              <div className="mb-8 flex flex-row gap-4">
                <select
                  value={product.quantity}
                  onChange={handleQuantityChange}
                  className="rounded border px-8 py-2 pl-2 text-sm font-semibold text-neutral"
                >
                  <option value="0">Remove</option>
                  {[...Array(5)].map((_, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => onRemoveItem(id)} // Pass id instead of name
                className="text-red-600 px-2 py-1 font-bold"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
