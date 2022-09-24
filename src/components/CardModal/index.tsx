import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import Image from 'next/future/image'
import { X } from 'phosphor-react'
import { useContext, useState } from 'react'

import { CartContext } from '../../contexts/CartContext'

import {
  Card,
  CardItems,
  Content,
  CloseButton,
  ImageContainer,
  Summary,
} from './styles'

export function CardModal() {
  const { cartItem, removeItemCart } = useContext(CartContext)

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const cartItemsTotal = cartItem.reduce((total, cartItem) => {
    return total + cartItem.quantity * Number(cartItem.price)
  }, 0)

  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartItemsTotal / 100)

  function handleRemoveProductCartById(productId: string) {
    removeItemCart(productId)
  }

  async function handleBuyManyProducts() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        line_items: cartItem.map((product) => {
          return {
            price: product.defaultPriceId,
            quantity: product.quantity,
          }
        }),
      })

      console.log(response)

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      // Interessante se conectar com uma ferramenta de observabilidade (Datadog / Sentry)
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <Content>
      <Dialog.Title> Sacola de compras </Dialog.Title>

      <CloseButton>
        <X size={24} />
      </CloseButton>

      <CardItems>
        {cartItem &&
          cartItem.map((product) => {
            return (
              <Card key={product.id}>
                <ImageContainer>
                  <Image src={product.imageUrl} width={94} height={94} alt="" />
                </ImageContainer>

                <header>
                  <span>{product.name}</span>
                  <strong>{product.priceFormatted}</strong>
                  <button
                    disabled={isCreatingCheckoutSession}
                    onClick={() => handleRemoveProductCartById(product.id)}
                  >
                    Remover
                  </button>
                </header>
              </Card>
            )
          })}
      </CardItems>

      <footer>
        <Summary>
          <p>
            Quantidade
            <span>{cartItem.length} item(s)</span>
          </p>

          <strong>
            Valor total
            <span>{priceFormatted}</span>
          </strong>
        </Summary>

        <button onClick={handleBuyManyProducts}>Finalizar compra</button>
      </footer>
    </Content>
  )
}
