import { memo, FC } from 'react'
import { Layout, Menu } from 'antd'
import Test from './config'
import './index.scss'

const { Sider } = Layout

const Sidebar: FC = memo(() => {
  const test = (item: any) => {
    console.log(item)
  }
  return (
    <Sider className="Sidebar" trigger={null}>
      <div className="demo-logo-vertical" />
      <Menu
        onSelect={test}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={Test()}
      />
    </Sider>
  )
})

export { Sidebar }
