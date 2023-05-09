export default function findSelectedCategoryId(
  selectedCategory: string,
  categories: any
) {
  // @ts-ignore
  for (const [key, value] of Object.entries(categories)) {
    let firstVal: any = value
    if (selectedCategory === firstVal.name) {
      return firstVal.id
    }
    // @ts-ignore
    for (const [key2, value2] of Object.entries(firstVal.sub_categories)) {
      let secondVal: any = value2
      if (selectedCategory === secondVal.name) {
        return secondVal.id
      }
      // @ts-ignore
      for (const [key3, value3] of Object.entries(secondVal.properties)) {
        let thirdVal: any = value3
        if (selectedCategory === thirdVal.name) {
          return thirdVal.id
        }
      }
    }
  }
}
