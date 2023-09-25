import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { InputPassword } from '../components/InputPassword'

const RHFInputPassword: any = memo(
  ({ name, placeholder }: { name: any; placeholder: string }) => {
    const { control } = useFormContext()
    return (
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState: { error } }) => (
          <InputPassword error={error} placeholder={placeholder} {...field} />
        )}
      />
    )
  }
)

export { RHFInputPassword }
