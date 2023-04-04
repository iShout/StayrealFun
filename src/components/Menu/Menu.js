import React from "react";

import Logo from "./Logo";

import './styles/menu.less'

const MenuListContainer = (props)=>{
  const {list} = props
  return (
    <div className="list-container">
      {list.map(item => <div key={item.id} className="list-item">{item.label}</div>)}
    </div>
  )
}

const Menu = (props)=>{
  const {menuList} = props
  return(
    <div className="menu">
      <Logo></Logo>
      <MenuListContainer list={menuList}></MenuListContainer>
    </div>
  )
}
export default Menu