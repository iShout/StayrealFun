import React, { useState, useCallback, useContext, useEffect } from 'react'
import DraftHeader from './parts/DraftHeader'
import MDEditor from '@uiw/react-md-editor';
import { debounce } from '../../apis/tools/index'
import { observerContext } from 'Apis/tools/context';
import { EditState } from 'Apis/patterns/index.js'

import styles from './styles/styles.less'

const Draft = () => {
  //Draft页面编写文档时的保存状态
  const [typingStatus, setTyping] = useState('')
  const status = {
    typingStatus,
    setTyping
  }
  //编辑时候的状态对象
  let editState = null

  //markdown编辑器的变量
  const [editContent, setContent] = useState("");

  // 项目的发布订阅事件
  const ObserverEvent = useContext(observerContext)

  //初始化编辑状态
  const initEditState = () => {
    const state = new EditState()
    state.initState(setTyping)
    return state
  }

  //在组件装载完成后 初始化编辑状态，订阅nextEditState事件
  useEffect(() => {
    editState = initEditState()
    ObserverEvent.subscribe('nextEditState', () => {
      editState.curState.nextState(setTyping)
    })
  }, [])

  //在编辑器的onChange触发时，对回调函数进行防抖处理，优化性能
  const handleTyping = debounce(function () {
    ObserverEvent.notice('nextEditState')
  })
  const handleEditorChange = useCallback(function (e) {
    setContent(e);
    handleTyping();
  }, []);


  return (
    <>
      <DraftHeader {...status} />
      <div className={styles['editor-container']}>
        <MDEditor
          value={editContent}
          onChange={handleEditorChange}
          height="100%"
        />
      </div>
    </>
  )
}
export default Draft