import { memo, FC, useState } from 'react'
import './index.scss'

import { Avatar, Layout, Menu, Space } from 'antd'
import { ConfirmModal } from 'shared/ui/components'
import {
  ProfileOutlined,
  CloseSquareOutlined,
  BorderOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from 'shared/hooks'

const { Sider } = Layout
//FIXME: РАЗОБРАТЬСЯ c роутингом
const Sidebar: FC = memo(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [collapsed, setCollapsed] = useState(false)
  const { logOut } = useAuth()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  console.log('logOut', logOut)
  const items = [
    {
      key: '1',
      icon: <BorderOutlined />,
      label: 'Dashboard',
      onClick: () => {
        navigate('/')
      },
    },
    {
      key: '2',
      icon: <ProfileOutlined />,
      label: 'Bookkeeping',
      onClick: () => {
        navigate('/bookeeping')
      },
    },
    {
      key: '3',
      icon: <CloseSquareOutlined />,
      label: 'Exit',
      onClick: async () => setIsOpen(true),
    },
  ]

  const onCancel = () => {
    setIsOpen(false)
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical"></div>
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
      />
      <ConfirmModal isOpen={isOpen} onCancel={onCancel} onOk={logOut} />
    </Sider>
  )
})

export { Sidebar }
