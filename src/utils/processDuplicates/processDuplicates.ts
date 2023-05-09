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
      result[element.category_name][element.sub_category_name][tag] = {}
    }
  }
  for (let element of jsonData) {
    let tags = element.tags
    for (let tag in tags) {
      for (let tagData in element.tags[tag]) {
        if (
          typeof result[element.category_name][element.sub_category_name][tag][
            tagData
          ] != 'object'
        ) {
          result[element.category_name][element.sub_category_name][tag][
            tagData
          ] = []
        }
        result[element.category_name][element.sub_category_name][tag][tagData] =
          result[element.category_name][element.sub_category_name][tag][
            tagData
          ].concat(element.tags[tag][tagData])
      }
    }
  }
  for (let element of jsonData) {
    let tags = element.tags
    for (let tag in tags) {
      for (let tagData in element.tags[tag]) {
        if (
          typeof result[element.category_name][element.sub_category_name][tag][
            tagData
          ] != 'string' &&
          result[element.category_name][element.sub_category_name][tag][tagData]
            .length != undefined
        ) {
          result[element.category_name][element.sub_category_name][tag][
            tagData
          ] = new Set(
            result[element.category_name][element.sub_category_name][tag][
              tagData
            ]
          )
          result[element.category_name][element.sub_category_name][tag][
            tagData
          ] = Array.from(
            result[element.category_name][element.sub_category_name][tag][
              tagData
            ]
          )
        }
      }
    }
  }

  return result
}
