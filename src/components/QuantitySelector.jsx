import React from 'react';

export default function QuantitySelector({ quantity, onDecrement, onIncrement }) {
  return (
    <div className="bg-gray flex items-center">
      <button
        onClick={onDecrement}
        className="w-10 h-12 text-black text-opacity-50 hover:text-primary transition-colors"
      >
        -
      </button>
      <span className="w-10 text-center font-bold text-subtitle">
        {quantity}
      </span>
      <button
        onClick={onIncrement}
        className="w-10 h-12 text-black text-opacity-50 hover:text-primary transition-colors"
      >
        +
      </button>
    </div>
  );
}