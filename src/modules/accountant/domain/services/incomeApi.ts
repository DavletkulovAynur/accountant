import { IFormFields } from 'modules/accountant/ui/components/operationForm/types'
import { accountantApi } from '../api'
import { EEndpoints } from 'config'

const api = accountantApi.injectEndpoints({
  endpoints: (build) => ({
    getItemList: build.query<any, void>({
      query: () => ({ url: `${EEndpoints.CREAT_INCOME_OPERATION}` }),
    }),
    sendIncome: build.mutation<void, IFormFields>({
      query(body) {
        return {
          url: `${EEndpoints.CREAT_INCOME_OPERATION}`,
          method: 'POST',
          body,
        }
      },
    }),
  }),
})

export const { useGetItemListQuery, useSendIncomeMutation } = api
