import React from "react";

import Logo from "./Logo";

import styles from  './styles/menu.less'

const MenuListContainer = (props)=>{
  const {list} = props
  return (
    <div className={styles.listContainer}>
      {list.map(item => <div key={item.id} className={styles.listItem}>{item.label}</div>)}
    </div>
  )
}

const Menu = (props)=>{
  const {menuList} = props
  return(
    <div className={styles.menu}>
      <Logo></Logo>
      <MenuListContainer list={menuList}></MenuListContainer>
    </div>
  )
}
export default Menu