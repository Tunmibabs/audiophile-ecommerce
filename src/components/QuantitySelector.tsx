import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  onDecrement: () => void;
  onIncrement: () => void; 
}

export default function QuantitySelector({ 
  quantity, 
  onDecrement, 
  onIncrement 
}: QuantitySelectorProps) {
  return (
    <div className="bg-gray flex items-center">
      <button
        onClick={onDecrement}
        className="w-10 h-12 text-black text-opacity-50 hover:text-primary transition-colors"
        type="button"
      >
        -
      </button>
      <span className="w-10 text-center font-bold text-subtitle">
        {quantity}
      </span>
      <button
        onClick={onIncrement}
        className="w-10 h-12 text-black text-opacity-50 hover:text-primary transition-colors"
        type="button"
      >
        +
      </button>
    </div>
  );
}