import React, { useState, useCallback, useContext, useEffect } from 'react'
import DraftHeader from './parts/DraftHeader'
import gfm from '@bytemd/plugin-gfm'
import { Editor, Viewer } from '@bytemd/react'


import { debounce, getDraft } from '../../apis/tools/index'
import { observerContext, createId, addDraft } from 'Apis/tools/index.js';
import { EditState } from 'Apis/patterns/index.js'

import 'bytemd/dist/index.css'
import './styles/overwrite.css'

//获取当前草稿的文档id
const getDocId = (function () {
  let docId = null
  return function () {
    if (docId) {
      return docId
    }
    return docId = createId()
  }
}())
//editor的插件
const editorPlugins = [
  gfm(),
  // Add more plugins here
]

// 使用闭包存储当前正在编辑的draft
const draft = (function () {
  const draft = {
    id: getDocId(),
    title: "",
    content: "",
  }
  return {
    setTitle(title) {
      draft.title = title
    },
    setContent(content) {
      draft.content = content
    },
    getDraft() {
      return draft
    }
  }
}())


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
    ObserverEvent.subscribe('nextEditState', (draft) => {
      editState.curState.nextState(setTyping)
      addDraft(draft).then(
        (res) => {
          editState.curState.nextState(setTyping)
        }
      )
    })
  }, [])

  //在编辑器的onChange触发时，对回调函数进行防抖处理，优化性能
  const savingDraft = debounce(function () {
    ObserverEvent.notice('nextEditState',draft.getDraft())
  })
  const handleEditorChange = useCallback(function (e) {
    setContent(e);
    draft.setContent(e)
    savingDraft();
  }, []);


  return (
    <>
      <DraftHeader {...status}
        onInputChange={(e) => {
          const value = e.target.value
          draft.setTitle(value)
          savingDraft()
        }} />
      <Editor
        value={editContent}
        plugins={editorPlugins}
        onChange={handleEditorChange}
      />
    </>
  )
}
export default Draft