// Styling Imports
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'

// Strategic Imports
import type { AppProps } from 'next/app'
import Image from 'next/image'

// Image Imports
import logoImg from '../assets/logo.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
