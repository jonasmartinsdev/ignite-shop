import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,

  '.arrow': {
    position: 'absolute',
    top: '50%',
    width: 48,
    height: 48,
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  },

  '.arrow--left': {
    left: 16,
  },

  '.arrow--right': {
    left: 'auto',
    right: 16,
  },
})

export const Product = styled('a', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      display: 'block',
      fontSize: '$lg',
    },

    span: {
      display: 'block',
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },

    button: {
      cursor: 'pointer',
      padding: '0.75rem',
      borderRadius: 6,
      border: 0,
      backgroundColor: '$green500',
      color: '$white',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
