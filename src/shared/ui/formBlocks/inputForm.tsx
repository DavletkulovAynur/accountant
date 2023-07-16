import { memo } from 'react'
import { Controller, Control } from 'react-hook-form'
import { Input } from 'antd'

//FIXME: useRef это что
//FIXME:  придумать название
//FIXME: нужно указать что для name правильный тип данных

type FormValues = {
  category: string
  amount: number
}

const InputForm: any = memo(
  ({
    control,
    name,
    placeholder,
  }: {
    control: Control<FormValues>
    name: any
    placeholder: string
  }) => {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input {...field} placeholder={placeholder} />}
      />
    )
  }
)

export { InputForm }
