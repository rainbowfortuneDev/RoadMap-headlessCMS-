import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4040BF',
    },
    secondary: {
      main: '#40BF40',
    },
    error: {
      main: '#BF4640',
    },
    background: {
      default: '#FBFCFF',
      paper: '#FFFFFF',
    },
    grey: {
      A400: '#73738C',
    },
    text: {
      primary: '#000000',
      secondary: '#73738C',
    },
  },

  shadows: [
    'none',

    'none',
    'none',
    'none',
    'none',
    'none',
    'none',

    '0px 3px 7px -1px rgba(0, 0, 0, 0.07)',
    '0px 3px 7px -1px rgba(0, 0, 0, 0.07)',
    '0px 3px 7px -1px rgba(0, 0, 0, 0.07)',
    '0px 3px 7px -1px rgba(0, 0, 0, 0.07)',
    '0px 3px 7px -1px rgba(0, 0, 0, 0.07)',
    '0px 3px 7px -1px rgba(0, 0, 0, 0.07)',

    '0px 7px 14px -3px rgba(0, 0, 0, 0.1)',
    '0px 7px 14px -3px rgba(0, 0, 0, 0.1)',
    '0px 7px 14px -3px rgba(0, 0, 0, 0.1)',
    '0px 7px 14px -3px rgba(0, 0, 0, 0.1)',
    '0px 7px 14px -3px rgba(0, 0, 0, 0.1)',
    '0px 7px 14px -3px rgba(0, 0, 0, 0.1)',

    '0px 14px 42px -7px rgba(0, 0, 0, 0.14)',
    '0px 14px 42px -7px rgba(0, 0, 0, 0.14)',
    '0px 14px 42px -7px rgba(0, 0, 0, 0.14)',
    '0px 14px 42px -7px rgba(0, 0, 0, 0.14)',
    '0px 14px 42px -7px rgba(0, 0, 0, 0.14)',
    '0px 14px 42px -7px rgba(0, 0, 0, 0.14)',
  ],

  typography: {
    h1: { fontSize: '36px', fontWeight: 'bold', lineHeight: '150%' },
    h2: { fontSize: '32px', fontWeight: 'bold', lineHeight: '150%' },
    h3: { fontSize: '28px', fontWeight: 'bold', lineHeight: '150%' },
    h4: { fontSize: '24px', fontWeight: 'bold', lineHeight: '150%' },
    h5: { fontSize: '20px', fontWeight: 'bold', lineHeight: '150%' },
    h6: { fontSize: '16px', fontWeight: 'bold', lineHeight: '150%' },
    body1: { fontSize: '16px', lineHeight: '150%' },
    body2: { fontSize: '14px', lineHeight: '150%' },
  },
})
