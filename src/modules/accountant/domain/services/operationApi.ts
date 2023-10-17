import { IFormFields } from 'modules/accountant/ui/components/operationForm/types'
import { accountantApi } from '../api'
import { EEndpoints } from 'config'
import { TDeleteOperationParams } from './types'

const api = accountantApi.injectEndpoints({
  endpoints: (build) => ({
    getAllExpensesOperations: build.query<any, void>({
      query() {
        return {
          url: `${EEndpoints.GET_ALL_EXPENSE_OPERATIONS}`,
          method: 'GET',
        }
      },
      providesTags: ['ExpenseOperations'],
    }),
    getAllIncomeOperations: build.query<any, void>({
      query() {
        return {
          url: `${EEndpoints.GET_ALL_INCOME_OPERATIONS}`,
          method: 'GET',
        }
      },
      providesTags: ['ExpenseOperations'],
    }),
    createNewOperation: build.mutation<void, IFormFields>({
      query(body) {
        return {
          url: `${EEndpoints.CREATE_NEW_OPERATION}`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: ['ExpenseOperations'],
    }),
    deleteOpearation: build.mutation<void, TDeleteOperationParams>({
      query(body) {
        return {
          url: `${EEndpoints.CREATE_DELETE_OPERATION}`,
          method: 'DELETE',
          body,
        }
      },
      invalidatesTags: ['ExpenseOperations'],
    }),
  }),
})

export const {
  useCreateNewOperationMutation,
  useGetAllExpensesOperationsQuery,
  useGetAllIncomeOperationsQuery,
  useDeleteOpearationMutation,
} = api
