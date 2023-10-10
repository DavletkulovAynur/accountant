import React, { memo } from 'react'
import { Table } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import dateFormat from 'dateformat'
import css from './styles.module.scss'

export interface Item {
  key: string
  category: string
  amount: number
  deskription: string
}

const DefaulTable: React.FC<any> = memo(({ openModal, operationsQuery }) => {
  const edit = (record: any) => {
    openModal(record)
  }

  const deleteOperation = (record: any) => {
    console.log('test', record)
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
          <>
            <EditOutlined onClick={() => edit(record)} />
            <DeleteOutlined
              className={css.deleteIcon}
              onClick={() => deleteOperation(record)}
            />
          </>
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
    <Table
      loading={isLoading}
      bordered
      dataSource={data}
      columns={mergedColumns}
      rowClassName="editable-row"
    />
  )
})

export { DefaulTable }
