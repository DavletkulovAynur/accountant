import { forwardRef, Ref } from 'react'
import css from './styles/input.module.scss'
import { Input } from 'antd'

const InputPassword = forwardRef((props: any, ref: Ref<HTMLInputElement>) => {
  const { error, ...rest } = props
  const className = `${css.password} ${error ? css.error : ''}`

  return <Input.Password className={className} ref={ref} {...rest} />
})

export { InputPassword }
