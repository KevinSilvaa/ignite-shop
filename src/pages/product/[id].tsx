// Styling Imports
import {
  ProductContainer,
  ImageContainer,
  ProductDetails,
} from '@/styles/pages/product'

// Strategic Imports
import Head from 'next/head'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import { useContext } from 'react'
import { CartContext } from '@/contexts/cartContext'
import { priceFormatter } from 'src/utils/priceFormatter'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { products, handleAddToCart } = useContext(CartContext)

  const productWithSameId = products.find((p) => p.id === product.id)

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{priceFormatter.format(product.price)}</span>
          <p>{product.description}</p>

          <button
            onClick={() => handleAddToCart(product)}
            disabled={!!productWithSameId}
          >
            {productWithSameId
              ? 'Produto já adicionado ao carrinho'
              : 'Colocar na sacola'}
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = []

  return {
    paths,
    fallback: true,
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount / 100,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
