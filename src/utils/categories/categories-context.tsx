import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
} from 'react'

import { useCategoriesContext__GetMeQuery } from '../../generated/graphql'

import type { CategoriesContext__GetMeQuery } from '../../generated/graphql'

export type CategoriesContextValue = {
  categoriesLoading: boolean
  categoriesError: Error | null
  categories: CategoriesContext__GetMeQuery['categories'] | null

  refresh: () => void
}

export const CategoriesContextDefaultValue: CategoriesContextValue = {
  categoriesLoading: true,
  categoriesError: null,
  categories: null,

  refresh: () => {},
}

export const CategoriesContext = createContext<CategoriesContextValue>(
  CategoriesContextDefaultValue
)

type CategoriesProviderProps = PropsWithChildren<unknown>

function CategoriesProvider({ children }: CategoriesProviderProps) {
  const [
    { fetching: categoriesLoading, error: categoriesError, data: _data },
    reexecute,
  ] = useCategoriesContext__GetMeQuery()

  const refresh = useCallback(() => {
    reexecute({ requestPolicy: 'network-only' })
  }, [reexecute])

  const value = useMemo(
    () => ({
      categoriesLoading: categoriesLoading && !_data?.categories,

      categoriesError: categoriesError || null,
      categories: _data?.categories || null,

      refresh,
    }),
    [_data, refresh, categoriesError, categoriesLoading]
  )

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesProvider

export function useCategories() {
  const ctx = useContext(CategoriesContext)

  return ctx
}
