export const baseUrl = 'http://localhost:9000'

export enum EEndpoints {
  CREATE_NEW_OPERATION = '/api/accountant/transactions/create',
  CREATE_DELETE_OPERATION = '/api/accountant/transactions/delete',
  CREATE_EDIT_OPERATION = '/api/accountant/transactions/edit',
  GET_ALL_OPERATIONS = '/api/accountant/transactions',
  GET_ALL_EXPENSE_OPERATIONS = '/api/accountant/transactions/expence',
  GET_ALL_INCOME_OPERATIONS = '/api/accountant/transactions/income',
}
