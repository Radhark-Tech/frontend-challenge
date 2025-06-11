// Interface para os dados do médico
export interface Doctor {
  id?: string
  name: string
  crm: string
  email: string
  phone: string
  photo?: string
  start_date?: string
}