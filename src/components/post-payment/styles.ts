// import { makeStyles } from '@material-ui/styles'
import { makeStyles } from '@mui/styles'

export const usePaymentStyles = makeStyles(() => ({
  main: {
    margin: '3rem auto',
  },
  priceInput: {
    backgroundColor: '#e4efff',
  },
  filledSummary: {
    borderRadius: '5px',
    backgroundColor: '#e4efff',
  },
  gridItem: {
    backgroundColor: 'white',
    width: '40rem',
    height: 'auto',
    borderRadius: '1.5rem',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    padding: '2rem',
    textAlign: 'center',
  },
  paymentDesc: {
    maxWidth: ' auto',
    marginLeft: '0.5rem',
    paddingLeft: '0.4rem',

    margin: '22px 0',

    color: '#6d6e70',
  },
  paymentTitle: {
    fontFamily: ['"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    color: 'blue',
    fontWeight: 900,
  },
  title: {
    fontFamily: ['"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    color: 'blue',
    fontWeight: 700,
  },
  totalPrice: {
    fontFamily: ['Arial, sans-serif'].join(','),
    fontWeight: 900,
  },
  thanksButton: {
    backgroundColor: '#ffcbc4',
    borderRadius: 99,
    padding: '10px',
    width: '90%',
  },
  cancelButton: {
    backgroundColor: '#ffcbc4',
    borderRadius: 99,
    padding: '10px',
    width: '90%',
  },
  circularIndicator: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
