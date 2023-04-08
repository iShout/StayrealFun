import React from 'react'

import Header from '../../components/Header/Header.js'
import ClassifyItems from './parts/ClassifyItems.js'
import DocsItems from './parts/DocsItems.js'

import { classifyList } from './mockdata.js'

import styles from './styles/style.less'

//文档页面【主要内容】
const DocsMain = () => {
  return (
    <div className={styles['docs-container']}>
      <div className={styles['parent-list']}>
        <ClassifyItems childList={classifyList} />
      </div>
      <div className={styles['docs-list']}>
       <DocsItems />
      </div>
    </div>
  )
}

//文档列表页面
const DocsPage = () => {
  return (
    <>
      <div className={styles['page-container']}>
        <div className={styles['fix-header']}>
          <Header></Header>
        </div>
        <DocsMain></DocsMain>
      </div>
    </>
  )
}
export default DocsPage