import { IFormFields } from 'modules/accountant/ui/components/operationForm/types'
import { accountantApi } from '../api'
import { EEndpoints } from 'config'

const api = accountantApi.injectEndpoints({
  endpoints: (build) => ({
    getItemList: build.query<any, void>({
      query: () => ({ url: `${EEndpoints.OPERATIONS}` }),
    }),
    sendIncome: build.mutation<void, IFormFields>({
      query(body) {
        return {
          url: `increment`,
          method: 'PATCH',
          body,
        }
      },
    }),
  }),
})

export const { useGetItemListQuery, useSendIncomeMutation } = api
