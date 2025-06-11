"use client"

import { useState, useEffect } from "react"
import type { Profile } from "@/types/profile"
import { getDoctorData, updateDoctorData } from "@/lib/api"

const DOCTOR_ID = "3156c9ba-bfd8-4c54-a2a3-14e0c03954c7"

const mockProfile: Profile = {
  id: "3156c9ba-bfd8-4c54-a2a3-14e0c03954c7",
  name: "Gustavo Albino",
  crm: "12345",
  email: "gustavo@radhark.tech",
  phone: "(11) 99999-9999",
  photo: "/placeholder.svg?height=150&width=150",
  start_date: "2020-01-15",
}

export function useProfile(doctorId: string) {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProfile = async () => {
    try {
      setIsLoading(true)
      setError(null)

      try {
        const apiData = await getDoctorData(DOCTOR_ID)

        const profileData: Profile = {
          id: apiData.id || doctorId,
          name: apiData.name  || mockProfile.name,
          crm: apiData.crm || mockProfile.crm,
          email: apiData.email || mockProfile.email,
          phone: apiData.phone || mockProfile.phone,
          photo: apiData.photo || mockProfile.photo,
          start_date: apiData.start_date || mockProfile.start_date,
        }

        setProfile(profileData)
      } catch (apiError) {
        console.warn("API não disponível, usando dados mock:", apiError)
        setProfile(mockProfile)
      }
    } catch (err) {
      setError("Erro ao carregar perfil")
      console.error("Erro ao buscar perfil:", err)
      setProfile(mockProfile)
    } finally {
      setIsLoading(false)
    }
  }

  const updateProfile = async (data: Profile): Promise<boolean> => {
    try {
      setError(null)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      try {
        await updateDoctorData( {
          name: data.name,
          email: data.email,
          phone: data.phone,
          crm: data.crm
        }, DOCTOR_ID)
      } catch (apiError) {
        console.warn("API update failed, updating locally:", apiError)
      }

      setProfile((prev) => (prev ? { ...prev, ...data } : null))
      return true
    } catch (err) {
      setError("Erro ao atualizar perfil")
      console.error("Erro ao atualizar perfil:", err)
      return false
    }
  }

  useEffect(() => {
    if (doctorId) {
      fetchProfile()
    }
  }, [doctorId])

  return {
    profile,
    isLoading,
    error,
    updateProfile,
    refetch: fetchProfile,
  }
}
