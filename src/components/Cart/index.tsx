// Styling Imports
import {
  CartContainer,
  CartCloseButton,
  Products,
  CartEmptyContainer,
  Product,
  ProductImage,
  ProductDetails,
  ProductRemoveButton,
  CartCheckoutContainer,
  CartItemsQuantity,
  CartItemsPrice,
  CartCheckoutButton,
} from "@/styles/components/cart";

// Strategic Imports
import { useContext, useState } from "react";
import { CartContext } from "@/contexts/cartContext";
import Image from "next/image";
import { priceFormatter } from "src/utils/priceFormatter";
import axios from "axios";

// Icons Imports
import { X, XCircle } from "phosphor-react";

export function Cart() {
  const { products, handleCloseCart, cartIsOpen, handleRemoveFromCart, totalPrice } = useContext(CartContext);

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  const cartIsEmpty = products.length === 0;

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        products: products.map(product => product),
      })

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout!")
    }
  }

  return (
    <CartContainer
      css={{ transform: cartIsOpen ? "translateX(0)" : "translateX(110%)" }}
    >
      <CartCloseButton
        onClick={handleCloseCart}
      >
        <X
          size={24}
          weight="bold"
          color="#8D8D99"
        />
      </CartCloseButton>
      <h3>Sacola de compras</h3>

      <Products>
        {cartIsEmpty ?
          <CartEmptyContainer>
            <strong>Ooooops! Seu carrinho está vazio</strong>
            <XCircle size={132} />
          </CartEmptyContainer>
          :

          products.map(product => (
            <Product key={product.id}>
              <ProductImage>
                <Image src={product.imageUrl} width={94} height={94} alt="" />
              </ProductImage>

              <ProductDetails>
                <span>{product.name}</span>
                <strong>{priceFormatter.format(product.price)}</strong>

                <ProductRemoveButton onClick={() => handleRemoveFromCart(product)}>
                  Remover
                </ProductRemoveButton>
              </ProductDetails>
            </Product>
          ))

        }
      </Products>

      <CartCheckoutContainer>
        <CartItemsQuantity>
          <p>Quantidade</p>
          <span>{products.length} {products.length === 1 ? "item" : "itens"}</span>
        </CartItemsQuantity>

        <CartItemsPrice>
          <p>Valor total</p>
          <strong>{priceFormatter.format(totalPrice)}</strong>
        </CartItemsPrice>

        <CartCheckoutButton
          onClick={handleCheckout}
          disabled={isCreatingCheckoutSession || cartIsEmpty}
        >
          Finalizar Compra
        </CartCheckoutButton>
      </CartCheckoutContainer>
    </CartContainer>
  );
}
