import { useState } from 'react'
import { Form } from 'antd'
import { EditModal } from '../components/editModal'
import { DefaulTable } from '../components/Table'
import { useGetAllExpensesOperationsQuery } from 'modules/accountant/domain'

export const Expenses = () => {
  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { data } = useGetAllExpensesOperationsQuery()

  const openModal = (record: any) => {
    console.log(record)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  console.log('data', data)
  return (
    <Form form={form} component={false}>
      <DefaulTable form={form} openModal={openModal} data={data} />
      <EditModal closeModal={closeModal} isModalOpen={isModalOpen} />
    </Form>
  )
}
