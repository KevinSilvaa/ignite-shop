// Styling Imports
import { HomeContainer, Product } from "@/styles/pages/home"
import { CartButton } from "@/styles/components/header"
import "keen-slider/keen-slider.min.css"

// Strategic Imports
import Head from "next/head"
import { useKeenSlider } from "keen-slider/react"
import { stripe } from "@/lib/stripe"
import Stripe from "stripe"
import Image from "next/image"
import { GetStaticProps } from "next"
import { useContext } from "react"
import { CartContext, ProductProps } from "@/contexts/cartContext"
import { priceFormatter } from "src/utils/priceFormatter"

// Icons Imports
import { Handbag } from "phosphor-react"

interface HomeProps {
  products: ProductProps[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    mode: 'snap',
    slides: {
      perView: 'auto',
      spacing: 48,
    },
  })

  const { handleAddToCart } = useContext(CartContext);
  function productIsAlreadyAdded(p: ProductProps) {
    const product = products.find(product => product.id === p.id);

    if (product) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => (
          <Product
            href={`/product/${product.id}`}
            className="keen-slider__slide"
            key={product.id}
            prefetch={false}
          >
            <Image src={product.imageUrl} priority width={520} height={480} alt="" />

            <footer>
              <div>
                <strong>{product.name}</strong>
                <span>{priceFormatter.format(product.price)}</span>
              </div>

              <CartButton
                onClick={e => {
                  e.preventDefault();
                  handleAddToCart(product)
                }}
              >
                <Handbag
                  size={32}
                  color="white"
                  weight="bold"
                />
              </CartButton>
            </footer>
          </Product>
        ))

        }

      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
