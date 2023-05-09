// import type { LinkProps as MuiLinkProps } from '@mui/material'
import MuiLink from '@mui/material/Link'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { forwardRef } from 'react'

// type LinkProps = MuiLinkProps & {
//   href: string
//   activeClassName?: string
//   noRouter?: boolean
// }

const Link = forwardRef<HTMLSpanElement, any>(function ForwardedLink(
  {
    activeClassName,
    noRouter,

    href,
    className: _className,

    children,
    ...other
  },
  ref
) {
  const router = useRouter()
  const className = `${_className} ${
    router.pathname === href ? activeClassName : ''
  }`

  return (
    <NextLink href={href} passHref>
      <MuiLink {...other} ref={ref} className={className}>
        {children}
      </MuiLink>
    </NextLink>
  )
})

export default Link
