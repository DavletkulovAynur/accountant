import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Input } from 'antd'
const { TextArea } = Input

const RHFTextArea = memo(({ name }: { name: any }) => {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextArea
          {...field}
          placeholder="Описание"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      )}
    />
  )
})

export { RHFTextArea }
