import { accountantApi } from '../api'

const api = accountantApi.injectEndpoints({
  endpoints: (build) => ({
    getItemList: build.query<any, void>({
      query: () => ({ url: `posts/1` }),
    }),
    incrementCount: build.mutation<any, void>({
      query(amount) {
        return {
          url: `increment`,
          method: 'PUT',
          body: { amount },
        }
      },
    }),
  }),
})

export const { useGetItemListQuery } = api
