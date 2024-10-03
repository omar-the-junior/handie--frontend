import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

function Cart() {
  return (
    <div>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

function CartItem() {
  return (
    <div>
      CartItem
      <Icon
        icon="solar:trash-bin-trash-bold-duotone"
        className="size-11 text-error"
      />
    </div>
  );
}

export default Cart;
