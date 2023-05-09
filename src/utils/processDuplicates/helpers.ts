import { PostsProps } from '../../components/posts/posts'

export type TreeNode = {
  id: String | string
  name: String | string
  children: TreeNode[]
}
export type TreeNodeSB = {
  value: String | string
  title: String | string
  children: TreeNodeSB[]
}

export default function filterTree(posts: PostsProps['result_posts']) {
  var tree: TreeNode = {
    id: 'root',
    name: 'root',
    children: [],
  }

  posts.forEach((p) => {
    var flagi = false
    for (var i = 0; i < tree.children.length; i++) {
      if (tree.children[i].id == 'cat' + p.category_id) {
        flagi = true
        var flagj = false

        for (var j = 0; j < tree.children[i].children.length; j++) {
          if (tree.children[i].children[j].id == 'subcat' + p.sub_category_id) {
            flagj = true
            var flagk = false
            if (!p.tags) {
              break
            }
            Object.keys(p.tags).forEach((tagKey) => {
              for (
                var k = 0;
                k < tree.children[i].children[j].children.length;
                k++
              ) {
                if (tree.children[i].children[j].children[k].name == tagKey) {
                  flagk = true
                  var tags = Object.keys(p.tags[tagKey])
                  tags.forEach((t) => {
                    for (
                      var l = 0;
                      l <
                      tree.children[i].children[j].children[k].children.length;
                      l++
                    ) {
                      if (
                        tree.children[i].children[j].children[k].children[l]
                          .name == t
                      ) {
                        return
                      }
                    }
                    tree.children[i].children[j].children[k].children.push({
                      id: t,
                      name: t,
                      children: [],
                    })
                  })
                }
              }
              if (!flagk || tree.children[i].children[j].children.length == 0) {
                tree.children[i].children[j].children.push({
                  id: tagKey,
                  name: tagKey,
                  children: Object.keys(p.tags[tagKey]).map((tag, index) => {
                    return {
                      id: tag,
                      name: tag,
                      children: [],
                    }
                  }),
                })
              }
            })
          }
        }
        if (!flagj || tree.children[i].children.length == 0) {
          tree.children[i].children.push({
            id: 'subcat' + p.sub_category_id,
            name: p.sub_category_name,
            children: p.tags
              ? Object.keys(p.tags).map((tagkey, tagi) => {
                  return {
                    id: tagkey,
                    name: tagkey,
                    children: Object.keys(p.tags[tagkey]).map((tag, index) => {
                      return {
                        id: tag,
                        name: tag,
                        children: [],
                      }
                    }),
                  }
                })
              : [],
          })
        }
      }
    }

    if (!flagi || tree.children.length == 0) {
      tree.children.push({
        id: 'cat' + p.category_id,
        name: p.category_name,
        children: [
          {
            id: 'subcat' + p.sub_category_id,
            name: p.sub_category_name,
            children: p.tags
              ? Object.keys(p.tags).map((tagkey, tagi) => {
                  return {
                    id: tagkey,
                    name: tagkey,
                    children: Object.keys(p.tags[tagkey]).map((tag, index) => {
                      return {
                        id: tag,
                        name: tag,
                        children: [],
                      }
                    }),
                  }
                })
              : [],
          },
        ],
      })
    }
  })
  return tree
  //  tree.children.forEach(v=>{
  //     console.log(v.children)
  //  })
}

// const getArrayOfTags = (arr) => {
//   const listOfTagsObject = arr.reduce((prev, curr) => {
//     if (curr?.tags) {
//       prev = { ...prev, ...curr.tags }
//       return prev
//     } else {
//       return prev
//     }
//   }, {})
//   const listOfTagsArray: string[][] = Object.values(listOfTagsObject)?.map(
//     (arr: any) => Object.keys(arr)
//   )
//   // @ts-ignore
//   const listOfTags: string[] = [].concat.apply([], listOfTagsArray)

//   // @ts-ignore
//   return [...new Set(listOfTags)]
// }

const removeDuplicateTags = (posts) => {
  const dFlag: string[] = []
  return posts.map((arr) => {
    if (arr?.tags) {
      const pTagsList = Object.keys(arr?.tags)
      if (pTagsList?.length > 0) {
        // @ts-ignore
        arr.tags = pTagsList.reduce((prevTag, currTag) => {
          const tagsList = Object.keys(arr?.tags[currTag])

          // @ts-ignore
          const newTags = tagsList.reduce((prev, curr) => {
            if (dFlag.includes(curr)) {
              return prev
            } else {
              if (curr === 'Other') {
                arr?.tags[currTag][curr].map((tag) => {
                  if (dFlag.includes(tag)) {
                    return true
                  }
                  prev[tag] = true
                  dFlag.push(tag)
                })
                return prev
              }
              prev[curr] = arr?.tags[currTag][curr]
              dFlag.push(curr)
              return prev
            }
          }, {})
          prevTag[currTag] = newTags
          return prevTag
        }, {})
      }
    }
    return arr
  })
}

export function filterTreeSB(posts: PostsProps['result_posts']) {
  const tagList = removeDuplicateTags(posts)

  var tree: TreeNodeSB = {
    value: '',
    title: 'root',
    children: [],
  }
  tagList.forEach((p) => {
    var flagi = false
    for (var i = 0; i < tree.children.length; i++) {
      if (tree.children[i].value == '' + '/' + 'cat' + p.category_id) {
        flagi = true
        var flagj = false

        for (var j = 0; j < tree.children[i].children.length; j++) {
          if (
            tree.children[i].children[j].value ==
            '' +
              '/' +
              'cat' +
              p.category_id +
              '/' +
              'subcat' +
              p.sub_category_id
          ) {
            flagj = true
            var flagk = false
            if (!p.tags) {
              break
            }
            Object.keys(p.tags).forEach((tagKey) => {
              for (
                var k = 0;
                k < tree.children[i].children[j].children.length;
                k++
              ) {
                if (
                  tree.children[i].children[j].children[k].value ==
                  '' +
                    '/' +
                    'cat' +
                    p.category_id +
                    '/' +
                    'subcat' +
                    p.sub_category_id +
                    '/' +
                    tagKey.trim()
                ) {
                  flagk = true
                  var tags = Object.keys(p.tags[tagKey])
                  tags.forEach((t) => {
                    for (
                      var l = 0;
                      l <
                      tree.children[i].children[j].children[k].children.length;
                      l++
                    ) {
                      if (
                        tree.children[i].children[j].children[k].children[l]
                          .value ==
                        '' +
                          '/' +
                          'cat' +
                          p.category_id +
                          '/' +
                          'subcat' +
                          p.sub_category_id +
                          '/' +
                          tagKey.trim() +
                          '/' +
                          t.trim()
                      ) {
                        return
                      }
                    }
                    tree.children[i].children[j].children[k].children.push({
                      value:
                        '' +
                        '/' +
                        'cat' +
                        p.category_id +
                        '/' +
                        'subcat' +
                        p.sub_category_id +
                        '/' +
                        tagKey.trim() +
                        '/' +
                        t.trim(),
                      title: t,
                      children: [],
                    })
                  })
                }
              }
              if (!flagk || tree.children[i].children[j].children.length == 0) {
                tree.children[i].children[j].children.push({
                  value:
                    '' +
                    '/' +
                    'cat' +
                    p.category_id +
                    '/' +
                    'subcat' +
                    p.sub_category_id +
                    '/' +
                    tagKey.trim(),
                  title: tagKey,
                  children: Object.keys(p.tags[tagKey]).map((tag, index) => {
                    return {
                      value:
                        '' +
                        '/' +
                        'cat' +
                        p.category_id +
                        '/' +
                        'subcat' +
                        p.sub_category_id +
                        '/' +
                        tagKey.trim() +
                        '/' +
                        tag.trim(),
                      title: tag,
                      children: [],
                    }
                  }),
                })
              }
            })
          }
        }
        if (!flagj || tree.children[i].children.length == 0) {
          tree.children[i].children.push({
            value:
              '' +
              '/' +
              'cat' +
              p.category_id +
              '/' +
              'subcat' +
              p.sub_category_id,
            title: p.sub_category_name,
            children: p.tags
              ? Object.keys(p.tags).map((tagkey, tagi) => {
                  return {
                    value:
                      '' +
                      '/' +
                      'cat' +
                      p.category_id +
                      '/' +
                      'subcat' +
                      p.sub_category_id +
                      '/' +
                      tagkey.trim(),
                    title: tagkey,
                    children: Object.keys(p.tags[tagkey]).map((tag, index) => {
                      return {
                        value:
                          '' +
                          '/' +
                          'cat' +
                          p.category_id +
                          '/' +
                          'subcat' +
                          p.sub_category_id +
                          '/' +
                          tagkey.trim() +
                          '/' +
                          tag.trim(),
                        title: tag,
                        children: [],
                      }
                    }),
                  }
                })
              : [],
          })
        }
      }
    }

    if (!flagi || tree.children.length == 0) {
      tree.children.push({
        value: '' + '/' + 'cat' + p.category_id,
        title: p.category_name,
        children: [
          {
            value:
              '' +
              '/' +
              'cat' +
              p.category_id +
              '/' +
              'subcat' +
              p.sub_category_id,
            title: p.sub_category_name,
            children: p.tags
              ? Object.keys(p.tags).map((tagkey, tagi) => {
                  return {
                    value:
                      '' +
                      '/' +
                      'cat' +
                      p.category_id +
                      '/' +
                      'subcat' +
                      p.sub_category_id +
                      '/' +
                      tagkey.trim(),
                    title: tagkey,
                    children: Object.keys(p.tags[tagkey]).map((tag, index) => {
                      return {
                        value:
                          '' +
                          '/' +
                          'cat' +
                          p.category_id +
                          '/' +
                          'subcat' +
                          p.sub_category_id +
                          '/' +
                          tagkey.trim() +
                          '/' +
                          tag.trim(),
                        title: tag,
                        children: [],
                      }
                    }),
                  }
                })
              : [],
          },
        ],
      })
    }
  })
  return tree
  //  tree.children.forEach(v=>{
  //     console.log(v.children)
  //  })
}
