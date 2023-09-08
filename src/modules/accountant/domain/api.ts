import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const accountantApi = createApi({
  reducerPath: 'accountantApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
  tagTypes: [],
  endpoints: () => ({}),
})
