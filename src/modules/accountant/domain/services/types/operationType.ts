//TODO: посмотреть видео про zod
import { z } from 'zod'

const deleteOperationParamsScheme = z.object({
  operationId: z.number().nullable(),
})

export type TDeleteOperationParams = z.infer<typeof deleteOperationParamsScheme>
