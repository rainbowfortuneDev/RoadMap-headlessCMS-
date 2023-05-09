// import NextLink from 'next/link'
import { makeStyles } from '@mui/styles'
import Image from 'next/image'
// import { ChevronRightIcon } from '../../assets/icons/_shared/post-card/ChevronRight.svg'
// import { ExpandMoreIcon } from '../../assets/icons/_shared/post-card/ExpandMore.svg'

import FilterIcon from '../../assets/icons/_shared/post-card/Filter.svg'

import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

import TreeItem from '@mui/lab/TreeItem'
import TreeView from '@mui/lab/TreeView'

import { useEffect, useState } from 'react'
// import FilterIcon from '../../assets/icons/filter.svg'
import { useCity } from '../../utils/city/city-context'
import type { PostsProps } from './posts'
import styles from './posts.module.scss'
// it could be your App.tsx file or theme file that is included in your tsconfig.json
import { Theme } from '@mui/material/styles'
import Collapse from '@mui/material/Collapse'
import { useAtom } from 'jotai'
import { filterAtom } from '../../atoms/filterAtom'
import { useRouter } from 'next/router'
import { postListAtom } from '../../atoms/postListAtom'

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface (remove this line if you don't have the rule enabled)
  interface DefaultTheme extends Theme {}
}

type PostsFiltersProps = PostsProps

function PostsFilters(props: PostsFiltersProps) {

  // const classes = useStyles()
  let [_filterText, setFilterText] = useAtom(filterAtom)
  let [_postList, setPostList] = useAtom(postListAtom)
  const query = useRouter()
  const [expanded, setExpanded] = useState<any>([])
  const [selected, setSelected] = useState<any>([])
  // setExpanded(props.categoryDetails.children[0].title);


  useEffect(() => {
    setPostList(JSON.stringify(props.categoryDetails.children));
    // console.log(props.categoryDetails.children[0].children[0].title)
    let temp = props.categoryDetails.children[0];
    console.log(temp);
    let arr = []; let idx = 0;
    // console.log("dddddd"+temp.children[0].title);
    while(temp.children.length){
      // arr += temp.children[0].title;
      // temp = temp.children[0];
      console.log(arr);
      arr[idx] = temp.title;
      temp = temp.children[0];
      idx += 1;
    }
    arr.reverse();
    setExpanded(arr);
  // console.log('Displaying children');
  // console.log(_postList[0].title);
  }, [props.categoryDetails])
  // useEffect(() => {
  //   setExpanded(props.categoryDetails.children[0].title)
  // }, [props.categoryDetails])

  // const q = query.selectedFilter as string

  useEffect(() => {
    // @ts-ignore
    var q = query ? query?.query?.slugs[4].toString() : null
    // console.log(query);
    if (q) {
      // setExpanded(q)
      setSelected(q)
    }
  }, [query])

  const { zipAndCity } = useCity()
  if (!zipAndCity) {
    return null
  }

  const useTreeItemStyles = makeStyles((theme) => ({
    content: {
      padding: '2px',
    },
    labelRoot: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0.5, 0),
    },
    labelIcon: {
      marginRight: theme.spacing(1),
    },
    labelText: {
      fontWeight: 'inherit',
      flexGrow: 1,
    },
    treeItemText: {},
  }))

  function TreeViewStructure({ categoryDetails, parentPath }: any) {
    const classes = useTreeItemStyles()

    // var expandId = categoryDetails.children[0].title;
    // setExpanded(expandId);

    // console.log(expanded);
    if (!categoryDetails) {
      return null
    }

    return (
      <TreeItem
        classes={{
          content: classes.content,
        }}
        nodeId={categoryDetails.title}
        label={
          <span className={classes.treeItemText}>{categoryDetails.title}</span>
        }
      >
        {Array.isArray(categoryDetails.children)
          ? categoryDetails.children.map((node, ind) => (
              <TreeViewStructure
                key={ind}
                categoryDetails={node}
                parentPath={categoryDetails.value}
              />
            ))
          : null}
      </TreeItem>
    )
  }

  const handleToggle = (event: any, nodeIds: any) => {
    //  const expandingNodes = nodeIds.filter(x => !expanded.includes(x))
    setExpanded(nodeIds);
    // console.log("expanding" + nodeIds);

  }

  const handleSelect = (event: any, nodeIds: any) => {
    if (event.target.tagName != 'svg') {
      setSelected(nodeIds)
      setFilterText(nodeIds)

      // console.log('nodeIds: ', nodeIds)
    }
  }

  const [filterVisibility] = useState<boolean>(true)

  return (
    <div style={{ display: 'flex' }}>
      <Collapse in={filterVisibility} orientation="horizontal">
        <aside className={styles.posts__aside}>
          <div className={styles.post__filter_text_wrapper}>
            <div className={styles.post__filter_text}>
              <Image src={FilterIcon} alt="FilterIcon" />
              <span>Filter</span>
            </div>
          </div>
          {filterVisibility ? (
            <div
              style={{ backgroundColor: 'white' }}
              className={styles.posts__category}
            >
              <TreeView
                aria-label="controlled"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                expanded={expanded}
                // defaultExpanded = {["Service Types"]}
                selected={selected}
                onNodeToggle={handleToggle}
                onNodeSelect={handleSelect}
              >
                {props.categoryDetails.children.map((node, ind) => {
                  return (
                    <TreeViewStructure
                      key={ind}
                      categoryDetails={node}
                      parentPath=""
                    />
                  )
                })}
              </TreeView>
            </div>
          ) : (
            <></>
          )}
        </aside>
      </Collapse>
    </div>
  )
}

export default PostsFilters
