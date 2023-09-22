import { forwardRef, Ref } from 'react'
import { Radio } from 'antd'
import css from './styles/radioTab.module.scss'

//FIXME: придумать решение
const RadioTab = forwardRef((props: any, ref: Ref<HTMLInputElement>) => {
  return (
    <Radio.Group
      className={css.radio}
      defaultValue="income"
      size="large"
      {...props}
    >
      <Radio.Button className={css.button} value="income">
        Income
      </Radio.Button>
      <Radio.Button className={css.button} value="expence">
        Expense
      </Radio.Button>
    </Radio.Group>
  )
})

export { RadioTab }
