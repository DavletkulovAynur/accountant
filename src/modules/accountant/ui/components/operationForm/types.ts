import { CURRENCY_NAMES } from 'shared/enums'

//FIXME: какой тип имеет date
export interface IFormFields {
  operationType: string
  category: string
  amount: number | null
  currency?: CURRENCY_NAMES | null
  date: Date | null
  description: string
}
