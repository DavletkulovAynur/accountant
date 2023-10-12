import React, { memo, useState } from 'react'
import { Table, Flex } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import dateFormat from 'dateformat'
import css from './styles.module.scss'
import { ConfirmModal } from 'shared/ui/components'

export interface Item {
  key: string
  category: string
  amount: number
  deskription: string
}

const DefaulTable: React.FC<any> = memo(({ openModal, operationsQuery }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [deleteId, setDeleteId] = useState<string>('')
  const edit = (record: any) => {
    openModal(record)
  }

  const deleteOperation = () => {
    console.log(deleteId)
  }

  const openDeleteModal = (record: any) => {
    console.log(record)
    setDeleteId(record.id)
    setIsOpenModal(true)
  }

  const onCancel = () => {
    setIsOpenModal(false)
  }

  const { data = [], isLoading } = operationsQuery

  const columns = [
    {
      title: 'CATEGORY',
      dataIndex: 'category',
      width: '25%',
    },
    {
      title: 'AMOUNT',
      dataIndex: 'amount',
      width: '15%',
    },
    {
      title: 'DATE',
      dataIndex: 'date',
      width: '15%',
      render: (item: any) => {
        return dateFormat(item, 'mmmm dS, yyyy')
      },
    },
    {
      title: 'DESKRIPTION',
      dataIndex: 'description',
      width: '40%',
    },
    {
      title: 'OPERATIONS',
      dataIndex: 'operation',
      render: (_: any, record: any) => {
        return (
          <Flex justify="space-evenly">
            <EditOutlined onClick={() => edit(record)} />
            <DeleteOutlined
              className={css.deleteIcon}
              onClick={() => openDeleteModal(record)}
            />
          </Flex>
        )
      },
    },
  ]

  const mergedColumns = columns.map((col) => {
    return {
      ...col,
    }
  })

  return (
    <>
      <Table
        loading={isLoading}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
      />
      <ConfirmModal
        isOpen={isOpenModal}
        onCancel={onCancel}
        onOk={deleteOperation}
      />
    </>
  )
})

export { DefaulTable }
