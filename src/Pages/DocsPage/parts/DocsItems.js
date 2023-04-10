import React from 'react'
import { Skeleton } from 'antd'

import styles from '../styles/partStyles.less'

//文档item
const DocsItem = (props) => {
  const { docInfo = [] } = props
  return (
    <div className={styles['doc-item']}>
      <div className={styles['main-info']}>
        <div className={styles['text-info']}>
          <p className={styles['extra-info']}>
            {docInfo.uploadTime} · {docInfo.parentGroup}
          </p>
          <p className={styles['font-black']}>{docInfo.title}</p>
          <p className={styles['font-gray']}>{docInfo.description}</p>
        </div>
        {docInfo.image && <div className={styles['image-info']}>
          <img src={docInfo.image} alt="文档中所带的缩略图" className={styles['image-size']} />
        </div>}
      </div>
    </div>
  )
}

const EmptyDocs = () => {
  return (
    <>
      <Skeleton className={styles['doc-item']} active></Skeleton>
    </>
  )
}

//文档的列表
const DocsItems = (props) => {
  const { docList = [], clickItem = null } = props
  return (
    <>
      {docList.length ? docList.map(item =>
        <div key={item.id} onClick={() => {
          clickItem(item.id)
        }}>
          <DocsItem docInfo={item} />
        </div>) : <EmptyDocs />}
    </>
  )
}

export default DocsItems