import React from 'react';
import { useCart } from '../context/CartContext';
import Button from './Button';

function SummaryItem({ item }) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(item.price);

  return (
    <li className="flex items-center gap-4">
      <img src={item.images.mobile} alt={item.name} className="w-16 h-16 rounded-lg" />
      <div className="flex-1">
        <p className="font-bold text-body">{item.name.split(' ')[0]}</p>
        <p className="font-bold text-sm opacity-50">{formattedPrice}</p>
      </div>
      <span className="font-bold text-body opacity-50">x{item.quantity}</span>
    </li>
  );
}

export default function Summary({ onContinue }) {
  const { cartItems, totalPrice } = useCart();

  // Shipping and Grand Total
  const shipping = 50;
  const grandTotal = totalPrice + shipping;

  const format = (num) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);

  return (
    <div className="bg-white rounded-lg p-8">
      <h3 className="text-h6 font-bold uppercase tracking-h6 mb-8">Summary</h3>
      
      <ul className="flex flex-col gap-6 mb-8">
        {cartItems.map(item => (
          <SummaryItem key={item.id} item={item} />
        ))}
      </ul>

      {/* Totals */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-body text-black text-opacity-50 uppercase">Total</span>
          <span className="text-h6 font-bold">{format(totalPrice)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-body text-black text-opacity-50 uppercase">Shipping</span>
          <span className="text-h6 font-bold">{format(shipping)}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-body text-black text-opacity-50 uppercase">Grand Total</span>
          <span className="text-h6 font-bold text-primary">{format(grandTotal)}</span>
        </div>
      </div>

      <Button variant="primary" onClick={onContinue} className="w-full mt-8">
        Continue & Pay
      </Button>
    </div>
  );
}