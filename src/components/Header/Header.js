import React from 'react'
import { Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import styles from './styles/headerStyles.less'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className={styles['header-container']}>
      
      <Input style={{ width: '320px' }} placeholder="搜索文档" addonAfter={<SearchOutlined />}></Input>
      <div>
        <Button type="primary">管理文章</Button>
        <Button type="primary" onClick={()=>{
          navigate('/draft/new')
        }}>写文章</Button>
      </div>
    </div>
  )
}

export default Header