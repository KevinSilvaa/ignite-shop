import { styled } from '@/styles/index'

export const CartContainer = styled('div', {
  position: 'fixed',
  overflowY: 'auto',
  top: 0,
  bottom: 0,
  right: 0,
  padding: '4.5rem 3rem',
  width: 480,
  backgroundColor: '$gray800',
  zIndex: 3,
  boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.80)',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  transition: 'all 0.2s ease-in-out',

  h3: {
    fontSize: '1.25rem',
    color: '$gray100',
    fontWeight: 'bold',
    lineHeight: 1.6,
  },
})

export const CartCloseButton = styled('button', {
  position: 'absolute',
  zIndex: 4,
  top: '1.5rem',
  right: '1.5rem',
  background: 'transparent',
  border: 0,
  width: 24,
  height: 24,
  cursor: 'pointer',
  color: '$white',
})

export const CartEmptyContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2.5rem',
  marginTop: '10rem',
  color: '$green300',

  strong: {
    fontSize: '$lg',
  },
})

export const Products = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const Product = styled('div', {
  display: 'flex',
  gap: '1.25rem',
})

export const ProductImage = styled('div', {
  padding: '0 0.25rem',
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  width: 'fit-content',
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '$md',
  lineHeight: 1.6,

  span: {
    color: '$gray300',
  },

  strong: {
    color: '$gray100',
  },
})

export const ProductRemoveButton = styled('button', {
  marginTop: '0.5rem',
  width: 'fit-content',
  background: 'transparent',
  border: 0,
  color: '$green500',
  lineHeight: 1.6,
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    color: '$green300',
  },
})

export const CartCheckoutContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  p: {
    color: '$gray100',
    lineHeight: 1.6,
  },
})

export const CartItemsQuantity = styled('div', {
  span: {
    fontSize: '$md',
    color: '$gray300',
  },
})

export const CartItemsPrice = styled('div', {
  p: {
    fontWeight: 'bold',
    fontSize: '$md',
  },

  strong: {
    fontSize: '$lg',
    lineHeight: 1.4,
  },
})

export const CartCheckoutButton = styled('button', {
  backgroundColor: '$green500',
  color: '$white',
  fontSize: '$md',
  lineHeight: 1.6,
  fontWeight: 'bold',
  border: 0,
  borderRadius: 8,
  padding: '1.25rem 2rem',
  cursor: 'pointer',
  marginTop: '3.5rem',
  transition: 'all 0.2s ease-in-out',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },
})
