// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const accountantApi = createApi({
  reducerPath: 'accountantApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  // tagTypes: ['Time', 'Posts', 'Counter'],
  endpoints: () => ({}),
})
