import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Button from "./Button";
import QuantitySelector from "./QuantitySelector";

function CartItem({ item }) {
  const { updateQuantity } = useCart();

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(item.price);

  return (
    <li className="flex items-center gap-4">
      <img
        src={item.images.mobile}
        alt={item.name}
        className="w-16 h-16 rounded-lg"
      />
      <div className="flex-1">
        <p className="font-bold text-body">{item.name.split(" ")[0]}</p>
        <p className="font-bold text-sm opacity-50">{formattedPrice}</p>
      </div>
      <QuantitySelector
        quantity={item.quantity}
        onDecrement={() => updateQuantity(item.id, -1)}
        onIncrement={() => updateQuantity(item.id, 1)}
      />
    </li>
  );
}

export default function CartModal() {
  const { isCartOpen, closeCart, cartItems, cartCount, totalPrice, clearCart } =
    useCart();

  if (!isCartOpen) {
    return null;
  }

  const formattedTotalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(totalPrice);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 background-blur-sm z-40"
      onClick={closeCart}
    >
      <div
        className="max-w-[377px] w-full bg-white rounded-lg p-8 absolute top-28 right-8 sm:right-10 lg:right-40 z-50"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h6 className="text-h6 font-bold uppercase tracking-h6">
            Cart ({cartCount})
          </h6>
          <button
            className="text-body text-black text-opacity-75 underline hover:text-primary"
            onClick={clearCart}
          >
            Remove all
          </button>
        </div>

        {/* Item List */}
        {cartItems.length > 0 ? (
          <ul className="flex flex-col gap-6 mb-8">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
        ) : (
          <p className="text-body text-black text-opacity-75 text-center my-16">
            Your cart is empty.
          </p>
        )}

        {/* Total */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-body text-black text-opacity-50 uppercase">
            Total
          </span>
          <span className="text-h6 font-bold">{formattedTotalPrice}</span>
        </div>

        {/* Checkout Button */}
        <Button
          as="link"
          to="/checkout"
          variant="primary"
          className="w-full"
          onClick={closeCart}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}
