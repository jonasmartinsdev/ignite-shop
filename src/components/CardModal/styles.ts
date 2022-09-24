import { styled } from '../../styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Content = styled(Dialog.Content, {
  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  position: 'fixed',
  top: '0',
  right: '0',
  bottom: '0',
  width: '100%',
  maxWidth: '450px',
  padding: 48,
  zIndex: 9999,

  display: 'flex',
  flexDirection: 'column',

  footer: {
    marginTop: 'auto',

    button: {
      width: '100%',
      marginTop: 57,
      backgroundColor: '$green500',
      border: 0,
      color: '$white',
      borderRadius: 8,
      padding: '1.25rem',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '$md',

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },

      '&:not(:disabled):hover': {
        backgroundColor: '$green300',
      },
    },
  },
})

export const CardItems = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
})

export const Card = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 20,

  header: {
    span: {
      display: 'block',
      fontSize: 18,
      lineHeight: 1.6,
      color: '$gray300',
    },

    strong: {
      display: 'block',
      fontSize: 18,
      lineHeight: 1.6,
    },

    button: {
      marginTop: 8,
      color: '$green500',
      backgroundColor: 'transparent',
      border: 0,
      fontSize: 16,
      fontWeight: 'bold',
      padding: 0,
      cursor: 'pointer',
    },
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 101,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const Summary = styled('div', {
  'p, strong': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  p: {
    span: {
      fontSize: '$md',
    },
  },

  strong: {
    marginTop: 12,
    fontSize: '$md',
    span: {
      fontSize: '$xl',
    },
  },
})

export const CloseButton = styled(Dialog.Close, {
  all: 'unset',
  position: 'absolute',
  top: 10,
  right: 10,
  color: '$gray700',
  cursor: 'pointer',
})
