import { memo } from 'react'
import { Col, Row } from 'antd'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import {
  RHFInput,
  RHFDatePickerField,
  RHFTextArea,
  RHFSelect,
} from 'shared/ui/RHF'
import { Button } from 'antd'
import { IFormFields } from './types'
import { useSendIncomeMutation } from 'modules/accountant/domain'
import { ISelectCurrency } from '../income/types' 

//FIXME: где хранить
const selectCurrency: ISelectCurrency = [
  { value: 'RUB', label: 'RUB' },
  { value: 'USD', label: 'USD' },
  { value: 'ARS', label: 'ARS' },
]

//FIXME: как это все работает без провайдера 

const OperationForm = memo(() => {
  const [sendIncome] = useSendIncomeMutation()
  const methods = useForm<IFormFields>({
    defaultValues: {
      category: 'hello',
      amount: 123,
      currency: 'USD',
      date: null,
      description: '',
    },
  })

  const { handleSubmit } = methods

  const sendEditData: SubmitHandler<IFormFields> = (data) => {
    sendIncome(data)
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
          <RHFSelect name="currency" selectCurrency={selectCurrency} />
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

export { OperationForm }
