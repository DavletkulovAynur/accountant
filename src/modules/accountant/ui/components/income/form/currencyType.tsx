import { memo } from 'react'
import { Select } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'

const CurrencyType = memo(({ name }: { name: any }) => {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          {...field}
          options={[
            { value: 'RUB', label: 'RUB' },
            { value: 'USD', label: 'USD' },
            { value: 'ARS', label: 'ARS' },
          ]}
        />
      )}
    />
  )
})

export { CurrencyType }
