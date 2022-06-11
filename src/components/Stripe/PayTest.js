import { useState } from 'react';
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

import axios from "axios"



function CheckoutForm(){
  const stripe = useStripe();
  const elements = useElements();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(PaymentElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:5000/payment", {
                amount: 1000,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
  };

  return (
        <form onSubmit={handleSubmit}>
          <PaymentElement />
          <button disabled={!stripe}>Submit</button>
        </form>
    
  )
};

export default CheckoutForm;