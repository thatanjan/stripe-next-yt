'use client'

import { createPaymentIntent } from '@/actions/createPaymentIntent'
import ProductList from '@/components/ProductList'
import { Button } from '@/components/ui/button'
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import products from '../products'
import { stripePromise } from '@/lib/stripeClient'

function CheckoutForm({
  setIsLoading,
  setMessage,
  loading = false,
  error = null,
}) {}

export default function CheckoutPage() {
  return null
}
