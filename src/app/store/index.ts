import { configureStore } from '@reduxjs/toolkit'
import { accountantApi } from 'modules/accountant/domain'
import accountantSlice from 'modules/accountant/store'
import authSlice from 'modules/auth/store/authSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    accountant: accountantSlice,
    [accountantApi.reducerPath]: accountantApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(accountantApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
