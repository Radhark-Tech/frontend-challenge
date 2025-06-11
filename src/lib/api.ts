import { Doctor } from "@/types/doctor"
import { EditFormData } from "@/types/profile"

const API_BASE_URL = "https://frontend-challenge-backend-842303020925.us-east1.run.app/api/v1"

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public response?: string,
  ) {
    super(message)
    this.name = "ApiError"
  }
}

// Função para fazer requisições HTTP
async function fetchApi(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE_URL}${endpoint}`

  const config: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  }

  try {
    const response = await fetch(url, config)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new ApiError(errorData.message || `Erro HTTP: ${response.status}`, response.status, errorData)
    }

    return await response.json()
  } catch (error) {
    if (error instanceof ApiError) {
      throw error
    }
  }
}

export async function getDoctorData(doctorId: string): Promise<Doctor> {
  try {
    const data = await fetchApi(`/doctor/${doctorId}`)
    return data
  } catch (error) {
    console.error("Erro ao buscar dados do médico:", error)
    throw error
  }
}

export async function updateDoctorData(updateData: EditFormData, doctorId: string): Promise<Doctor> {
  try {
    const data = await fetchApi(`/doctor/${doctorId}`, {
      method: "PUT",
      body: JSON.stringify(updateData),
    })
    return data
  } catch (error) {
    console.error("Erro ao atualizar dados do médico:", error)
    throw error
  }
}

// Função para upload de imagem (simulada)
export async function uploadImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = (e) => {
      // Em uma implementação real, você faria upload para um serviço de storage
      // Por enquanto, retornamos o data URL da imagem
      resolve(e.target?.result as string)
    }

    reader.onerror = () => {
      reject(new Error("Erro ao processar imagem"))
    }

    reader.readAsDataURL(file)
  })
}

// Função utilitária para formatar data
export function formatDate(dateString: string): string {
  if (!dateString) return ""

  try {
    // Se a data está no formato DD/MM/YYYY
    if (dateString.includes("/")) {
      return dateString
    }

    // Se a data está no formato ISO
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  } catch {
    return dateString
  }
}

// Função utilitária para converter data para formato ISO
export function dateToISO(dateString: string): string {
  if (!dateString) return ""

  try {
    // Se já está no formato YYYY-MM-DD
    if (dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
      return dateString
    }

    // Se está no formato DD/MM/YYYY
    if (dateString.includes("/")) {
      const [day, month, year] = dateString.split("/")
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
    }

    // Tentar converter de Date
    const date = new Date(dateString)
    return date.toISOString().split("T")[0]
  } catch {
    return ""
  }
}

// Função utilitária para converter data ISO para formato brasileiro
export function isoToDateBR(isoDate: string): string {
  if (!isoDate) return ""

  try {
    const [year, month, day] = isoDate.split("-")
    return `${day}/${month}/${year}`
  } catch {
    return isoDate
  }
}
