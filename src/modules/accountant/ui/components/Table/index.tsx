import React, { memo, useState } from 'react'
import { Table } from 'antd'
import { EditOutlined } from '@ant-design/icons'

export interface Item {
  key: string
  category: string
  amount: number
  deskription: string
}

export const testData = [
  {
    key: '1',
    category: 'Работа',
    amount: 120000,
    deskription: 'London Park no',
    date: '12.01.2022',
  },
]

const DefaulTable: React.FC<any> = memo(({ openModal }) => {
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

export { DefaulTable }
