import { useState } from 'react'
import { Form } from 'antd'
import { EditModal } from '../components/editModal'
import { DefaulTable } from '../components/Table'
import { useGetAllIncomeOperationsQuery } from 'modules/accountant/domain'

export const Income = () => {
  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const operationsQuery = useGetAllIncomeOperationsQuery()

  const openModal = (record: any) => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Form form={form} component={false}>
      <DefaulTable
        form={form}
        openModal={openModal}
        operationsQuery={operationsQuery}
      />
      <EditModal closeModal={closeModal} isModalOpen={isModalOpen} />
    </Form>
  )
}
