const draftStore = 'draftStore'

// 自动保存的草稿会存储在LocalStorage中

/**
 * @description 获取草稿箱中的所有草稿
 * @param {string} [draftId] 草稿对象的id【不提供将获取全部的草稿】
 * @returns {Promise}
 */
const getDraft = async (draftId) => {
  const draftList = await window.localStorage.getItem(draftStore)
  return new Promise((resovle, reject) => {
    draftList && (draftId ? JSON.parse(draftList)[draftId] : JSON.parse(draftList))
    resovle()
  })
}

/**
 * @description 删除缓存的Draft
 * @param {object} draftId 草稿对象的id
 * @returns {Promise} 
 */
const removeDraft = async (draftId) => {
  if (!draftId) {
    throw new Error("要删除草稿请提供草稿id");
  }
  const draftList = await window.localStorage.getItem(draftStore)
  return new Promise((resolve, reject) => {
    draftList && (() => {
      const parsedList = JSON.parse(draftList)
      delete parsedList[draftId]
      window.localStorage.setItem(JSON.stringify(parsedList))
    })
    //假装有时延
    setTimeout(() => {
      resolve()
    }, 300);
  })
}

/**
 * @description 添加或修改缓存的Draft
 * @param {object} draft 草稿对象
 * @returns {Promise} 
 */
const addDraft = async (draft) => {
  console.log(draft);

  if (!draft) {
    throw new Error("要添加草稿请提供草稿");
  }
  let draftList = await window.localStorage.getItem(draftStore)
  if (!draftList) {
    draftList = '{}'
  }
  return new Promise((resolve, reject) => {
    const parsedList = JSON.parse(draftList)
    parsedList[draft.id] = draft
    window.localStorage.setItem(draftStore, JSON.stringify(parsedList))
    setTimeout(() => {
      resolve()
    }, 300);
  })
}

export {
  getDraft,
  removeDraft,
  addDraft,
}