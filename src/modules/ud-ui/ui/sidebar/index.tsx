import { memo, FC, useState } from 'react'
import './index.scss'

import { Layout, Menu } from 'antd'
import { ConfirmModal } from 'shared/ui/components'
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from 'shared/hooks'

const { Sider } = Layout
//TODO: РАЗОБРАТЬСЯ c роутингом
const Sidebar: FC = memo(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [collapsed, setCollapsed] = useState(false)
  const { logOut } = useAuth()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  console.log('logOut', logOut)
  const items = [
    {
      key: '/',
      icon: <UserOutlined />,
      label: 'Расходы и доходы',
      onClick: () => {
        navigate('/')
      },
    },
    {
      key: '/page2',
      icon: <VideoCameraOutlined />,
      label: 'Документы',
      onClick: () => {
        navigate('/page2')
      },
    },
    {
      key: '3',
      icon: <VideoCameraOutlined />,
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
      <div className="demo-logo-vertical">Hello</div>
      <Menu
        theme="dark"
        defaultSelectedKeys={[pathname]}
        mode="inline"
        items={items}
      />
      <ConfirmModal isOpen={isOpen} onCancel={onCancel} onOk={logOut} />
    </Sider>
  )
})

export { Sidebar }
