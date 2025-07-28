'use client'

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js'

import { createCheckoutSession } from '@/actions/createCheckoutSession'
import { stripePromise } from '@/lib/stripeClient'

export default function Checkout() {
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Embedded Checkout</h1>

      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{
          fetchClientSecret: () =>
            createCheckoutSession({ ui_mode: 'embedded' }),
        }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
