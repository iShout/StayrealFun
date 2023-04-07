import React, { useState } from "react";

import styles from './styles/logo.less'

const avator = require('../../assets/images/lanyangyang.JPG')
const classNames = require('classnames')

const Avator = (props) => {
  const [hover, setHover] = useState(false)
  const { avatorUrl } = props
  const avatorClasses = classNames({ 'animate__bounce': hover }, `${styles.avator}`)
  return (
    <div className={avatorClasses} onMouseOver={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
      <img src={avatorUrl} alt="这是这个主页用于展示个人信息的头像" />
    </div>
  )
}

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Avator avatorUrl={avator} />
    </div>
  )
}
export default Logo