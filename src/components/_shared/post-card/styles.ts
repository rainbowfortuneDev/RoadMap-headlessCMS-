import { makeStyles } from '@mui/styles'

export const usePostCardStyles = makeStyles((theme: any) => ({
  input: {
    '& .MuiOutlinedInput-notchedOutline': {
      background: 'rgba(8, 68, 294, 0.07)',
      borderColor: 'rgba(8, 68, 294, 0.07)',
      borderRadius: 18,
    },
  },

  chip: {
    margin: theme.spacing(0.5),
    backgroundColor: '#cdd9f7',
  },
  iconButton: {
    fontSize: 12,
    borderRadius: 9,
    backgroundColor: 'rgba(149, 124, 252, 0.2)',
    color: '#0844CC',
    fontWeight: 500,
    marginRight: 10,
  },
  manageSubscriptions: {
    backgroundColor: '#f7e1e1',
    borderRadius: '0.3rem',
    height: '2.5rem',
    margin: '8px 8px',
  },
  editPost: {
    backgroundColor: '#cddbfa',
    borderRadius: '0.3rem',
    height: '2.5rem',
    margin: '8px 8px',
  },
  pausePost: {
    backgroundColor: '#fdfd96',
    borderRadius: '0.3rem',
    height: '2.5rem',
    margin: '8px 8px',
  },
  deletePost: {
    backgroundColor: '#f7e1e1',
    borderRadius: '0.3rem',
    height: '2.5rem',
    margin: '8px 8px',
  },
}))
