import React from "react";

import Menu from "../components/Menu/Menu";
import DocSection from './sections/docSection/DocSection.js'
import LinkSection from './sections/linkSection/LinkSection'
import FooterSection from './sections/footerSection/FooterSection.js'

import styles from './styles/home.less'
// 菜单数据
const menuData = [
  {
    label: '主页',
    id: 'Home'
  }, {
    label: '文档',
    id: 'Docs'
  }, {
    label: '链接',
    id: 'links'
  }
]
// 主页
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.menuBar}>
        <Menu menuList={menuData}></Menu>
      </div>
      <div className={styles.content}>
        <DocSection></DocSection>
        <LinkSection></LinkSection>
        <FooterSection></FooterSection>
      </div>
    </div>
  )
}
export default Home