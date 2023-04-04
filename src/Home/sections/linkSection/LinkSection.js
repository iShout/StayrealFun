import React from 'react'
import './styles.less'

const LinkSection = () => {
  return (
    <div className="section-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className="link-element">
      </div>
      <div className="link-descrip">
        <p className='title'>访问我的<span className="primary">技术Link</span></p>
        <p className='default'>可能也没有什么好看的，但是也不妨点进去看看呀</p>
      </div>
    </div>
  )
}

export default LinkSection