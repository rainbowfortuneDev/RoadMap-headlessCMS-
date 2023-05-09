//import { TreeSelect } from 'antd'
//import 'antd/dist/antd.css'
import { useEffect, useState } from 'react'
import TreeSelect from 'antd/lib/tree-select'
// utils
import axios from '../../utils/axiosHelper/axios'
import extractSelectedCategory from '../../utils/categories/extractSelectedCategory'
import processDuplicatesCF from '../../utils/processDuplicates/processDuplicatesCF'
import { structureTreeData } from '../_shared/header/Searchbar'
import styles from './category-finder.module.scss'

// ----------------------------------------------------------------------

export default function CategoryFinder(props: any) {
  const [term, setTerm] = useState(props.q)
  let [treeData, setTreeData] = useState<any>([])
  let [formatedData, setFormatedData] = useState<any>()
  // let structureTreeData = (data: any, parentKey: any = '') => {
  //   // debugger
  //   console.log({data})
  //   if (typeof data === 'string') {
  //     return {
  //       title: data.toString() + 'ME',
  //       value: data.toString(),
  //       key: data.toString() + parentKey,
  //     }
  //   } else if (Array.isArray(data) && data[0] !== true) {
  //     let r: any[] = []
  //     data.forEach((item) => {
  //       r.push({
  //         title: item + 'ME1',
  //         value: item,
  //         key: item + parentKey,
  //       })
  //     })
  //     return r
  //   } else if (typeof data === 'object' && data !== [true] && data != null) {
  //     let r: any[] = []
  //     Object.keys(data).map((item) => {
  //       if (typeof data[item] === 'string') {
  //         r.push({
  //           title: item.toString()+ 'Me2',
  //           value: item.toString(),
  //           key: item + parentKey,
  //           children: [structureTreeData(data[item], item)],
  //         })
  //       } else if (Array.isArray(data[item]) && data[item][0] === true) {
  //         r.push({
  //           title: item.toString()+ 'M3',
  //           value: item.toString(),
  //           key: item + parentKey,
  //         })
  //       } else {
  //         r.push({
  //           title: item.toString()+ 'M4',
  //           value: item.toString(),
  //           key: item + parentKey,
  //           children: structureTreeData(data[item], item),
  //         })
  //       }
  //     })
  //     return r
  //   } else {
  //     console.log('Another case: ', typeof data)
  //   }
  // }

  let getAutoCompleteOptions = async (searchText: any) => {
    try {
      let response = await axios.post('/category_finder', {
        searchText,
      })

      let { category_finder = [] } = response.data

      let autocompletetags = processDuplicatesCF(category_finder)

      setFormatedData(autocompletetags)

      let ttt = structureTreeData(autocompletetags, '', 0)
      console.log(ttt)

      setTreeData(ttt)
    } catch (error) {
      // console.log(error)
    }
  }

  const handleSearch = (searchText: any) => {
    if (!searchText) {
      return
    }
  }

  const handleSelectItems = (value: any) => {
    let finalResult = extractSelectedCategory(value, formatedData)
    props.retrieveSelectedCategory(finalResult)
  }

  const onChange = (value: any, label: any, extra: any) => {
    setTerm(value)
    handleSearch(value)
  }

  const onSearch = (value: any) => {
    setTerm(value)
  }

  useEffect(() => {
    setTreeData([])
    if (term?.length > 2) {
      getAutoCompleteOptions(term)
    }
  }, [term]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (props.q) {
      setTerm(props.q)
    }
  }, [props.q])

  return (
    <>
      <TreeSelect
        size="large"
        showSearch
        treeLine
        value={term}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Category finder ..."
        allowClear
        autoFocus
        treeDefaultExpandAll
        onChange={onChange}
        className={styles.category__search}
        onSearch={onSearch}
        treeData={treeData}
        onSelect={(e) => handleSelectItems(e)}
        bordered={false}
      />
    </>
  )
}
