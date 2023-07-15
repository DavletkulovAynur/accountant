import React, { memo, useState } from 'react'
import { Table } from 'antd'
import { Item, testData } from './types'
import { EditOutlined } from '@ant-design/icons'

const MainTable: React.FC<any> = memo(({ openModal }) => {
  const [data] = useState(testData)

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    openModal(record)
  }

  const columns = [
    {
      title: 'категория',
      dataIndex: 'category',
      width: '25%',
      editable: true,
    },
    {
      title: 'сумма',
      dataIndex: 'amount',
      width: '15%',
      editable: true,
    },
    {
      title: 'дата',
      dataIndex: 'date',
      width: '15%',
      editable: true,
    },
    {
      title: 'описание',
      dataIndex: 'deskription',
      width: '40%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_: any, record: Item) => {
        return <EditOutlined onClick={() => edit(record)} />
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
      bordered
      dataSource={data}
      columns={mergedColumns}
      rowClassName="editable-row"
    />
  )
})

export { MainTable }
