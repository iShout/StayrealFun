import React from 'react'

import Header from '../../components/Header/Header.js'

import styles from './styles/style.less'

//文档页面【主要内容】
const DocsMain = () => {
  return (
    <div className={styles['docs-container']}>
      <div className={styles['parent-list']}>
      </div>
      <div className={styles['docs-list']}>
        <div style={{width:'100%',height:'150px',backgroundColor:'azure'}}></div>
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