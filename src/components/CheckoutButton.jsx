'use client'

import { createCheckoutSession } from '@/actions/createCheckoutSession'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const CheckoutButton = props => {
  const [isLoading, setIsLoading] = useState(false)

  const onClick = async () => {
    setIsLoading(true)

    await createCheckoutSession({})
    setIsLoading(false)
  }

  return (
    <Button onClick={onClick}>{isLoading ? 'Loading...' : 'Checkout'}</Button>
  )
}

export default CheckoutButton
