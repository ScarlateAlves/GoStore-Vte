import { baseTheme, createTheme } from '@vtex/store-ui'

type Custom = {
  sizes: {
    container: string
  }
}

const custom: Custom = {
  sizes: {
    container: '98rem',
  },
}

const customBase = {
  useCustomProperties: false,
  initialColorModeName: false,
  initialColorMode: false,
  useLocalStorage: false,
  colors: {
    text: '#3f3f40',
    textMuted: '#979899',
    textBold: '#03003d',
    background: '#fff',
    primary: '#0f3e99',
    secondary: '#f71963',
    muted: '#f0f0f0',
    gray: '#e3e4e6',
  },
  sizes: {
    container: '96rem',
  },
  layout: {
    background: 'red',
    container: {
      px: [1, 2, 3],
    },
  },
}

export const base = createTheme(baseTheme, custom, customBase)