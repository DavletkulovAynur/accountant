import React, { useState } from 'react'
import { Form } from 'antd'
// import { MainTable } from './Table'
// import './style/index.scss'
import { EditModal } from '../components/editModal'
import { DefaulTable } from '../components/Table'

export const Income = () => {
  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (record: any) => {
    console.log(record)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Form form={form} component={false}>
      <DefaulTable form={form} openModal={openModal} />
      <EditModal closeModal={closeModal} isModalOpen={isModalOpen} />
    </Form>
  )
}
