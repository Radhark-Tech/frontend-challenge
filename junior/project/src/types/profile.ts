// Interface para os dados do médico
export interface Profile {
  name: string,
  crm: string,
  email: string,
  phone: string,
  start_date: string,
  photo: string,
  id: string,
}
  
  
  // Interface para dados do formulário de edição
  export interface EditFormData {
    email: string
    crm: string
    phone: string
    name: string
    photo?: File
  }
  
  // Interface para props do modal
  export interface EditProfileModalProps {
    open: boolean
    onClose: () => void
    doctor: Profile | null
    onSave: (data: Partial<Profile>) => Promise<void>
  }