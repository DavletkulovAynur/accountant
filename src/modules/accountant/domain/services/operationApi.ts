import { IFormFields } from 'modules/accountant/ui/components/operationForm/types'
import { accountantApi } from '../api'
import { EEndpoints } from 'config'

const api = accountantApi.injectEndpoints({
  endpoints: (build) => ({
    getAllExpensesOperations: build.query<any, void>({
      query() {
        return {
          url: `${EEndpoints.GET_ALL_EXPENSE_OPERATIONS}`,
          method: 'GET',
        }
      },
    }),
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

export const {
  useCreateNewOperationMutation,
  useGetAllExpensesOperationsQuery,
} = api
