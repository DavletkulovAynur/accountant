import { FC } from 'react'
import { Modal } from 'antd'

const ConfirmModal: FC<any> = ({ isOpen, onCancel, onOk }) => {
  console.log('onOK', onOk)
  return (
    <>
      <Modal
        title="Exit"
        open={isOpen}
        onOk={onOk}
        onCancel={onCancel}
        okText="Ok"
        cancelText="Cancel"
      >
        <p>Do you really want to leave?</p>
      </Modal>
    </>
  )
}

export { ConfirmModal }
