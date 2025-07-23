import { stripe } from '@/lib/stripe'
import { headers } from 'next/headers'

/**
 * Handle successful checkout sessions
 * @param { import('stripe').Stripe.CheckoutSessionCompletedEvent} event
 */
const handleSuccess = async event => {}

/**
 * Stripe webhook handler
 * @param {Request} request
 */
export const POST = async request => {}
