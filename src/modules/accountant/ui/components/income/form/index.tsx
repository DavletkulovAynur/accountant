import { memo } from 'react'
import type { DatePickerProps } from 'antd'
import { DatePicker } from 'antd'
import { Col, Row } from 'antd'
import { useForm, SubmitHandler, useFieldArray, Control } from 'react-hook-form'
import { Input } from 'antd'
import { InputForm } from 'shared/ui/formBlocks'
import { Button } from 'antd'

const { TextArea } = Input

const test = [
  {
    title: 'hell',
    name: 'tyu',
  },
  {
    title: 'zed',
    name: 'tyu',
  },
]

type Inputs = {
  category: string
  amount: number
  test?: any[]
}

const TestArray = ({
  register,
  control,
}: {
  register: any
  control: Control<Inputs>
}) => {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: 'test',
    }
  )

  console.log('fields', fields)
  return (
    <>
      {fields.map((field, index) => (
        <input
          key={field.id} // important to include key with field's id
          {...register(`test.${index}.value`)}
        />
      ))}
    </>
  )
}

const EditFormModal = memo(() => {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString)
  }

  //TODO: если получаем объект можно проконтролировать тут 
  const { control, handleSubmit, register } = useForm<Inputs>({
    defaultValues: {
      category: 'hello',
      amount: 123,
      test: test,
    },
  })

  const sendEditData: SubmitHandler<Inputs> = (data) => {
    console.log('data', data)
  }

  return (
    <form>
      <div className="modal__input">
        <InputForm control={control} name="category" placeholder="Категория" />
      </div>
      <div>
        <TestArray register={register} control={control} />
      </div>
      <Row className="modal__row" gutter={[16, 0]}>
        <Col flex={1}>
          {/* <Input placeholder="Сумма" /> */}
          <InputForm control={control} name="amount" placeholder="Сумма" />
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
    </form>
  )
})

//TODO: в какой валюте???
export { EditFormModal }
