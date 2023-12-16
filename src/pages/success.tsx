// Styling Imports
import {
  SuccessContainer,
  ProductsContainer,
  ProductImage,
} from '@/styles/pages/success'

// Strategic Imports
import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import { ProductProps } from '@/contexts/cartContext'

interface SuccessProps {
  customerName: string
  products: ProductProps[]
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ProductsContainer>
          {products.map((product) => (
            <ProductImage key={product.id}>
              <Image src={product.imageUrl} width={130} height={130} alt="" />
            </ProductImage>
          ))}
        </ProductsContainer>

        <h1>Compra efetuada</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{' '}
          <strong>
            {products.length} {products.length === 1 ? 'camiseta' : 'camisetas'}
          </strong>{' '}
          já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionid = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionid, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details.name
  const products = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
    }
  })

  return {
    props: {
      customerName,
      products,
    },
  }
}
