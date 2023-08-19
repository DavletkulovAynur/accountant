import React, { memo, useState } from 'react'
import { Layout } from 'antd'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Income } from './income'
import { Expenses } from './expenses'
import { CreateOperationModal } from '../components/createOperation'
import css from './styles.module.scss'

const { Content } = Layout
const { TabPane } = Tabs

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Расходы`,
    children: <Expenses />,
  },
  {
    key: '2',
    label: `Доходы`,
    children: <Income />,
  },
]

const AccountantContainer: React.FC = memo(() => {
  const [isOpenCreateOperationModal, setIsOpenCreateOperationModal] =
    useState(false)

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
    <Content className={css.accountantContent}>
      <PlusOutlined
        className={css.plusIconStyle}
        onClick={openCreateOperationModal}
      />

      <Tabs defaultActiveKey="1" onChange={onChange}>
        {items.map((item) => (
          <TabPane tab={item.label} key={item.key}>
            {item.children}
          </TabPane>
        ))}
      </Tabs>
      <CreateOperationModal
        isOpenCreateOperationModal={isOpenCreateOperationModal}
        closeModal={closeCreateOperationModal}
      />
    </Content>
  )
})

export { AccountantContainer }
