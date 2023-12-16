import { createContext, ReactNode, useState } from 'react'

export interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: number
  description: string
  defaultPriceId: string
}

interface CartContextType {
  cartIsOpen: boolean
  products: ProductProps[]
  handleAddToCart: (product: ProductProps) => void
  handleRemoveFromCart: (product: ProductProps) => void
  handleOpenCart: () => void
  handleCloseCart: () => void
  totalPrice: number
}

export const CartContext = createContext({} as CartContextType)

interface CartProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartProviderProps) {
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [products, setProducts] = useState<ProductProps[]>([])

  function handleOpenCart() {
    setCartIsOpen(true)
  }

  function handleCloseCart() {
    setCartIsOpen(false)
  }

  function handleAddToCart(product: ProductProps) {
    const productIsAlreadyAdded = products.find((p) => p.id === product.id)
    if (productIsAlreadyAdded) {
      return alert('Você já adicionou este produto no carrinho!')
    }

    setProducts((state) => [...state, product])
  }

  function handleRemoveFromCart(product: ProductProps) {
    setProducts((state) => state.filter((item) => item.id !== product.id))
  }

  const totalPrice = products.reduce(
    (prevState, currentProduct) => prevState + currentProduct.price,
    0,
  )

  return (
    <CartContext.Provider
      value={{
        cartIsOpen,
        products,
        totalPrice,
        handleAddToCart,
        handleRemoveFromCart,
        handleOpenCart,
        handleCloseCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
