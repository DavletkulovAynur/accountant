import { forwardRef, Ref } from 'react'
import Input from 'react-currency-input-field'
import css from './styles/input.module.scss'

const CurrencyInput = forwardRef((props: any, ref: Ref<HTMLInputElement>) => {
  const {
    onChange,
    error,
    groupSeparator = ' ',
    decimalSeparator = ',',
    suffix,
    ...rest
  } = props
  const className = `${css.input} ${error ? css.error : ''}`

  return (
    <Input
      className={className}
      onValueChange={(value) => onChange(value)}
      ref={ref}
      decimalSeparator={decimalSeparator}
      groupSeparator={groupSeparator}
      suffix={` ${suffix}`}
      {...rest}
    />
  )
})

export { CurrencyInput }
