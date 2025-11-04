import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  orders: defineTable({
    // 1. Customer Details
    customerDetails: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
    }),
    
    // 2. Shipping Details
    shippingDetails: v.object({
      address: v.string(),
      zip: v.string(),
      city: v.string(),
      country: v.string(),
    }),

    // 3. Items
    items: v.array(
      v.object({
        id: v.number(), // product ID
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        images: v.object({
          mobile: v.string(),
          tablet: v.string(),
          desktop: v.string(),
        })
      })
    ),

    // 4. Totals (calculated)
    totals: v.object({
      subtotal: v.number(),
      shipping: v.number(),
      grandTotal: v.number(),
    }),

    // 5. Payment & Status
    paymentMethod: v.string(),
    status: v.string(), // e.g., "pending", "shipped"

  }),
});
