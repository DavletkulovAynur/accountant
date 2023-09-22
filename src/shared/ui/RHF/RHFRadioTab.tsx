import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { RadioTab } from '../components/Radio'

const RHFRadioTab = memo(({ name }: { name: any }) => {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field, fieldState: { error } }) => <RadioTab {...field} />}
    />
  )
})

export { RHFRadioTab }
