import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OrderStatus() {
  const location = useLocation();
  const navigate = useNavigate();

  const { status, orderId } = location.state || {};

  const isSuccess = status === "success";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fff7ed] via-[#fff1f2] to-[#ffe4e6] px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md w-full">
        {isSuccess ? (
          <>
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">
              Payment Successful 🎉
            </h1>
            <p className="text-muted-foreground mb-4">
              Your order has been placed successfully.
            </p>
            {orderId && (
              <p className="text-sm text-muted-foreground mb-6">
                Order ID: <span className="font-semibold">{orderId}</span>
              </p>
            )}
            <Button onClick={() => navigate("/")}>
              Continue Shopping
            </Button>
          </>
        ) : (
          <>
            <XCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">
              Payment Failed ❌
            </h1>
            <p className="text-muted-foreground mb-6">
              Something went wrong with your payment.
            </p>
            <div className="flex gap-3 justify-center">
              <Button variant="outline" onClick={() => navigate("/cart")}>
                Back to Cart
              </Button>
              <Button onClick={() => navigate("/checkout")}>
                Try Again
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
