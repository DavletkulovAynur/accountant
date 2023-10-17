import React, { memo, useState } from 'react'
import { Table, Flex } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import dateFormat from 'dateformat'
import css from './styles.module.scss'
import { ConfirmModal } from 'shared/ui/components'
import { useDeleteOpearationMutation } from 'modules/accountant/domain'
import { IDefaultTable, IOperation } from './types'

const DefaultTable: React.FC<IDefaultTable> = memo(
  ({ openModal, operationsQuery }) => {
    const [deleteOperation, { isLoading: isDeleteOperationLoading }] =
      useDeleteOpearationMutation()
    const { data = [], isLoading, isFetching } = operationsQuery

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [operationId, setOperationId] = useState<number | null>(null)

    const edit = (record: IOperation) => {
      openModal(record)
    }

    const onCancel = () => {
      setIsOpenModal(false)
    }

    const handleDeleteOperation = () => {
      deleteOperation({ operationId })
      onCancel()
    }

    const openDeleteModal = (record: IOperation) => {
      console.log('record', record)
      setOperationId(record.id)
      setIsOpenModal(true)
    }

    const columns = [
      {
        title: 'CATEGORY',
        dataIndex: 'category',
        width: '25%',
        key: 'category',
      },
      {
        title: 'AMOUNT',
        dataIndex: 'amount',
        width: '15%',
        key: 'amount',
      },
      {
        title: 'DATE',
        dataIndex: 'date',
        width: '15%',
        render: (item: any) => {
          return dateFormat(item, 'mmmm dS, yyyy')
        },
        key: 'date',
      },
      {
        title: 'DESCRIPTION',
        dataIndex: 'description',
        width: '40%',
        key: 'description',
      },
      {
        title: 'OPERATIONS',
        dataIndex: 'operation',
        render: (_: any, record: IOperation) => {
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
        key: 'operation',
      },
    ]

    const mergedColumns = columns.map((col) => ({ ...col }))

    return (
      <>
        <Table
          loading={isLoading || isDeleteOperationLoading || isFetching}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
        />
        <ConfirmModal
          isOpen={isOpenModal}
          onCancel={onCancel}
          onOk={handleDeleteOperation}
        />
      </>
    )
  }
)

export { DefaultTable }
