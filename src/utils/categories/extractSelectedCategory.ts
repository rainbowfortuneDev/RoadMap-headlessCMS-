import { removeKey } from '../../components/_shared/header/Searchbar'

export default function extractSelectedCategory(
  selectedItem: string,
  obj: any
) {
  // @ts-ignore
  for (const [key, value] of Object.entries(obj)) {
    let firstval: any = value
    if (key === removeKey(selectedItem)) {
      return { Category: key }
    }
    // @ts-ignore
    for (const [key2, value2] of Object.entries(firstval)) {
      let secondVal: any = value2
      if (key2 === removeKey(selectedItem)) {
        return { Category: key, SubCategory: key2 }
      }
      // @ts-ignore
      for (const [key3, value3] of Object.entries(secondVal)) {
        if (key3 === removeKey(selectedItem)) {
          return { Category: key, SubCategory: key2, Property: key3 }
        }
      }
    }
  }
}
