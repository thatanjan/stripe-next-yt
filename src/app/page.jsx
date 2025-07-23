/* eslint-disable @next/next/no-img-element */
import CheckoutButton from '@/components/CheckoutButton'
import ProductList from '@/components/ProductList'

export default function Home() {
  return (
    <ProductList>
      <CheckoutButton />
    </ProductList>
  )
}
