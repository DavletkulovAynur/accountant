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
import { RHFCurrencyInput } from 'shared/ui/RHF/RHFCurrencyInput'
import { currencies } from 'config'
import css from './styles.module.scss'

const OperationForm = memo(() => {
  const [sendIncome, { isLoading }] = useSendIncomeMutation()

  const methods = useForm<IFormFields>({
    defaultValues: {
      category: '',
      amount: null,
      currency: 'USD',
      date: null,
      description: '',
    },
  })

  const { handleSubmit } = methods

  const sendEditData: SubmitHandler<IFormFields> = async (data) => {
    sendIncome(data)
  }

  return (
    <FormProvider {...methods}>
      <div className={css.wrapper}>
        <RHFInput name="category" placeholder="Category" />
      </div>
      <div className={css.wrapper}>
        <RHFDatePickerField name="date" />
      </div>
      <div className={css.wrapper}>
        <Row className="modal__row" gutter={[8, 0]}>
          <Col span={20}>
            <RHFCurrencyInput name="amount" placeholder="amount" />
          </Col>
          <Col span={4}>
            <RHFSelect name="currency" selectCurrency={currencies} />
          </Col>
        </Row>
      </div>
      <div className={css.wrapper}>
        <RHFTextArea name="description" placeholder="Description" />
      </div>
      <Row className="modal__buttons" gutter={[16, 0]}>
        <Col span={8}>
          <Button block>Отмена</Button>
        </Col>
        <Col span={8}>
          <Button
            loading={isLoading}
            onClick={handleSubmit(sendEditData)}
            type="primary"
            block
          >
            Сохранить
          </Button>
        </Col>
      </Row>
    </FormProvider>
  )
})

export { OperationForm }
