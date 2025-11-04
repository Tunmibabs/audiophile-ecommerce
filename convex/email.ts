import { internalAction } from "./_generated/server";
import { v } from "convex/values";

export const sendOrderConfirmationEmail = internalAction({
  args: {
    orderId: v.id("orders"),
    customerName: v.string(),
    customerEmail: v.string(),
    items: v.array(
      v.object({
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        images: v.object({ mobile: v.string(), tablet: v.string(), desktop: v.string() })
      })
    ),
    totals: v.object({
      subtotal: v.number(),
      shipping: v.number(),
      grandTotal: v.number(),
    }),
    shippingDetails: v.object({
      address: v.string(),
      zip: v.string(),
      city: v.string(),
      country: v.string(),
    }),
  },
  handler: async (ctx, args) => {
    
    // --- THIS IS A STUB FOR RESEND.COM (example) ---
    // You must get an API key from Resend (or SendGrid, etc.)
    // and add it to your Convex dashboard environment variables.
    
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set in environment variables.");
      return; // Fail gracefully if no key is set
    }

    // 1. Build the HTML for the email
    // This is a simple template. You should make this more robust.
    const itemsHtml = args.items
      .map(
        (item) => `
      <tr>
        <td>${item.name} (x${item.quantity})</td>
        <td style="text-align: right;">$${item.price * item.quantity}</td>
      </tr>
    `
      )
      .join("");

    const htmlTemplate = `
      <div>
        <h1>Thanks for your order, ${args.customerName}!</h1>
        <p>Your Order ID is: ${args.orderId.toString()}</p>
        
        <h3>Order Summary</h3>
        <table width="100%">
          ${itemsHtml}
          <tr><td colspan="2"><hr></td></tr>
          <tr>
            <td>Subtotal</td>
            <td style="text-align: right;">$${args.totals.subtotal}</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td style="text-align: right;">$${args.totals.shipping}</td>
          </tr>
          <tr>
            <td><strong>Grand Total</strong></td>
            <td style="text-align: right;"><strong>$${args.totals.grandTotal}</strong></td>
          </tr>
        </table>

        <h3>Shipping To:</h3>
        <p>
          ${args.shippingDetails.address}<br>
          ${args.shippingDetails.city}, ${args.shippingDetails.zip}<br>
          ${args.shippingDetails.country}
        </p>

        <a href="https://your-website-url.com/confirmation/${args.orderId.toString()}">View Your Order</a>
        <p>Questions? Contact support@audiophile.com</p>
      </div>
    `;

    // 2. Send the email using fetch
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Audiophile <orders@yourdomain.com>", // Must be a verified domain
          to: [args.customerEmail],
          subject: `Your Audiophile Order Confirmation (${args.orderId.toString()})`,
          html: htmlTemplate,
        }),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
      } else {
        const error = await response.json();
        console.error("Failed to send email:", error);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  },
});