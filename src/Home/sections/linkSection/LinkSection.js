import React from 'react'
import styles from './styles.less'

const LinkSection = () => {
  return (
    <div className={styles.sectionContainer} style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className={styles.linkElement}>
      </div>
      <div className={styles.linkDescrip}>
        <p className={styles.title}>访问我的<span className={styles.primary}>技术Link</span></p>
        <p className={styles.default}>可能也没有什么好看的，但是也不妨点进去看看呀</p>
      </div>
    </div>
  )
}

export default LinkSection