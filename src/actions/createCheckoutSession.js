'use server'

import products from '@/app/products'
import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'

/**
 * @param {Object} params - The parameters for creating the checkout session.
 * @param {import('stripe').Stripe.Checkout.SessionCreateParams.UiMode} params.ui_mode - The UI mode for the checkout session ('embedded' or 'redirect').
 * @returns {Promise<void>} - A promise that resolves when the checkout session is created.
 */
export async function createCheckoutSession({ ui_mode = 'hosted' }) {
  /**
   * @type {import('stripe').Stripe.Checkout.SessionCreateParams}
   * */
  const sessionParams = {
    payment_method_types: ['card'],
    mode: 'payment',
    currency: 'usd',
    ui_mode,
    line_items: products.map(product => ({
      price_data: {
        currency: 'usd',
        unit_amount: product.price,
        product_data: {
          name: product.name,
          description: product.description,
          images: [product.image],
        },
      },
      quantity: product.quantity,
    })),
    customer_email: 'thatanjan@gmail.com',
    // customer_creation: 'always',
    // customer: ''
    //
    allow_promotion_codes: true,
  }

  if (ui_mode === 'hosted') {
    sessionParams.success_url = 'http://localhost:3000/success'
    sessionParams.cancel_url = 'http://localhost:3000/cancel'
  } else {
    // For embedded & custom mode, we don't set success and cancel URLs
    sessionParams.return_url = 'http://localhost:3000/success'
  }

  const session = await stripe.checkout.sessions.create(sessionParams)

  if (ui_mode !== 'hosted') {
    return session.client_secret
  }

  if (session.url) {
    redirect(session.url)
  }
}
