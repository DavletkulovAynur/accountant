import React, { memo, useState } from 'react'
import { Form } from 'antd'
import { MainTable } from './Table'
import { EditModal } from './EditModal'
import './style/index.scss'

const Income: React.FC = memo(() => {
  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
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
