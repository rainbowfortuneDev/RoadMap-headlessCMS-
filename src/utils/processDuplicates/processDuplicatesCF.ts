export default function processDuplicates(jsonData: any) {
  let result: { [name: string]: any } = {}

  for (let element of jsonData) {
    result[element.category_name] = {}
  }
  for (let element of jsonData) {
    result[element.category_name][element.sub_category_name] = {}
  }

  for (let element of jsonData) {
    let tags = element.tags
    for (let tag in tags) {
      for (let tagData in element.tags[tag]) {
        result[element.category_name][element.sub_category_name][tag][tagData] =
          result[element.category_name][element.sub_category_name][tag][
            tagData
          ].concat(element.tags[tag][tagData])
      }
    }
  }

  for (let element of jsonData) {
    let values = element.values
    if (values !== null) {
      for (let val in values) {
        for (let element2 of values[val].values[val].options) {
          result[element.category_name][element.sub_category_name][element2] =
            {}
        }
      }
    }
  }

  return result
}
