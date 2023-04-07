import React from 'react'
import { Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import styles from './styles/headerStyles.less'

const Header = () => {
  return (
    <div className={styles['header-container']}>
      <Input style={{ width: '320px' }} placeholder="搜索文档" addonAfter={<SearchOutlined />}></Input>
      <Button type="primary">配置文章</Button>
    </div>
  )
}

export default Header