import { CURRENCY_NAMES } from "shared/enums"

//FIXME: какой тип имеет date
export interface IFormFields {
  category: string
  amount: number | null
  currency?: CURRENCY_NAMES
  date: Date | null
  description: string
}
