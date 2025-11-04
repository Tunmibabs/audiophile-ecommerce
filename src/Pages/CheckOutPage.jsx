import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import TextInput from "../components/TextInput";
import RadioInput from "../components/RadioInput";
import Summary from "../components/Summary";
import ThankYouModal from '../components/ThankYouModal';

import { useMutation } from "convex/react";
// import {api} from ../../convex/_generated/api

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems, totalPrice, clearCart } = useCart();
  const [showThankYou, setShowThankYou] = useState(false);

  const placeOrder = useMutation(api.orders.placeOrder);

  // --- Form State ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "eMoney", // 'eMoney' or 'cash'
    eMoneyNumber: "",
    eMoneyPIN: "",
  });

  // --- Form Errors State ---
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Can't be empty";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.phone) newErrors.phone = "Can't be empty";
    if (!formData.address) newErrors.address = "Can't be empty";
    if (!formData.zip) newErrors.zip = "Can't be empty";
    if (!formData.city) newErrors.city = "Can't be empty";
    if (!formData.country) newErrors.country = "Can't be empty";

    if (formData.paymentMethod === "eMoney") {
      if (!formData.eMoneyNumber) newErrors.eMoneyNumber = "Can't be empty";
      if (!formData.eMoneyPIN) newErrors.eMoneyPIN = "Can't be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      
      const shipping = 50;
      const grandTotal = totalPrice + shipping;

      const orderData = {
        customerDetails: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        shippingDetails: {
          address: formData.address,
          zip: formData.zip,
          city: formData.city,
          country: formData.country,
        },
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          images: { 
            mobile: item.images.mobile,
            tablet: item.images.tablet,
            desktop: item.images.desktop,
          }
        })),
        totals: {
          subtotal: totalPrice,
          shipping: shipping,
          grandTotal: grandTotal,
        },
        paymentMethod: formData.paymentMethod,
      };

      try {
        // Call the Convex mutation
        console.log("Submitting order to Convex...");
        const orderId = await placeOrder(orderData);
        console.log("Order placed successfully, ID:", orderId);
        
        setShowThankYou(true);

      } catch (error) {
        console.error("Failed to place order:", error);
      }

    } else {
      console.log('Form validation failed', errors);
    }
  };

  const closeThankYouModal = () => {
    setShowThankYou(false);
  };

  return (
    <div className="bg-off-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-8 md:py-16">
        {/* --- Go Back Link --- */}
        <button
          onClick={handleGoBack}
          className="text-body text-black text-opacity-75 hover:text-primary mb-8"
        >
          Go Back
        </button>

        {/* --- Main Layout --- 
          - Default/Tablet: Stacked (flex-col)
          - Desktop (md: 769px+): Side-by-side (md:flex-row)
        */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-8 items-start relative"
        >
          {/* --- 1. Checkout Form Card --- */}
          <div className="flex-1 bg-white rounded-lg p-6 sm:p-8">
            <h2 className="text-h4 font-bold uppercase tracking-h4 mb-8">
              Checkout
            </h2>

            {/* --- Billing Details --- */}
            <fieldset className="mb-8">
              <legend className="text-subtitle font-bold uppercase text-primary tracking-subtitle mb-4">
                Billing Details
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <TextInput
                  label="Name"
                  name="name"
                  placeholder="Alexei Ward"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <TextInput
                  label="Email Address"
                  name="email"
                  placeholder="alexei@mail.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <TextInput
                  label="Phone Number"
                  name="phone"
                  placeholder="+1 202-555-0136"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />
              </div>
            </fieldset>

            {/* --- Shipping Info --- */}
            <fieldset className="mb-8">
              <legend className="text-subtitle font-bold uppercase text-primary tracking-subtitle mb-4">
                Shipping Info
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <TextInput
                    label="Address"
                    name="address"
                    placeholder="1137 Williams Avenue"
                    value={formData.address}
                    onChange={handleChange}
                    error={errors.address}
                  />
                </div>
                <TextInput
                  label="ZIP Code"
                  name="zip"
                  placeholder="10001"
                  value={formData.zip}
                  onChange={handleChange}
                  error={errors.zip}
                />
                <TextInput
                  label="City"
                  name="city"
                  placeholder="New York"
                  value={formData.city}
                  onChange={handleChange}
                  error={errors.city}
                />
                <TextInput
                  label="Country"
                  name="country"
                  placeholder="United States"
                  value={formData.country}
                  onChange={handleChange}
                  error={errors.country}
                />
              </div>
            </fieldset>

            {/* --- Payment Details --- */}
            <fieldset>
              <legend className="text-subtitle font-bold uppercase text-primary tracking-subtitle mb-4">
                Payment Details
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <p className="font-bold text-xs">Payment Method</p>
                <div className="flex flex-col gap-4">
                  <RadioInput
                    label="e-Money"
                    name="paymentMethod"
                    value="eMoney"
                    checked={formData.paymentMethod === "eMoney"}
                    onChange={handleChange}
                  />
                  <RadioInput
                    label="Cash on Delivery"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === "cash"}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Conditional Form Fields */}
              {formData.paymentMethod === "eMoney" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <TextInput
                    label="e-Money Number"
                    name="eMoneyNumber"
                    placeholder="238521993"
                    value={formData.eMoneyNumber}
                    onChange={handleChange}
                    error={errors.eMoneyNumber}
                  />
                  <TextInput
                    label="e-Money PIN"
                    name="eMoneyPIN"
                    placeholder="6891"
                    value={formData.eMoneyPIN}
                    onChange={handleChange}
                    error={errors.eMoneyPIN}
                  />
                </div>
              )}
              {formData.paymentMethod === "cash" && (
                <div className="flex items-center gap-6 mt-6">
                  {/* You can add a cash icon here */}
                  <p className="text-body text-black text-opacity-75">
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence.
                  </p>
                </div>
              )}
            </fieldset>
          </div>

          {/* --- 2. Summary Card --- */}
          <div className="w-full md:w-1/3">
            <Summary onContinue={handleSubmit} />
          </div>
        </form>

        {showThankYou && <ThankYouModal onClose={closeThankYouModal}/>}
      </div>
    </div>
  );
}
