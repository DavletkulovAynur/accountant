import { useState } from 'react'
import { Form } from 'antd'
import { EditModal } from '../components/editModal'
import { DefaultTable } from '../components/DefaultTable'
import { useGetAllExpensesOperationsQuery } from 'modules/accountant/domain'

export const Expenses = () => {
  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const operationsQuery = useGetAllExpensesOperationsQuery()

  const openModal = (record: any) => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Form form={form} component={false}>
      <DefaultTable openModal={openModal} operationsQuery={operationsQuery} />
      <EditModal closeModal={closeModal} isModalOpen={isModalOpen} />
    </Form>
  )
}
