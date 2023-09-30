import React, { memo } from 'react'
import { Layout, Button, theme } from 'antd'

const { Header: AntdHeader } = Layout
const Header = memo(() => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <AntdHeader style={{ padding: 0, background: colorBgContainer }}>
      <h1>ВЫЙТИ</h1>
    </AntdHeader>
  )
})

export { Header }
