import { IFormFields } from 'modules/accountant/ui/components/income/form/types'
import { accountantApi } from '../api'

const api = accountantApi.injectEndpoints({
  endpoints: (build) => ({
    getItemList: build.query<any, void>({
      query: () => ({ url: `posts/1` }),
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
