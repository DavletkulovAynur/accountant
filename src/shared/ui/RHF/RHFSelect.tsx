import { memo } from 'react'
import { Select } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'
import { ISelectCurrency } from 'modules/accountant/ui/containers/income/types'

const RHFSelect = memo(
  ({
    name,
    selectCurrency,
  }: {
    name: string
    selectCurrency: ISelectCurrency
  }) => {
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
