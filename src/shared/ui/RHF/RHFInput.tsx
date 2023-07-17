import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Input } from 'antd'

//FIXME: useRef это что
//FIXME:  придумать название
//FIXME: нужно указать что для name правильный тип данных

type FormValues = {
  category: string
  amount: number
}

const RHFInput: any = memo(
  ({ name, placeholder }: { name: any; placeholder: string }) => {
    const { control } = useFormContext()
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input {...field} placeholder={placeholder} />}
      />
    )
  }
)

export { RHFInput }
