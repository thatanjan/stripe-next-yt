'use server'

import products from '@/app/products'
import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'

/**
 * @param {Object} params - The parameters for creating the checkout session.
 * @param {import('stripe').Stripe.Checkout.SessionCreateParams.UiMode} params.ui_mode - The UI mode for the checkout session ('embedded' or 'redirect').
 * @returns {Promise<void>} - A promise that resolves when the checkout session is created.
 */
export async function createCheckoutSession({ ui_mode = 'hosted' }) {}
