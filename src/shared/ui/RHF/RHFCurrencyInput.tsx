import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { CurrencyInput } from '../components'

const RHFCurrencyInput: any = memo(
  ({ name, placeholder }: { name: any; placeholder: string }) => {
    const { control } = useFormContext()
    return (
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState: { error } }) => (
          <CurrencyInput error={error} placeholder={placeholder} {...field} />
        )}
      />
    )
  }
)

export { RHFCurrencyInput }
