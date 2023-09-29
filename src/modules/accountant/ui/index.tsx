import React, { memo, useState } from 'react'
import { Layout } from 'antd'
import type { TabsProps } from 'antd'
import { PlusCircleTwoTone } from '@ant-design/icons'
import { Income } from './containers/Income'
import { Expenses } from './containers/Expenses'
import { CreateOperationModal } from './components/createOperation'
import css from './styles.module.scss'
import { Tab } from 'shared/ui/components'

const { Content } = Layout

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Expenses`,
    children: <Expenses />,
  },
  {
    key: '2',
    label: `Income`,
    children: <Income />,
  },
]

const Accountant: React.FC = memo(() => {
  const [isOpenCreateOperationModal, setIsOpenCreateOperationModal] =
    useState(false)

  const openCreateOperationModal = () => {
    setIsOpenCreateOperationModal(true)
  }

  const closeCreateOperationModal = () => {
    setIsOpenCreateOperationModal(false)
  }

  return (
    <Content className={css.accountantContent}>
      <PlusCircleTwoTone
        className={css.plusIconStyle}
        onClick={openCreateOperationModal}
      />

      <Tab items={items} defaultActiveKey="1" />
      <CreateOperationModal
        isOpenCreateOperationModal={isOpenCreateOperationModal}
        closeModal={closeCreateOperationModal}
      />
    </Content>
  )
})

export { Accountant }
