/**
 * Card options for the Stripe Elements
 * @type {import('@stripe/stripe-js/dist/stripe-js/checkout').StripeCheckoutElementsOptions['appearance']} params - The parameters for the card options.
 */
export const appearance = {
  theme: 'stripe', // Or 'flat', 'night'
  variables: {
    colorPrimary: '#6366F1', // Indigo-500 equivalent
    colorBackground: '#ffffff',
    colorText: '#1f2937', // Gray-800 equivalent
    colorDanger: '#ef4444', // Red-500 equivalent
    fontFamily: 'system-ui, sans-serif',
    borderRadius: '0.375rem', // Default Tailwind rounded-md
    // Add more variables as needed
  },
  rules: {
    // Optional: More specific CSS-like rules
    '.Input': {
      // backgroundColor: '#e21c1cff', // Gray-100

      boxShadow: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      padding: '0.75rem', // Match py-3 px-3 in Tailwind often used for inputs
    },
    '.Input--invalid': {
      borderColor: '#ef4444',
    },
    '.Label': {
      fontWeight: '600', // Semibold
      marginBottom: '0.5rem',
    },
    '.Tab': {
      // For PaymentElement with tabs layout
      backgroundColor: '#e21c1cff', // Gray-100
    },
    '.Tab--selected': {
      backgroundColor: '#e0e7ff', // Indigo-100
    },
  },
}
