import React, { useState } from 'react'
import DraftHeader from './parts/DraftHeader'
import MDEditor from '@uiw/react-md-editor';

import styles from './styles/styles.less'

const Draft = () => {
  const [typingStatus, setTyping] = useState('编写的文档将自动保存')
  const status = {
    typingStatus,
    setTyping
  }
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (

    <>
      <DraftHeader {...status} />
      <div className={styles['editor-container']}>
        <MDEditor
          value={value}
          onChange={setValue}
          height="100%"
        />
      </div>
    </>
  )
}
export default Draft