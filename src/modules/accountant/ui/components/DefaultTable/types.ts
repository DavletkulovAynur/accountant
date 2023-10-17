export interface IOperation {
  key: string
  category: string
  amount: number
  description: string
  date: string
  id: number
}

export interface IDefaultTable {
  openModal: (record: IOperation) => void
  operationsQuery: any
}
