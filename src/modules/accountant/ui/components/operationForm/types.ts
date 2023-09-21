//FIXME: какой тип имеет date
export interface IFormFields {
  category: string
  amount: number | null
  currency?: string
  date: Date | null
  description: string
}
