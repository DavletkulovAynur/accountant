import React, { memo, useState } from 'react'
import { Form } from 'antd'
import { MainTable } from './Table'
import './style/index.scss'
import { useGetItemListQuery } from 'modules/accountant/domain'
import { EditModal } from '../../components/editModal'

const Income: React.FC = memo(() => {
  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  // const { data } = useGetItemListQuery()

  const openModal = (record: any) => {
    console.log(record)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Form form={form} component={false}>
      <MainTable form={form} openModal={openModal} />
      <EditModal closeModal={closeModal} isModalOpen={isModalOpen} />
    </Form>
  )
})

export { Income }