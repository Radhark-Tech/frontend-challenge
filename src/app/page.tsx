"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Avatar,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import {
  Edit as EditIcon,
  Person as PersonIcon,
  Badge as BadgeIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Gavel as GavelIcon,
} from "@mui/icons-material";
import EditProfileModal from "@/components/EditProfileModal";

interface Doctor {
  id: string;
  name: string;
  crm: string;
  email: string;
  phone: string;
  birthDate: string;
  photo?: string;
}

export default function PerfilPage() {
  const [doctorData, setDoctorData] = useState<Doctor | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchDoctorData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://frontend-challenge-backend-842303020925.us-east1.run.app/api/v1/doctor/3156c9ba-bfd8-4c54-a2a3-14e0c03954c7"
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar dados do médico");
      }

      const data = await response.json();
      setDoctorData(data);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (updatedData: Partial<Doctor>) => {
    if (!doctorData) return;

    try {
      const response = await fetch(
        `https://frontend-challenge-backend-842303020925.us-east1.run.app/api/v1/doctor/${doctorData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao atualizar dados");
      }

      setDoctorData({ ...doctorData, ...updatedData });
    } catch (error) {
      console.error("Erro ao salvar:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchDoctorData();
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return "";

    try {
      if (dateString.includes("/")) {
        return `Início ${dateString}`;
      }

      const date = new Date(dateString);
      return `Início ${date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })}`;
    } catch {
      return `Início ${dateString}`;
    }
  };

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography>Carregando...</Typography>
      </Container>
    );
  }

  if (!doctorData) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography>Erro ao carregar dados do perfil</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={2} sx={{ overflow: "hidden" }}>
        <Box
          sx={{
            bgcolor: "#424242",
            color: "white",
            p: 3,
            position: "relative",
            minHeight: 120,
          }}
        >
          <IconButton
            onClick={() => setIsEditModalOpen(true)}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "#9c27b0",
              bgcolor: "rgba(255, 255, 255, 0.1)",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            <EditIcon />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "flex-end", mt: 2 }}>
            <Avatar
              src={doctorData.photo || "/placeholder.svg?height=80&width=80"}
              sx={{
                width: 80,
                height: 80,
                border: "3px solid white",
                mr: 2,
              }}
            />
            <Box>
              <Typography variant="h5" fontWeight="bold">
                {doctorData.name}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                {formatDate(doctorData.birthDate)}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Conteúdo principal */}
        <Box sx={{ p: 3 }}>
          {/* Título da seção */}
          <Typography
            variant="h6"
            sx={{
              color: "#9c27b0",
              fontWeight: "bold",
              mb: 2,
              fontSize: "0.875rem",
              letterSpacing: "0.5px",
            }}
          >
            DADOS CADASTRAIS
          </Typography>

          {/* Lista de dados */}
          <List sx={{ py: 0 }}>
            <ListItem sx={{ px: 0, py: 1 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <PersonIcon sx={{ color: "#666", fontSize: 20 }} />
              </ListItemIcon>
              <ListItemText
                primary={doctorData.name}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "0.95rem",
                    color: "#333",
                  },
                }}
              />
            </ListItem>

            <ListItem sx={{ px: 0, py: 1 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <BadgeIcon sx={{ color: "#666", fontSize: 20 }} />
              </ListItemIcon>
              <ListItemText
                primary={`CRM: ${doctorData.crm}`}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "0.95rem",
                    color: "#333",
                  },
                }}
              />
            </ListItem>

            <ListItem sx={{ px: 0, py: 1 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <EmailIcon sx={{ color: "#666", fontSize: 20 }} />
              </ListItemIcon>
              <ListItemText
                primary={doctorData.email}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "0.95rem",
                    color: "#333",
                  },
                }}
              />
            </ListItem>

            <ListItem sx={{ px: 0, py: 1 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <PhoneIcon sx={{ color: "#666", fontSize: 20 }} />
              </ListItemIcon>
              <ListItemText
                primary={doctorData.phone}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "0.95rem",
                    color: "#333",
                  },
                }}
              />
            </ListItem>
          </List>

          <Divider sx={{ my: 3 }} />

          {/* Seção Equipe */}
          <Typography
            variant="h6"
            sx={{
              color: "#9c27b0",
              fontWeight: "bold",
              mb: 2,
              fontSize: "0.875rem",
              letterSpacing: "0.5px",
            }}
          >
            EQUIPE
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <Avatar
              sx={{ width: 40, height: 40, mr: 2 }}
              src="/placeholder.svg?height=40&width=40"
            />
            <Box>
              <Typography variant="body2" fontWeight="bold">
                NOME SOBRENOME
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Concierge
              </Typography>
            </Box>
          </Box>

          {/* Link Termos de Uso */}
          <Button
            startIcon={<GavelIcon />}
            sx={{
              color: "#9c27b0",
              textTransform: "none",
              p: 0,
              justifyContent: "flex-start",
              "&:hover": {
                bgcolor: "transparent",
                textDecoration: "underline",
              },
            }}
          >
            Consultar Termos De Uso
          </Button>
        </Box>
      </Paper>

      {/* Modal de Edição */}
      <EditProfileModal
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        doctor={doctorData}
        onSave={handleSave}
      />
    </Container>
  );
}
