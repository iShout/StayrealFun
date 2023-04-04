import React from "react";

import Menu from "../components/Menu/Menu";
import DocSection from './sections/docSection/DocSection'
import LinkSection from './sections/linkSection/LinkSection'
import FooterSection from './sections/footerSection/FooterSection'

import './styles/home.less'
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

const Home = () => {
  return (
    <div className="home">
      <div className="menu-bar">
        <Menu menuList={menuData}></Menu>
      </div>
      <div className="content">
        <DocSection></DocSection>
        <LinkSection></LinkSection>
        <FooterSection></FooterSection>
      </div>
    </div>
  )
}
export default Home