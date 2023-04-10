import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './styles.less'
import { Button } from 'antd'

import docImage from 'Images/doc-image.png'

//DocSection的动态图像组件
const DocImages = () => {
  return (
    <div className={styles.docImages}>
      <div className={styles.imageFrame}></div>
      <img src={docImage} alt="这是描述DocSection这个组件的配图" className={styles.imageBody} />
    </div>
  )
}
// 展示文档入口的section
const DocSection = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.animateElement}>
        <DocImages></DocImages>
      </div>
      <div className={styles.description}>
        <p className={styles.title}>这是我的一些<span className={styles.primary}>技术文档</span></p>
        <p className={styles.default}>记录了一些学习文档，包括Js的原理，框架的原理。还有一些API和代码。</p>
        <Button
          size="large"
          onClick={() => {
            navigate("/docs")
          }}>查看文档</Button>
      </div>
    </div>
  )
}
export default DocSection