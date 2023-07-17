import { memo } from "react"
import { Controller, useFormContext } from 'react-hook-form'
import { DatePicker } from 'antd'

const RHFDatePickerField = memo(({ name }: { name: any }) => {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <DatePicker {...field} placeholder="Дата" className="modal__date" />
      )}
    />
  )
})

export {RHFDatePickerField}