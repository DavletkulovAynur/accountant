import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Input } from 'antd'
const { TextArea } = Input

const RHFTextArea = memo(
  ({ name, placeholder }: { name: string; placeholder: string }) => {
    const { control } = useFormContext()
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextArea
            placeholder={placeholder}
            autoSize={{ minRows: 3, maxRows: 5 }}
            {...field}
          />
        )}
      />
    )
  }
)

export { RHFTextArea }
