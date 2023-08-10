import React, { memo, useState } from 'react'
import { Table } from 'antd'
import { Item, testData } from './types'
import { EditOutlined } from '@ant-design/icons'

const MainTable: React.FC<any> = memo(({ openModal }) => {
  const [data] = useState(testData)

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    openModal(record)
  }

  //Return correctly amount with currency
  const columns = [
    {
      title: 'категория',
      dataIndex: 'category',
      width: '25%',
    },
    {
      title: 'сумма',
      dataIndex: 'amount',
      width: '15%',
      render: (item: any) => {
        return 10000
      },
    },
    {
      title: 'дата',
      dataIndex: 'date',
      width: '15%',
    },
    {
      title: 'описание',
      dataIndex: 'deskription',
      width: '40%',
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
