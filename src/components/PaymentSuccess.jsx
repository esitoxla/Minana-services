import React from 'react'

export default function PaymentSuccess() {
  return (
    <div className="text-center h-[20rem] bg-green-200 flex flex-col py-8 items-center gap-8">
      <h2 className="text-4xl font-bold text-green-600">
        Payment Successful!!!!!
      </h2>
      <p className="px-2 text-2xl">
        Minana Services (+233 54 719 3895) will reach out to you shortly.
      </p>
      <p className=" text-2xl">Thank you for your purchase.</p>
    </div>
  );
}
