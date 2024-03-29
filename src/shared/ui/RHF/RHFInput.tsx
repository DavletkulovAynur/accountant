import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Input } from '../components'

const RHFInput: any = memo(
  ({ name, placeholder }: { name: any; placeholder: string }) => {
    const { control } = useFormContext()
    return (
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState: { error } }) => (
          <Input error={error} placeholder={placeholder} {...field} />
        )}
      />
    )
  }
)

export { RHFInput }
