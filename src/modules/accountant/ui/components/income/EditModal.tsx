import { memo, FC, useState } from 'react'
import { Modal } from 'antd'
import { Input } from 'antd'
import type { DatePickerProps } from 'antd'
import { DatePicker } from 'antd'
import { Col, Row } from 'antd'

const { TextArea } = Input

//FIXME: одна из задач исправить дату 
const EditModal: FC<any> = memo(({ closeModal, isModalOpen }) => {
  const [value, setValue] = useState('')
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString)
  }

  return (
    <>
      <Modal
        title="Редактировать"
        open={isModalOpen}
        onOk={closeModal}
        onCancel={closeModal}
        okText="Сохранить"
        cancelText="Отмена"
      >
        <Input className="modal__input" placeholder="Категория" />
        <Row className="modal__row" gutter={[16, 0]}>
          <Col flex={1}>
            <Input placeholder="Сумма" />
          </Col>
          <Col flex={1}>
            <DatePicker
              placeholder="Дата"
              className="modal__date"
              onChange={onChange}
            />
          </Col>
        </Row>
        <TextArea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Controlled autosize"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </Modal>
    </>
  )
})

export { EditModal }
