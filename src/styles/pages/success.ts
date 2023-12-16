import { styled } from '@/styles/index'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: 656,
  margin: '0 auto',

  h1: {
    fontSize: '$2xl',
    color: 'gray100',
    marginTop: '3rem',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    lineHeight: 1.4,
    marginTop: '2rem',
  },

  a: {
    marginTop: '5rem',
    display: 'block',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 700,

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ProductsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '2rem',

  div: {
    marginRight: '-2rem',
  },
})

export const ProductImage = styled('div', {
  width: '100%',
  display: 'flex',
  marginLeft: '-1rem',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 9999,
  padding: '0.25rem',
  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.80)',

  img: {
    objectFit: 'cover',
  },
})
