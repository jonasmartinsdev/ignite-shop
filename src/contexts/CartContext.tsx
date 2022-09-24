import produce from 'immer'
import { createContext, ReactNode, useState } from 'react'

interface CartContextProviderProps {
  children: ReactNode
}

interface Product {
  id: string
  name: string
  imageUrl: string
  priceFormatted: string
  price: string
  description: string
  defaultPriceId: string
  quantity: number
}

interface CartContextType {
  cartItem: Product[]
  addProductToCart: (data: Product) => void
  removeItemCart: (cartItemId: string) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItem, setCartItem] = useState<Product[]>([])

  function addProductToCart(data: Product) {
    const productAlreadyExistsInCart = cartItem.findIndex(
      (product) => product.id === data.id,
    )

    const newCart = produce(cartItem, (draft) => {
      if (productAlreadyExistsInCart < 0) {
        draft.push(data)
      }
    })

    setCartItem(newCart)
  }

  function removeItemCart(cartItemId: string) {
    const productAlreadyExistsInCart = cartItem.findIndex(
      (product) => product.id === cartItemId,
    )

    const updateCart = produce(cartItem, (draft) => {
      if (productAlreadyExistsInCart >= 0) {
        draft.splice(productAlreadyExistsInCart, 1)
      }
    })

    setCartItem(updateCart)
  }

  return (
    <CartContext.Provider
      value={{ addProductToCart, cartItem, removeItemCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
