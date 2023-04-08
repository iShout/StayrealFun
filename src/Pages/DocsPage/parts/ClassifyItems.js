import React, { useState } from 'react'
import classNames from 'classnames'

import styles from '../styles/partStyles.less'

//分类项目item
const ClassifyItem = (props) => {
  const { label, clicked, itemIndex, setClicked } = props
  const classes = classNames(
    `${styles['classify-item']}`,
    { [styles['classify-item-clicked']]: clicked === itemIndex }
  )
  return (
    <>
      <div className={classes} onClick={() => { setClicked(itemIndex) }}>{label}</div>
    </>
  )
}
const EmptyList = () => {
  return (
    <div>
      还没有获取到数据
    </div>
  )
}

//分类项目列表
const classifyItems = (props) => {
  const { childList = [] } = props
  const [clickIndex, setClicked] = useState(null)
  return (
    <>
      {childList.length ?
        childList.map((item, index) => {
          const itemProps = {
            label: item.label,
            itemIndex: index,
            setClicked: setClicked,
            clicked: clickIndex,
          }
          return <ClassifyItem key={item.id} {...itemProps} />
        })
        : <EmptyList />}
    </>
  )
}

export default classifyItems