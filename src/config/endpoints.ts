export const baseUrl = 'http://localhost:9000'

export enum EEndpoints {
  OPERATIONS = '/api/operations',
  LOGIN = '/api/auth/login',
  LOGOUT = '/api/auth/logout',
  CREAT_NEW_OPERATION = '/api/accountant/createNewOperation',
  GET_ALL_EXPENSE_OPERATIONS = '/api/accountant/getAllExpenseOperations',
  USER = '/api/users',
}
