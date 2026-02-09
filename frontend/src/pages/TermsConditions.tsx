// export default function TermsConditions() {
//   return (
//     <div className="container mx-auto px-4 py-12 max-w-4xl">
//       <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

//       <p className="mb-4">
//         By accessing and using our website, you agree to comply with these terms
//         and conditions.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">Products & Pricing</h2>
//       <p className="mb-4">
//         All product prices are listed in INR and are subject to change without notice.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">Orders</h2>
//       <p className="mb-4">
//         Orders are confirmed only after successful payment.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">Liability</h2>
//       <p className="mb-4">
//         We are not responsible for delays or damages beyond our control.
//       </p>
//     </div>
//   );
// }


import { Link } from "react-router-dom";

export default function TermsConditions() {
  return (
    <div className="container mx-auto px-4 max-w-4xl text-gray-800 dark:text-gray-200">
      {/* Back to Home */}
      <Link
        to="/"
        className="inline-block mb-6 text-primary hover:underline font-medium"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      <p className="mb-4">
        This document is an electronic record under the Information Technology
        Act, 2000 and applicable rules thereunder. By accessing and using the
        Thrisheka Jewels website, you agree to be bound by these Terms and
        Conditions.
      </p>

      {/* Platform Usage */}
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Platform Usage</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Provide accurate and complete information during registration</li>
        <li>Use the services at your own risk and discretion</li>
        <li>Comply with all applicable Indian laws and regulations</li>
      </ul>

      {/* Intellectual Property */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Intellectual Property
      </h2>
      <p className="mb-4">
        All content available on this platform, including images, designs,
        logos, text, and graphics, is the exclusive property of Thrisheka Jewels.
        Unauthorized use, reproduction, or distribution may result in legal
        action.
      </p>

      {/* Products & Pricing */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Products & Pricing
      </h2>
      <p className="mb-4">
        All product prices are listed in Indian Rupees (INR) and are subject to
        change without prior notice. We reserve the right to modify or discontinue
        any product at any time.
      </p>

      {/* Orders */}
      <h2 className="text-xl font-semibold mt-6 mb-2">4. Orders</h2>
      <p className="mb-4">
        Orders are considered confirmed only after successful payment.
        Thrisheka Jewels reserves the right to cancel or refuse any order at its
        discretion.
      </p>

      {/* Payments & Transactions */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        5. Payments & Transactions
      </h2>
      <p className="mb-4">
        You agree to pay all charges associated with your purchases. All
        transactions processed through the platform create legally binding
        contracts once payment is completed successfully.
      </p>

      {/* Indemnity */}
      <h2 className="text-xl font-semibold mt-6 mb-2">6. Indemnity</h2>
      <p className="mb-4">
        You agree to indemnify and hold harmless Thrisheka Jewels from any claims,
        damages, liabilities, or expenses arising out of your breach of these
        Terms and Conditions.
      </p>

      {/* Liability */}
      <h2 className="text-xl font-semibold mt-6 mb-2">7. Limitation of Liability</h2>
      <p className="mb-4">
        Thrisheka Jewels shall not be held responsible for delays, losses, or
        damages caused due to circumstances beyond our reasonable control.
      </p>

      {/* Governing Law */}
      <h2 className="text-xl font-semibold mt-6 mb-2">8. Governing Law</h2>
      <p className="mb-4">
        These Terms and Conditions shall be governed by and construed in
        accordance with the laws of India. Any disputes shall be subject to the
        exclusive jurisdiction of courts located in Karnataka.
      </p>

      {/* Contact */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Information</h2>
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
