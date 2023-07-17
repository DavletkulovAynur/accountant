import { memo } from 'react'
import type { DatePickerProps } from 'antd'
import { DatePicker } from 'antd'
import { Col, Row } from 'antd'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { Input } from 'antd'
import { InputForm } from 'shared/ui/formBlocks'
import { Button } from 'antd'
import { CurrencyType } from './currencyType'

const { TextArea } = Input

type Inputs = {
  category: string
  amount: number
  currency?: string
}

const EditFormModal = memo(() => {
  const methods = useForm<Inputs>({
    defaultValues: {
      category: 'hello',
      amount: 123,
      currency: 'USD',
    },
  })
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString)
  }

  const { handleSubmit } = methods

  const sendEditData: SubmitHandler<Inputs> = (data) => {
    console.log('data', data)
  }

  return (
    <FormProvider {...methods}>
      <div className="modal__input">
        <InputForm name="category" placeholder="Категория" />
      </div>
      <Row className="modal__row" gutter={[8, 0]}>
        <Col span={20}>
          <InputForm name="amount" placeholder="Сумма" />
        </Col>
        <Col span={4}>
          <CurrencyType name="currency" />
        </Col>
      </Row>
      <Col flex={1}>
        <DatePicker
          placeholder="Дата"
          className="modal__date"
          onChange={onChange}
        />
      </Col>
      <TextArea
        placeholder="Controlled autosize"
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
      <Row gutter={[16, 0]}>
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

//TODO: в какой валюте???
export { EditFormModal }
