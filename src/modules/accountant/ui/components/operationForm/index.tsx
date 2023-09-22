import { memo, useEffect } from 'react'
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
import { RHFCurrencyInput } from 'shared/ui/RHF/RHFCurrencyInput'
import css from './styles.module.scss'
import { CURRENCY_NAMES, currencySelectors } from 'shared/enums'
import { useCreateNewOperationMutation } from 'modules/accountant/domain'
import { RHFRadioTab } from 'shared/ui/RHF/RHFRadioTab'

//  TODO:
const OperationForm = memo(({ closeModal }: any) => {
  const [createOperation, { isLoading }] = useCreateNewOperationMutation()
  const methods = useForm<IFormFields>({
    defaultValues: {
      operationType: 'income',
      category: '',
      amount: null,
      currency: CURRENCY_NAMES.USD,
      date: null,
      description: '',
    },
  })

  const { handleSubmit, watch } = methods
  const suffix: CURRENCY_NAMES = watch('currency') as CURRENCY_NAMES

  const sendEditData: SubmitHandler<IFormFields> = async (data) => {
    createOperation(data)
  }

  return (
    <FormProvider {...methods}>
      <div className={css.wrapper}>
        <RHFRadioTab name="operationType" />
      </div>
      <div className={css.wrapper}>
        <RHFInput name="category" placeholder="Category" />
      </div>
      <div className={css.wrapper}>
        <RHFDatePickerField name="date" />
      </div>
      <div className={css.wrapper}>
        <Row className="modal__row" gutter={[8, 0]}>
          <Col span={20}>
            <RHFCurrencyInput
              suffix={suffix}
              name="amount"
              placeholder="amount"
            />
          </Col>
          <Col span={4}>
            <RHFSelect name="currency" selectCurrency={currencySelectors} />
          </Col>
        </Row>
      </div>
      <div className={css.wrapper}>
        <RHFTextArea name="description" placeholder="Description" />
      </div>
      <Row className="modal__buttons" gutter={[16, 0]}>
        <Col span={8}>
          <Button onClick={closeModal} block>
            Отмена
          </Button>
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
