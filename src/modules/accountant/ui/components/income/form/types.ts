//FIXME: какой тип имеет date
export interface IFormFields {
  category: string
  amount: number
  currency?: string
  date: Date | null
  description: string
}
