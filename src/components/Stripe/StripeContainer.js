import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51L9WOHDGmZ79p2nYZilrkl0oAe463ehlxg9z62IpcNxCR7HXOLtl801ff2cQwNv39tdlW3z7WUGj3K1BKy3Z8vYG00qx4F8V1A"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		// <Elements stripe={stripeTestPromise}>
		// 	<PaymentForm />
		// </Elements>
	
		<ElementsConsumer>
			{({stripe, elements}) => (
				<CheckoutForm stripe={stripe} elements={elements} />
			)}
   		 </ElementsConsumer>
	)
}