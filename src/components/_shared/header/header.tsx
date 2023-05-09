// import dynamic from 'next/dynamic'
import Image from 'next/image'
import NextLink from 'next/link'
// import { useRouter } from 'next/router'
import { useState } from 'react'
// import { Filter } from 'react-feather'
import LogoAsset from '../../../assets/images/_shared/logo.png'

import CategoryMenuIcon from '@mui/icons-material/Category'
import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'

// import CategoryMenuIcon from '../../../assets/icons/_shared/header/CategoryMenu.svg'
// import useOffSetTop from '../../../hooks/useOffSetTop'
import { useCategories } from '../../../utils/categories/categories-context'
import { useCity } from '../../../utils/city/city-context'
import useDropDown from '../../../utils/use-drop-down/use-drop-down'
import useMobileView from '../../../utils/use-mobile-view/use-mobile-view'
import { useUser } from '../../../utils/user/user-context'
import CategoryCard from '../category-card/category-card'

import Link from '../link/link'
import styles from './header.module.scss'
// import navConfig from './MenuConfig'
// import MenuMobile from './MenuMobile'
import overlayStyles from './screenoverlay.module.scss'
import Searchbar from './Searchbar'
import LocationIcon from '../../../assets/icons/location.svg'

import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import MoreVertIcon from '@mui/icons-material/MoreVert'
import HeaderAuthNav from './header-auth-nav'

import { NEXT_PUBLIC_BLOG_URL, enableDonation } from '../../../utils/config'

function Header(props: any) {
  // const isOffset = useOffSetTop(100)
  // const router = useRouter()
  // const { pathname } = router
  // const isHome = pathname === '/'
  const { user, userLoading } = useUser()
  const { categories = [] } = useCategories()

  const { zipAndCity } = useCity(false)

  const myCity: any = zipAndCity?.city

  const [menuRef, isMenuOpen, toggleMenu] = useDropDown()

  const wide = useMobileView({ inverse: true })
  const narrow = useMobileView()

  let [showNav, setShowNav] = useState(false)

  {
    /* siamparvez44 */
  }
  function openNav() {
    document.body.style.overflow = 'hidden'
    setShowNav(true)
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    // @ts-ignore
    // document?.getElementById('myNav')?.style?.height = '0%'
    document.body.style.overflow = 'auto'
    setShowNav(false)
  }

  return (
    <header className={styles.header}>
      <Grid container xs={12} alignItems="center" padding={{ xs: '0px 16px' }}>
        {/* <span className={narrow} /> */}
        <Grid item sm={4} display={{ xs: 'none', sm: 'flex' }}>
          {/* <div  className={styles.hideMobile} /> */}
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <NextLink
              href={zipAndCity ? `/city/${zipAndCity.city.alt_id}` : '/'}
              passHref
            >
              <Image
                alt="1stKare Logo"
                src={LogoAsset}
                placeholder="blur"
                height={95}
                width={155}
                layout="fixed"
                priority
                objectFit="contain"
              />
            </NextLink>
            <NextLink aria-disabled={!zipAndCity} href="/?stay=1" passHref>
              <Button
                className={styles.header__location}
                startIcon={<Image src={LocationIcon} alt="LocationIcon" />}
              >
                <Typography
                  className={styles.header__locationText}
                  variant="body2"
                  color={zipAndCity ? 'textPrimary' : 'textSecondary'}
                >
                  {zipAndCity
                    ? `${zipAndCity.city.name}, ${zipAndCity.city.state_code}`
                    : 'Not selected'}
                </Typography>
              </Button>
            </NextLink>
          </Box>
          {/* </div> */}
        </Grid>
        <Grid item sm={5} xs={10}>
          {zipAndCity && <Searchbar {...props} />}
        </Grid>
        {/* <span className={wide} /> */}

        <Grid component="nav" item sm={3} xs={2}>
          {/* <nav className={styles.header__nav}> */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            {!userLoading && user ? (
              <HeaderAuthNav user={user} openNav={openNav} />
            ) : (
              <>
                <Button
                  className={narrow}
                  /* className={styles.header__avatar} */ onClick={toggleMenu}
                  // sx={{ padding: 0, minWidth: 16, maxWidth: 64 }}
                >
                  <MoreVertIcon />
                </Button>

                {isMenuOpen && (
                  <div className={styles.header__menu} ref={menuRef}>
                    <Box display={{ sm: 'flex', md: 'none' }} sx={{ mx: 3 }}>
                      <NextLink
                        href={
                          zipAndCity ? `/city/${zipAndCity.city.alt_id}` : '/'
                        }
                        passHref
                      >
                        <Image
                          alt="1stKare Logo"
                          src={LogoAsset}
                          placeholder="blur"
                          height={60}
                          width={80}
                          layout="responsive"
                          priority
                          style={{ maxWidth: '80%' }}
                        />
                      </NextLink>
                    </Box>
                    {!userLoading && zipAndCity ? (
                      <NextLink href="/login" passHref>
                        <Button
                          variant="contained"
                          className={styles.header__navButtonsMobile}
                          sx={{
                            borderRadius: 50,
                          }}
                        >
                          Sign in
                        </Button>
                      </NextLink>
                    ) : null}

                    <Link
                      href="/"
                      onClick={(e: any) => {
                        e.preventDefault()
                        openNav()
                        toggleMenu()
                      }}
                    >
                      {myCity?.name && 'CATEGORIES'}
                    </Link>

                    <Link href="/?stay=1">CHANGE LOCATION</Link>

                    <Divider />

                    <Link
                      href={NEXT_PUBLIC_BLOG_URL || '#'}
                      noRouter
                      variant="body1"
                    >
                      BLOG
                    </Link>

                    {enableDonation != 'false' && (
                      <Link
                        href={
                          process.env.NEXT_PUBLIC_PAYPAL_DONATION_LINK || '#'
                        }
                        variant="body1"
                      >
                        DONATE
                      </Link>
                    )}
                  </div>
                )}

                {myCity?.name && (
                  <Tooltip title="Categories">
                    <Button
                      variant="text"
                      // sx={{ padding: 0, minWidth: 16, maxWidth: 64 }}
                      color="primary"
                      size="large"
                      className={`${wide}`}
                      onClick={openNav}
                    >
                      <CategoryMenuIcon fontSize="medium" />
                    </Button>
                  </Tooltip>
                )}
                {!userLoading && zipAndCity ? (
                  <NextLink href="/login" passHref>
                    <Button
                      variant="outlined"
                      className={`${wide}`}
                      sx={{
                        borderRadius: 50,
                      }}
                    >
                      Sign in
                    </Button>
                  </NextLink>
                ) : null}
              </>
            )}
          </Box>
          <div
            id="myNav"
            className={overlayStyles.overlay}
            style={showNav ? { height: '100%' } : { height: '0%' }}
            onClick={closeNav}
          >
            <div className={overlayStyles.overlaycontent}>
              <div className={overlayStyles.categories}>
                <div className={overlayStyles.categories__content}>
                  <div>
                    <Grid
                      container
                      spacing={4}
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      {categories?.map((cat: any) => (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={4}
                          lg={3}
                          xl={3}
                          key={cat.id}
                        >
                          <CategoryCard key={cat.id} category={cat} />
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </nav> */}
        </Grid>
      </Grid>
    </header>
  )
}

export default Header
