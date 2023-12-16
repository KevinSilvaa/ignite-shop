// Styling Imports
import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'

// Components Imports
import { Header } from "@/components/Header"
import { Cart } from "@/components/Cart"
import { CartContextProvider } from '@/contexts/cartContext'

// Strategic Imports
import type { AppProps } from 'next/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartContextProvider>
        <Header />
        <Cart />

        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  )
}
