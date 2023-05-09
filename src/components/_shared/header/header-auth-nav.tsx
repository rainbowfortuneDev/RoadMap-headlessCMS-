import Image from 'next/image'
import NextLink from 'next/link'
// import { Filter } from 'react-feather'
import useLogout from '../../../utils/auth/use-logout'
import { useCity } from '../../../utils/city/city-context'
// import categoryIcon from '../../../assets/icons/_shared/header/category.svg'

import CategoryMenuIcon from '@mui/icons-material/Category'
import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import LogoAsset from '../../../assets/images/_shared/logo.png'
//  import CategoryMenuIcon from '../../../assets/icons/_shared/header/CategoryMenu.svg'
// import chatIcon from '../../../assets/icons/_shared/header/Chat.svg'

// import chatIcon from '@mui/icons-material/Chat';
import ChatIcon from '@mui/icons-material/Chat'

import useDropDown from '../../../utils/use-drop-down/use-drop-down'
import useMobileView from '../../../utils/use-mobile-view/use-mobile-view'
import { UserContextValue } from '../../../utils/user/user-context'
import Link from '../link/link'
import styles from './header.module.scss'

import dynamic from 'next/dynamic'
// const Image = dynamic(() => import("next/image").then(module => module.default));
// export const Image = dynamic(() => import('next/image'), {
//   ssr: false,
// });
// import Image from 'next/image'
  // const Button = dynamic(() => import("@mui/material/Button"));

// import { Suspense } from 'react'

// const Button = dynamic(() => import('@mui/material/Button'), {
//   suspense: true,
// })

import {Button, Divider, Typography } from '@mui/material'

import { NEXT_PUBLIC_BLOG_URL, enableDonation } from '../../../utils/config'

type HeaderAuthNavProps = {
  user: Exclude<UserContextValue['user'], null>
  openNav: any
}

function HeaderAuthNav({ user, openNav }: HeaderAuthNavProps) {
  const { zipAndCity } = useCity(false)
  const logout = useLogout({
    redirectTo: zipAndCity ? `/city/${zipAndCity.city.alt_id}` : '/',
  })

  const [menuRef, isMenuOpen, toggleMenu, , logoutRef] = useDropDown()

  const wide = useMobileView({ inverse: true })
  const narrow = useMobileView()
  // const Button = dynamic(() => import("@mui/material/Button"));
        // console.log("first:" + {user.avatar?.url});

  return (
    <>
      <Tooltip title="Categories">
        <Button
          variant="text"
          onClick={openNav}
          className={`${wide} ${styles.header__chatlink}`}
        >
          <CategoryMenuIcon fontSize="medium" />
        </Button>
      </Tooltip>
      <NextLink href="/messages" passHref>
        <Tooltip title="Messages">
          <Button className={`${wide} ${styles.header__categorylink}`}>
            <ChatIcon fontSize="medium" />
          </Button>
        </Tooltip>
      </NextLink>

      <span>
        <Button
          id="menu_toggle_button"
          ref={menuRef}
          className={styles.header__avatar}
          onClick={toggleMenu}
        >
          {user.avatar?.url ? (
            <Image
              alt={`${user.full_name}'s Avatar`}
              src={user.avatar?.url}
              layout="fixed"
              height={46}
              width={46}
              sizes="46px"
              objectFit="cover"
              priority = {true}
            />
          ) : (
            <div className={styles.avatar} priority = {true}>
              <Avatar src="/broken-image.jpg"/>
            </div>
          )}
        </Button>
        {!isMenuOpen ? null : (
          <div className={styles.header__menu} onClick={toggleMenu}>
            <Box display={{ sm: 'flex', md: 'none' }} sx={{ mx: 3 }}>
              <NextLink
                href={zipAndCity ? `/city/${zipAndCity.city.alt_id}` : '/'}
                passHref
              >
                <Image
                  alt="1stKare Logo"
                  src={LogoAsset}
                  placeholder="blur"
                  height={60}
                  width={80}
                  layout="responsive"
                  priority = {true}
                  style={{ maxWidth: '80%' }}
                />
              </NextLink>
            </Box>

            <Typography variant="body2">{user.full_name}</Typography>

            <NextLink href="/seller/[id]" as={`/seller/${user.alt_id}`}>
              My Posts
            </NextLink>
            <NextLink href="/settings/seller-profile">Profile</NextLink>
            <NextLink href="/settings/account">Settings</NextLink>

            <Divider />

            <Link
              href="/"
              className={narrow}
              onClick={(e: any) => {
                e.preventDefault()
                openNav()
                toggleMenu()
              }}
            >
              Categories
            </Link>

            <Link className={narrow} href={`/messages`}>
              Messages
            </Link>

            <div className={styles.hideDesktop}>
              <Link href="/?stay=1">Change Location</Link>
            </div>

            <Divider className={narrow} />

            <Link href={NEXT_PUBLIC_BLOG_URL || '#'} noRouter variant="body1">
              Blog
            </Link>

            {enableDonation != 'false' && (
              <Link
                href={process.env.NEXT_PUBLIC_PAYPAL_DONATION_LINK || '#'}
                variant="body1"
              >
                Donate
              </Link>
            )}

            <Divider />

            <Link
              href={zipAndCity ? `/city/${zipAndCity.city.alt_id}` : '/'}
              ref={logoutRef}
              onClick={logout}
            >
              Logout
            </Link>
          </div>
        )}
      </span>
    </>
  )
}

export default HeaderAuthNav
