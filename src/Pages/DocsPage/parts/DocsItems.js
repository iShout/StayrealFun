import React from 'react'
import { Skeleton } from 'antd'

import styles from '../styles/partStyles.less'

const DocsItem = () => {
  return (
    <></>
  )
}

const EmptyDocs = () => {
  return (
    <>
      <Skeleton className={styles['doc-item']} active></Skeleton>
    </>
  )
}

const DocsItems = ({ docList = [] }) => {
  return (
    <>
      {docList.length ? docList.map(item => <DocsItem />) : <EmptyDocs />}
    </>
  )
}

export default DocsItems