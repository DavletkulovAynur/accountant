import React, { memo, useState } from 'react'

import { Layout, theme } from 'antd'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import { Income } from './components/income'
import { PlusOutlined } from '@ant-design/icons'
import { CreateOperationModal } from './components/createOperation'

const { Content } = Layout

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Расходы`,
    children: 'costs',
  },
  {
    key: '2',
    label: `Доходы`,
    children: <Income />,
  },
]

const Accountant: React.FC = memo(() => {
  const [isOpenCreateOperationModal, setIsOpenCreateOperationModal] =
    useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const onChange = (key: string) => {
    console.log(key)
  }

  const openCreateOperationModal = () => {
    setIsOpenCreateOperationModal(true)
  }

  const closeCreateOperationModal = () => {
    setIsOpenCreateOperationModal(false)
  }

  return (
    <Content
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
      }}
    >
      <>
        <div>
        <PlusOutlined
          style={{ fontSize: '24px' }}
          onClick={openCreateOperationModal}
        />
        </div>
       
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        <CreateOperationModal
          isOpenCreateOperationModal={isOpenCreateOperationModal}
          closeModal={closeCreateOperationModal}
        />
      </>
    </Content>
  )
})

export { Accountant }
