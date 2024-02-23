import React, { useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";

export function Checkout() {
  const stripe = useStripe();

  const [product, setProduct] = useState({
    price_data: {
      currency: "usd",
      unit_amount: 2000,
      product_data: {
        name: "hat",
        description: "Comfortable cotton T-shirt",
        images: [
          "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?w=480&dpr=1.0",
        ],
      },
    },
    quantity: 0,
  });

  function changeProductQuantity(newQuantity) {
    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        quantity:
          newQuantity == -1 && prevProduct.quantity == 0
            ? 0
            : prevProduct.quantity + newQuantity,
      };
    });
  }

  return (
    <>
      {/* quantity container */}
      <div className="flex justify-center items-center gap-12 mt-12">
        {/* increment button */}
        <button
          onClick={() => changeProductQuantity(1)}
          className="bg-green-500 text-white rounded-xl shadow-lg px-6 py-4 text-4xl hover:-translate-y-1 duration-300 transition"
        >
          +
        </button>
        {/* display quantity */}
        <div className="text-4xl">{product.quantity}</div>
        {/* decrement button */}
        <button
          onClick={() => changeProductQuantity(-1)}
          className="bg-red-500 text-white rounded-xl shadow-lg px-6 py-4 text-4xl hover:-translate-y-1 duration-300 transition"
        >
          -
        </button>
      </div>
    </>
  );
}

export function CheckoutSuccess() {
  return <div>Checkout Successful</div>;
}
export function CheckoutFail() {
  return (
    <>
      <div>Checkout Failed</div>
    </>
  );
}
