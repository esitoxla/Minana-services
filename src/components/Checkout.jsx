import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../helpers/contextSetUp";

const Checkout = () => {
    const { cart } = useContext(CartContext);
    console.log(cart); 
    
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setAmount(total)
  }, [cart]);

  const handlePayment = () => {
    if (!email || !amount) {
      alert("Please enter email and amount");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email,
      amount: amount * 100, // pesewas
      currency: "GHS",
      callback: function (response) {
        alert(" Payment successful! Reference: " + response.reference);
        window.location.href = "/cart/payment"; // navigate to success page
      },
      onClose: function () {
        alert(" Payment window closed.");
      },
    });

    handler.openIframe();
  };

  return (
    <>
      <div className="w-full bg-green-300 flex items-center justify-center px-4 py-8">
        <div className="flex flex-col items-center gap-10 bg-green-500 rounded-xl shadow-md w-full max-w-md md:max-w-lg lg:max-w-xl p-6 transition-transform duration-300 hover:-translate-y-2">
          <h2 className="text-white text-2xl font-bold">Make Payment</h2>

          <div className="flex flex-col w-full">
            <label className="text-white mb-1">Email</label>
            <input
              type="email"
              className="bg-white px-4 py-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-white mb-1">Amount (GHS)</label>
            <input
              type="number"
              placeholder="Amount (GHS)"
              className="bg-white px-4 py-2 rounded"
              value={amount}
              readOnly
            />
          </div>

          <button
            onClick={handlePayment}
            className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-500 hover:border-white hover:border w-full"
          >
            Pay Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
