import { Modal } from 'antd'
import { FC, memo } from 'react'
import { OperationForm } from '../operationForm'

const CreateOperationModal: FC<any> = memo(
  ({ isOpenCreateOperationModal, closeModal }) => {
    return (
      <>
        <Modal
          title="Редактировать"
          open={isOpenCreateOperationModal}
          footer={null}
          onCancel={closeModal}
        >
          <OperationForm />
        </Modal>
      </>
    )
  }
)

export { CreateOperationModal }
