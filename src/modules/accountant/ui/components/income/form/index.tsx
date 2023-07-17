import { memo } from 'react'
import { Col, Row } from 'antd'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { RHFInput, RHFDatePickerField, RHFTextArea } from 'shared/ui/RHF'
import { Button } from 'antd'
import { CurrencyType } from './currencyType'
import dayjs from 'dayjs'
import { IFormFields } from './types'

//FIXME: Починить buttons

const EditFormModal = memo(() => {
  const methods = useForm<IFormFields>({
    defaultValues: {
      category: 'hello',
      amount: 123,
      currency: 'USD',
      date: '',
      description: '',
    },
  })

  const { handleSubmit } = methods

  //FIXME: send
  const sendEditData: SubmitHandler<IFormFields> = (data) => {
    console.log(dayjs(data.date).format('X'))
  }

  return (
    <FormProvider {...methods}>
      <div className="modal__input">
        <RHFInput name="category" placeholder="Категория" />
      </div>
      <div className="modal__date-wrapper">
        <RHFDatePickerField name="date" />
      </div>

      <Row className="modal__row" gutter={[8, 0]}>
        <Col span={20}>
          <RHFInput name="amount" placeholder="Сумма" />
        </Col>
        <Col span={4}>
          <CurrencyType name="currency" />
        </Col>
      </Row>
      <div className="modal__input">
        <RHFTextArea name="description" />
      </div>
      <Row className="modal__buttons" gutter={[16, 0]}>
        <Col span={8}>
          <Button block>Отмена</Button>
        </Col>
        <Col span={8}>
          <Button onClick={handleSubmit(sendEditData)} type="primary" block>
            Сохранить
          </Button>
        </Col>
      </Row>
    </FormProvider>
  )
})

export { EditFormModal }
