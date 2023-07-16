import { memo, FC, useState } from 'react'
import { Modal } from 'antd'
import { EditFormModal } from './form'

//FIXME: одна из задач исправить дату
const EditModal: FC<any> = memo(({ closeModal, isModalOpen }) => {
  return (
    <>
      <Modal
        title="Редактировать"
        open={isModalOpen}
        footer={null}
        onCancel={closeModal}
      >
        <EditFormModal />
      </Modal>
    </>
  )
})

export { EditModal }
