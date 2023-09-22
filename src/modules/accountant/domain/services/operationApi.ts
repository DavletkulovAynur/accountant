import { IFormFields } from 'modules/accountant/ui/components/operationForm/types'
import { accountantApi } from '../api'
import { EEndpoints } from 'config'

const api = accountantApi.injectEndpoints({
  endpoints: (build) => ({
    createNewOperation: build.mutation<void, IFormFields>({
      query(body) {
        return {
          url: `${EEndpoints.CREAT_NEW_OPERATION}`,
          method: 'POST',
          body,
        }
      },
    }),
  }),
})

export const { useCreateNewOperationMutation } = api
