import React from 'react'
import { useNavigate } from 'react-router-dom'

import './styles.less'
import { Button } from 'antd'

const docImage = require('../../../assets/images/doc-image.png')

//DocSection的动态图像组件
const DocImages = () => {
  return (
    <div className='doc-images'>
      <div className='image-frame'></div>
      <img src={docImage} alt="这是描述DocSection这个组件的配图" className='image-body' />
    </div>
  )
}
// 展示文档入口的section
const DocSection = () => {
  const navigate = useNavigate()
  return (
    <div className="section-container">
      <div className="animate-element">
        <DocImages></DocImages>
      </div>
      <div className="description">
        <p className='title'>这是我的一些<span className="primary">技术文档</span></p>
        <p className='default'>记录了一些学习文档，包括Js的原理，框架的原理。还有一些API和代码。</p>
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