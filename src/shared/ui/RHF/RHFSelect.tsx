import { memo } from 'react'
import { Select } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'

const RHFSelect = memo(
  ({ name, selectCurrency }: { name: string; selectCurrency: any }) => {
    const { control } = useFormContext()
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Select {...field} options={selectCurrency} />}
      />
    )
  }
)

export { RHFSelect }
