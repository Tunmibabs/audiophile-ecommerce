import React from 'react';

interface TextInputProps {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  error?: string;
}

export default function TextInput({ 
  label, 
  placeholder, 
  name, 
  value, 
  onChange, 
  error 
}: TextInputProps) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <label htmlFor={name} className={`font-bold text-xs ${error ? 'text-error' : 'text-black'}`}>
          {label}
        </label>
        {error && <span className="text-error text-xs">{error}</span>}
      </div>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full border rounded-lg px-6 py-4 font-bold 
                    ${error ? 'border-error focus:border-error' : 'border-gray-300 focus:border-primary'} 
                    focus:outline-none focus:ring-1 focus:ring-primary`}
      />
    </div>
  );
}