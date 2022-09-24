import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/future/image'

import { HeaderContainer, IconButton, Overlay } from './styles'

import logoImg from '../../assets/logo.svg'
import { Handbag } from 'phosphor-react'
import { CardModal } from '../CardModal'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import Link from 'next/link'

interface HeaderProps {
  isActiveCard?: boolean
}

export function Header({ isActiveCard = true }: HeaderProps) {
  const { cartItem } = useContext(CartContext)

  return (
    <HeaderContainer isActiveCard={isActiveCard}>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      {isActiveCard && (
        <Dialog.Root>
          <Overlay />
          <IconButton disabled={cartItem.length === 0}>
            {cartItem.length > 0 && <div>{cartItem.length}</div>}
            <Handbag size={24} weight="bold" />
          </IconButton>

          <CardModal />
        </Dialog.Root>
      )}
    </HeaderContainer>
  )
}
