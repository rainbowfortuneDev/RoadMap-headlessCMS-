import { useState } from 'react'

// import ClickAwayListener from '@mui/base/ClickAwayListener'
import { alpha } from '@mui/material/styles'
import Slide from '@mui/material/Slide'
// import { styled } from '@mui/system'
import { styled, ClickAwayListener } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'
import Searchbar from './Searchbar'
import styles from './header.module.scss'

import IconButton from '@mui/material/IconButton'
// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64
const APPBAR_DESKTOP = 92

const SearchbarStyle = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: APPBAR_MOBILE,
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  padding: theme.spacing(0, 3),
  // boxShadow: theme.customShadows.z8,
  backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
  [theme.breakpoints.up('md')]: {
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}))

// ----------------------------------------------------------------------

export default function SearchbarMobile(props: any) {
  const [isOpen, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div
        style={{ width: '100%', alignItems: 'center' }}
        className={styles.hideDesktop}
      >
        {!isOpen && (
          <IconButton onClick={handleOpen} style={{ alignSelf: 'center' }}>
            <SearchIcon color="secondary" />
          </IconButton>
        )}

        <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
          <SearchbarStyle>
            <Searchbar {...props} />
          </SearchbarStyle>
        </Slide>
      </div>
    </ClickAwayListener>
  )
}
