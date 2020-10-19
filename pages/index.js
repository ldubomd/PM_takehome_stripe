import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ success }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });

    if (!error) {
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post("/api/charge", { id, amount: 1900 });
        console.log(data);
        success();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <h3>Create delicious and natural tonic water with this kit, which has all the spices and botanicals you need, plus a recipe for making a syrup that you can simply add to soda water and your liquor of choice. It's easy to make and better-tasting than any bottled tonic water.</h3>
      <h2>Price: $19.00 USD</h2>
      <img
        src="https://cdn.shopify.com/s/files/1/0604/1077/products/Tonic_Kit_Colin_Price_Square_600x.jpg?v=1552438710"
        style={{ maxWidth: "500px" }}
      />
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay Now
      </button>
    </form>
  );
};

const stripePromise = loadStripe("pk_test_OWbbmAn6vvob0scgynx8D9q000wDibWveq");

const Index = () => {
  const [status, setStatus] = React.useState("ready");

  if (status === "success") {
    return <div>Congrats on your Tonic Kit!</div>;
  }

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        success={() => {
          setStatus("success");
        }}
      />
    </Elements>
  );
};

export default Index;
