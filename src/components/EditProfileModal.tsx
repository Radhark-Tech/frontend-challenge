"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Avatar,
  Box,
  IconButton,
  Typography,
  Alert,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import type { Doctor } from "../types/doctor";

interface EditProfileModalProps {
  open: boolean;
  onClose: () => void;
  doctor: Doctor | null;
  onSave: (data: Partial<Doctor>) => Promise<void>;
}

interface FormData {
  email: string;
  crm: string;
  phone: string;
  name: string;
  photo?: File;
  start_date: string;
}

export default function EditProfileModal({
  open,
  onClose,
  doctor,
  onSave,
}: EditProfileModalProps) {
  const [photoPreview, setPhotoPreview] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      crm: "",
      phone: "",
      name: "",
      start_date: "",
    },
  });

  function formatToDateInput(isoDateString: string | undefined) {
    if (!isoDateString) return "";
    try {
      const date = new Date(isoDateString);

      return date.toISOString().split("T")[0];
    } catch (error) {
      console.error("Error formatting date:", error);
      return "";
    }
  }

  useEffect(() => {
    if (doctor && open) {
      setValue("email", doctor.email || "");
      setValue("crm", doctor.crm || "");
      setValue("phone", doctor.phone || "");
      setValue(`name`, doctor.name || "");
      setValue(`start_date`, formatToDateInput(doctor.start_date) || "");

      setPhotoPreview(doctor.photo || "");
      setError("");
    }
  }, [doctor, open, setValue]);

  useEffect(() => {
    if (!open) {
      reset();
      setPhotoPreview("");
      setError("");
    }
  }, [open, reset]);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Por favor, selecione apenas arquivos de imagem.");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setError("A imagem deve ter no máximo 5MB.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      setValue("photo", file);
      setError("");
    }
  };

  const onSubmit = async (data: FormData) => {
    if (!doctor) return;

    setLoading(true);
    setError("");

    try {
      const updateData: Doctor = {
        email: data.email,
        crm: data.crm,
        phone: data.phone,
        name: data.name,
        start_date: data.start_date,
      };

      if (data.photo) {
        updateData.photo = photoPreview;
      }

      await onSave(updateData);
      onClose();
    } finally {
      setLoading(false);
    }
  };

  if (!doctor) {
    return null;
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h6" component="div">
          Editar Perfil
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box component="form" sx={{ mt: 2 }}>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {/* Seção da Foto */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Avatar
              src={photoPreview || doctor.photo}
              sx={{ width: 100, height: 100, mb: 2 }}
            />
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="photo-upload"
              type="file"
              onChange={handlePhotoChange}
            />
            <label htmlFor="photo-upload">
              <IconButton color="primary" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
            <Typography variant="caption" color="textSecondary">
              Clique para alterar a foto
            </Typography>
          </Box>

          <Controller
            name="name"
            control={control}
            rules={{ required: "Nome é obrigatório" }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Nome"
                margin="normal"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email é obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Email"
                type="email"
                margin="normal"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />

          <Controller
            name="crm"
            control={control}
            rules={{ required: "CRM é obrigatório" }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="CRM"
                margin="normal"
                error={!!errors.crm}
                helperText={errors.crm?.message}
              />
            )}
          />

          <Controller
            name="start_date"
            control={control}
            rules={{ required: "Data de início é obrigatório" }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Data de início"
                type="date"
                margin="normal"
                error={!!errors.crm}
                helperText={errors.crm?.message}
              />
            )}
          />

          <Controller
            name="phone"
            control={control}
            rules={{ required: "Telefone é obrigatório" }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Telefone"
                margin="normal"
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            )}
          />
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Cancelar
        </Button>
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          disabled={loading}
        >
          {loading ? "Salvando..." : "Salvar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
