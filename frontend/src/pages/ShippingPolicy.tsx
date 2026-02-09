import { Link } from "react-router-dom";

export default function ShippingPolicy() {
  return (
    <div className="container mx-auto px-4 max-w-4xl text-gray-800 dark:text-gray-200">
      {/* Back to Home */}
      <Link
        to="/"
        className="inline-block mb-6 text-primary hover:underline font-medium"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-6">Delivery & Shipping Policy</h1>

      <p className="mb-4">
        Thrisheka Jewels offers exquisite handcrafted South Indian jewellery and
        strives to ensure timely and safe delivery of all orders.
      </p>

      {/* Delivery Timeline */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Delivery Timeline
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Orders are delivered within <strong>7 days</strong> from the order/payment date</li>
        <li>Delivery timelines may vary based on courier processing times</li>
      </ul>

      {/* Delivery Address */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Delivery Address
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Products are delivered to the address provided at checkout</li>
        <li>Order confirmation is sent to the registered email address</li>
        <li>Please ensure the delivery address is accurate at the time of purchase</li>
      </ul>

      {/* Delivery Responsibility */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Delivery Responsibility
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Thrisheka Jewels is not liable for courier or postal delays</li>
        <li>Shipping charges, if applicable, are non-refundable</li>
        <li>Customers may contact the courier partner for shipment tracking</li>
      </ul>

      {/* Important Notice */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Important Notice
      </h2>
      <p className="mb-4">
        Shipping times may vary depending on location, courier availability, and
        external factors. Customers can track their order using the tracking
        number provided after dispatch.
      </p>

      {/* Contact Info */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Contact Us
      </h2>

      <p className="font-medium mt-2">
        📧 Email:{" "}
        <a
          href="mailto:tuglaksuma@gmail.com"
          className="text-primary underline"
        >
          tuglaksuma@gmail.com
        </a>
      </p>
      <p className="mt-1">📞 Phone: 8105840438 / 7411716118</p>
      <p className="mt-1">
        📍 Address: Ramanjinaya Nagar, Behind Indian Bank, Belgal Cross,
        Ballari, Karnataka
      </p>
      <p className="mt-1">
        🕒 Business Hours: Monday – Saturday (11:00 AM – 10:00 PM),
        Sunday – Holiday
      </p>

      <p className="text-sm text-muted-foreground mt-8">
        Last updated: December 2025
      </p>

      <hr className="my-8 border-border" />

      <p className="text-center text-sm text-muted-foreground">
        © 2026 Thrisheka Jewels. All rights reserved.
      </p>
    </div>
  );
}
