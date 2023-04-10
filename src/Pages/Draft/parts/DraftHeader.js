import React from 'react'
import { Button } from "antd";

import styles from '../styles/headerStyles.less'


//编辑器header组件
const DraftHeader = (props) => {
  const { typingStatus, setTyping } = props
  return (
    <div className={styles['header-wrapper']}>
      <div className={styles['title-input']}>
        <input placeholder='请输入文档标题' onChange={()=>{setTyping('已保存')}}></input>
      </div>
      <div className={styles['options']}>
        <p className={styles['text']}>{typingStatus}</p>
        <Button type="primary">发布文章</Button>
      </div>
    </div>
  )
}
export default DraftHeader