import React from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../../components/Header/Header.js'
import ClassifyItems from './parts/ClassifyItems.js'
import DocsItems from './parts/DocsItems.js'
import { aop } from 'Patterns/index.js'

import { classifyList, docsList } from './mockdata.js'

import styles from './styles/style.less'

/**
 * @description 点击文档item的回调事件
 * @param {string} id 点击文档的文档id
 */
const clickDoc = (id) => {
  const target = `docs/${id}`
  return target
}

/**
 * @description 点击分类的回调事件
 * @param {string} id 点击分类的分类id
 */
const clickClassify = (id) => {
  console.log(id);

}

//文档页面【主要内容】
const DocsMain = () => {
  const navigate = useNavigate()
  return (
    <div className={styles['docs-container']}>
      <div className={styles['parent-list']}>
        <ClassifyItems childList={classifyList} />
      </div>
      <div className={styles['docs-list']} >
        <DocsItems docList={docsList} clickItem={(id) => {
          const naviFn = (route) => {
            navigate(route)
          }
          // routeGo定义在AOP中
          clickDoc.routeGo(naviFn, [id])
        }} />
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