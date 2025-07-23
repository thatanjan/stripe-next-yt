import products from '@/app/products'

const ProductList = ({ children }) => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200'>
      <div className='w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-gray-100'>
        <h2 className='text-2xl font-bold mb-2 text-center'>Checkout</h2>
        <p className='text-gray-500 mb-6 text-center'>
          Pay securely with Stripe
        </p>
        <div className='mb-6 flex flex-col gap-4'>
          {products.map((product, idx) => (
            <div
              key={idx}
              className='flex items-center gap-4 border-b pb-3 last:border-b-0 last:pb-0'
            >
              <img
                src={product.image}
                alt={product.name}
                className='w-12 h-12 rounded object-cover border'
              />
              <div className='flex-1'>
                <div className='font-medium'>{product.name}</div>
                <div className='text-xs text-gray-500'>
                  Qty: {product.quantity}
                </div>
              </div>
              <div className='font-semibold'>
                ${(product.price / 100).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {children}
      </div>
    </div>
  )
}

export default ProductList
