'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

const CheckoutButton = props => {
  const [isLoading, setIsLoading] = useState(false)

  const onClick = async () => {
    setIsLoading(true)
    setIsLoading(false)
  }

  return (
    <Button onClick={onClick}>{isLoading ? 'Loading...' : 'Checkout'}</Button>
  )
}

export default CheckoutButton
