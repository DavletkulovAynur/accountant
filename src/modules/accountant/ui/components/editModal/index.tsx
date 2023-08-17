import { memo, FC } from 'react'
import { Modal } from 'antd'
import { OperationForm } from '../operationForm'

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
        <OperationForm />
      </Modal>
    </>
  )
})

export { EditModal }
