import { styled } from '../../styles'
import * as Dialog from '@radix-ui/react-dialog'

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    isActiveCard: {
      true: {
        justifyContent: 'space-between',
      },
    },
  },
})

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  background: 'rgba(0,0,0,0.6)',
  inset: 0,
  zIndex: 1,
})

export const IconButton = styled(Dialog.Trigger, {
  padding: '0.75rem',
  borderRadius: 6,
  border: 0,
  backgroundColor: '$gray800',
  color: '$gray300',
  position: 'relative',

  cursor: 'pointer',

  '&:disabled': {
    backgroundColor: '$gray800',
    color: '$gray700',
  },

  div: {
    position: 'absolute',
    backgroundColor: '$green500',
    border: '3px solid $gray900',
    color: '$white',
    width: 24,
    height: 24,
    borderRadius: 9999,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    top: -7,
    right: -7,
  },
})
