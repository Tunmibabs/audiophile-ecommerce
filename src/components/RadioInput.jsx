import React from 'react';

export default function RadioInput({ label, name, value, checked, onChange }) {
  return (
    <label className="flex items-center w-full border border-gray-300 rounded-lg p-4 
                      has-[:checked]:border-primary has-[:checked]:ring-1 has-[:checked]:ring-primary
                      cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-radio text-primary w-5 h-5 mr-4 focus:ring-primary"
      />
      <span className="font-bold text-sm">{label}</span>
    </label>
  );
}