let flatten = require('flat')

export default function filterJSON(jsonData: any, searchText: string) {
  let foundValues: any = []
  const flatten_post = flatten(jsonData)

  Object.keys(flatten_post).map((key) => {
    if (flatten_post[key] === searchText || key?.includes(searchText)) {
      const objId = key.split('.', 1)

      foundValues.push(objId)
    }
  })

  foundValues = [].concat.apply([], foundValues)

  //@ts-ignore
  foundValues = [...new Set(foundValues)]

  let filteredObjects: any = []
  foundValues.forEach((item: any) => {
    filteredObjects.push(jsonData[parseInt(item)])
  })

  return filteredObjects
}
