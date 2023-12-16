// Styling Imports
import { HeaderContainer, CartButton } from '@/styles/components/header'

// Strategic Imports
import { useContext } from 'react'
import { CartContext } from '@/contexts/cartContext'
import Image from 'next/image'

// Icons Imports
import { Handbag } from 'phosphor-react'

// Image Imports
import logoImg from '@/assets/logo.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Header() {
  const { handleOpenCart, products } = useContext(CartContext)
  const { pathname } = useRouter()

  return (
    <HeaderContainer
      css={{
        justifyContent: pathname === '/success' ? 'center' : 'space-between',
      }}
    >
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <CartButton
        onClick={handleOpenCart}
        css={{
          '&:after': {
            content: `"${products?.length}"`,
            visibility: products.length > 0 ? 'visible' : 'hidden',
          },
          svg: {
            color: products.length === 0 ? '#8D8D99' : '$white',
          },
          display: pathname === '/success' ? 'none' : 'flex',
        }}
      >
        <Handbag size={24} weight="bold" />
      </CartButton>
    </HeaderContainer>
  )
}
