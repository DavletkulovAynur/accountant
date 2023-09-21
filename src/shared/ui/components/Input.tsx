import { forwardRef, Ref } from 'react'
import css from './styles/input.module.scss'

const Input = forwardRef((props: any, ref: Ref<HTMLInputElement>) => {
  const { error, ...rest } = props
  const className = `${css.input} ${error ? css.error : ''}`

  return <input className={className} ref={ref} {...rest} />
})

export { Input }
