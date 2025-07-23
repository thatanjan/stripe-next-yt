'use client'

import { createCheckoutSession } from '@/actions/createCheckoutSession'
import ProductList from '@/components/ProductList'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  CheckoutProvider,
  PaymentElement,
  useCheckout,
} from '@stripe/react-stripe-js'

import { useEffect, useState } from 'react'
import { appearance } from '../appearance'

function CheckoutForm({
  setIsLoading,
  setMessage,
  loading = false,
  error = null,
}) {
  return null
}

export default function CheckoutPage() {
  return null
}
