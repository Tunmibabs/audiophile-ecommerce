import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart, CartItem as CartItemType } from '../context/CartContext';
import Button from './Button';

function CheckIcon(): React.ReactElement {
  return (
    <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle fill="#D87D4A" cx="32" cy="32" r="32" />
        <path
          stroke="#FFF"
          strokeWidth="4"
          d="m20.754 33.333 6.751 6.751 15.804-15.803"
        />
      </g>
    </svg>
  );
}

interface ThankYouItemProps {
  item: CartItemType;
}

function ThankYouItem({ item }: ThankYouItemProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(item.price);

  return (
    <li className="flex items-center gap-4 py-4">
      <img src={item.images.mobile} alt={item.name} className="w-16 h-16 rounded-lg" />
      <div className="flex-1">
        <p className="font-bold text-body">{item.name.split(' ')[0]}</p>
        <p className="font-bold text-sm opacity-50">{formattedPrice}</p>
      </div>
      <span className="font-bold text-body opacity-50">x{item.quantity}</span>
    </li>
  );
}

interface ThankYouModalProps {
  onClose: () => void;
}

export default function ThankYouModal({ onClose }: ThankYouModalProps) {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) return null;

  // --- Calculate Totals ---
  const shipping = 50;
  const grandTotal = totalPrice + shipping;
  const formattedGrandTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(grandTotal);

  const firstItem = cartItems[0];
  const otherItemCount = cartItems.length - 1;

  const handleBackToHome = () => {
    clearCart();    // 1. Clear the cart
    onClose();      // 2. Close the modal
    navigate('/');  // 3. Go to home page
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-40 flex justify-center items-center p-6"
    >
      {/* Modal Panel */}
      <div 
        className="w-full max-w-[540px] bg-white rounded-lg p-8 md:p-12"
      >
        <CheckIcon />
        
        <h2 className="text-h3 font-bold uppercase tracking-h3 leading-h3 mt-8 mb-6">
          Thank you<br />for your order
        </h2>
        
        <p className="text-body text-black text-opacity-75 mb-8">
          You will receive an email confirmation shortly.
        </p>
        
        {/* Order Summary */}
        <div className="flex flex-col sm:flex-row rounded-lg overflow-hidden mb-8">
          
          {/* Item List Side */}
          <div className="flex-1 bg-gray p-6">
            <ThankYouItem item={firstItem} />
            {otherItemCount > 0 && (
              <div className="text-center border-t border-black border-opacity-20 pt-3">
                <span className="text-xs font-bold text-black text-opacity-50">
                  and {otherItemCount} other item(s)
                </span>
              </div>
            )}
          </div>
          
          <div className="flex-1 bg-black text-white p-6 flex flex-col justify-center">
            <span className="text-body text-white text-opacity-75 uppercase mb-2">
              Grand Total
            </span>
            <span className="text-h6 font-bold">
              {formattedGrandTotal}
            </span>
          </div>
        </div>
        {/* This assumes Button.tsx is typed for an onClick prop */}
        <Button variant="primary" onClick={handleBackToHome} className="w-full">
          Back to Home
        </Button>
      </div>
    </div>
  );
}