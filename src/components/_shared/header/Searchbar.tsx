import { TreeSelect } from 'antd'
import 'antd/dist/antd.css'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { filterAtom } from '../../../atoms/filterAtom'
//import { keywordAtom } from '../../../atoms/keywordAtom'
import { postListAtom } from '../../../atoms/postListAtom'
// utils
import axios from '../../../utils/axiosHelper/axios'
import { useCity } from '../../../utils/city/city-context'
import { filterTreeSB } from '../../../utils/processDuplicates/helpers'
import styles from './header.module.scss'

// ----------------------------------------------------------------------

export const removeKey = (key: string) => {
  return key.split('@parent___')[0]
}

export const createKey = (name: string, parent: string, level: number) => {
  return name.toString() + `@parent___${parent}` + `@level___${level}`
}

export const structureTreeData = (
  data: any,
  parentKey: any = '',
  level: number
) => {
  // debugger
  if (typeof data === 'string') {
    return {
      title: data.toString(),
      value: createKey(data.toString(), parentKey, level),
    }
  } else if (Array.isArray(data) && data[0] !== true) {
    let r: any[] = []
    data.forEach((item) => {
      r.push({
        title: item,
        value: createKey(item, parentKey, level),
      })
    })
    return r
  } else if (typeof data === 'object' && data !== [true]) {
    let r: any[] = []
    Object.keys(data).map((item) => {
      if (typeof data[item] === 'string') {
        r.push({
          title: item.toString(),
          value: createKey(item.toString(), parentKey, level),

          children: [structureTreeData(data[item], item, level + 1)],
        })
      } else if (Array.isArray(data[item]) && data[item][0] === true) {
        r.push({
          title: item.toString(),
          value: createKey(item.toString(), parentKey, level),
        })
      } else {
        r.push({
          title: item.toString(),
          value: createKey(item.toString(), parentKey, level),

          children: structureTreeData(data[item], item, level + 1),
        })
      }
    })
    return r
  } else {
    // console.log('Another case: ', typeof data)
  }
}

export default function Searchbar(props: any) {
  const router = useRouter()
  const { zipAndCity } = useCity(false)
  let [_filterText, setFilterText] = useAtom(filterAtom)
  //let [_keyword, setKeyword] = useAtom(keywordAtom)
  let [_postList, _] = useAtom(postListAtom)

  const [term, setTerm] = useState(props.q)
  let [treeData, setTreeData] = useState<any>([])

  useEffect(() => {
    if (_postList != '') {
      // console.log('Category Shared')
      setTreeData(JSON.parse(_postList.toString()))
    }
  }, [_postList])

  let getAutoCompleteOptions = async (searchText: any) => {
    try {
      const city_alt_id = zipAndCity?.city?.alt_id
      const lat = zipAndCity?.latitude
      const longitude = zipAndCity?.longitude
      if (searchText === props.q) {
        //console.log('Category Shared')
        setTreeData(JSON.parse(_postList.toString()))
      } else {
        // console.log('Fetched')
        let response = await axios.post('/search', {
          searchText,
          alt_city_id: city_alt_id,
          lat: lat,
          long: longitude,
        })

        let { post_list = [] } = response.data
        // let autocompletetags = processDuplicates(post_list)
        setTreeData(filterTreeSB(post_list).children)
      }
    } catch (error) {
      // console.log(error)
    }
  }

  const handleSearch = (searchText: any) => {
    if (!zipAndCity || !searchText) {
      return
    }

    // window.location.assign(
    //   `${window.location.protocol}//${
    //     window.location.host
    //   }/posts/${zipAndCity.city.name.toLowerCase()}-${zipAndCity.city.state_code.toLowerCase()}/${
    //     zipAndCity.city.alt_id
    //   }/${zipAndCity.latitude}/${encodeURIComponent(
    //     zipAndCity.longitude
    //   )}/${searchText}/1`
    // )

    router.push(
      `/posts/${zipAndCity.city.name.toLowerCase()}-${zipAndCity.city.state_code.toLowerCase()}/${
        zipAndCity.city.alt_id
      }/${zipAndCity.latitude}/${encodeURIComponent(
        zipAndCity.longitude
      )}/${searchText}/1`
    )
  }

  // const onChange = (value: any, label: any, extra: any) => {
  //   setTerm(value)
  //   console.log('onChange ', value)
  //   handleSearch(value)
  // }

  const onSelect = (value: string, data: any) => {
    // const nodeId = removeKey(value)
    //console.log('onSelect ', data?.title)
    setFilterText(data?.title)
    //setKeyword(data?.title)
    handleSearch(data?.title)
    setTerm(data?.title)
  }

  const onSearch = (value: any) => {
    //console.log('onSearch ', value)
    setTerm(value)
    // handleSearch(value)
  }

  useEffect(() => {
  
  // console.log('sear - useEffect1')
  
  
    if (term?.length > 2) {
      //console.log(_filterText);
      getAutoCompleteOptions(term)
    }
  }, [term]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
  // console.log('sear - useEffect2')
  
    if (props.q) {
      setTerm(props.q)
    }
  }, [props.q])
  // siamparvez44
  // console.log(_filterText.split("/"))

  return (
    <div id="searchbar" style={{ width: '100%' }}>
      <TreeSelect
        size="large"
        showSearch
        treeLine
        value={
          router.query.selectedFilter ? router.query.selectedFilter : props.q
        }
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Search ..."
        allowClear
        treeDefaultExpandAll
        treeNodeFilterProp="value"
        onSelect={onSelect}
        getPopupContainer={() =>
          document.getElementById('searchbar') as HTMLElement
        }
        onSearch={onSearch}
        treeData={treeData}
        className={styles.header__search}
        bordered={false}
      />
    </div>
  )
}
