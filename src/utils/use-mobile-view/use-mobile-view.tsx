import styles from './use-mobile-view.module.scss'

export type UseMobileViewConfig = {
  /**
   * 'sm' = 560px
   * 'md' = 720px
   * 'lg' = 960px
   * @default 'md'
   **/
  threshold?: 'sm' | 'md' | 'lg'

  /** @default false */
  inverse?: boolean
}

function useMobileView({
  threshold = 'md',
  inverse = false,
}: UseMobileViewConfig = {}) {
  return styles[`mobileView__${threshold}${inverse ? '-inverse' : ''}`]
}

export default useMobileView
