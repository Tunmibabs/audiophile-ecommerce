import { mutation } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";

export const placeOrder = mutation({
  args: {
    customerDetails: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
    }),
    shippingDetails: v.object({
      address: v.string(),
      zip: v.string(),
      city: v.string(),
      country: v.string(),
    }),
    items: v.array(
      v.object({
        id: v.number(),
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
    totals: v.object({
      subtotal: v.number(),
      shipping: v.number(),
      grandTotal: v.number(),
    }),
    paymentMethod: v.string(),
  },

  handler: async (ctx, args) => {
    //Save the order to the database
    const orderId = await ctx.db.insert("orders", {
      customerDetails: args.customerDetails,
      shippingDetails: args.shippingDetails,
      items: args.items,
      totals: args.totals,
      paymentMethod: args.paymentMethod,
      status: "Pending", // Set a default status
    });

    // Schedule the email action to run immediately
    await ctx.scheduler.runAfter(0, internal.email.sendOrderConfirmationEmail, {
      orderId: orderId,
      customerName: args.customerDetails.name,
      customerEmail: args.customerDetails.email,
      items: args.items,
      totals: args.totals,
      shippingDetails: args.shippingDetails,
    });

    return orderId;
  },
});
