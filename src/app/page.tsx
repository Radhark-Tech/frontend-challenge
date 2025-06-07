"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../service/usuarioservice";
import { Avatar, Button } from "@mui/material";

type Profile = {
  name: string;
  crm: string;
  email: string;
  phone: string;
  img: string;
  start_date: string;
  photo: string;
};

export default function Page() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const getDoctorByID = async () => {
      const response = await axiosInstance.get(
        "api/v1/doctor/3156c9ba-bfd8-4c54-a2a3-14e0c03954c7"
      );
      console.log({ response });

      //setProfile(response.photo);
      console.log(response);

      setProfile({
        ...response.data,

        // imagem mockada enquanto nao tem imagem vindo do servidor
        img: "https://picsum.photos/200",
      });
    };

    getDoctorByID();
  }, []);
  // enquanto não ha profile não mostra nada na tela
  if (profile === null) return null;

  return (
    <main className="bg-[#FAFAFA] h-screen w-full fixed">
      <nav
        className="topo-perfil"
        aria-label="recipe"
        style={{
          fontWeight: "bold",
          fontSize: 30,
          margin: 10,
          color: "#1E1E1E",
        }}
      >
        Perfil
      </nav>
      <Card
        className="faixa-cinza"
        variant="outlined"
        sx={{
          width: 1700,
          height: 200,
          bgcolor: "#404040",
          margin: "0 auto",
          borderRadius: 3,
        }}
      >
        <div className="cinza">
          <p>manga</p>
        </div>
      </Card>
      <div className="main-conteudo">
        <div
          className="bg-[#7e4343]"
          style={{
            width: 1200,
            height: 200,
            margin: "0 auto",
            borderRadius: 3,
          }}
        >
          <Avatar
            className="-translate-y-20 ..."
            alt="Travis Howard"
            src={profile.img}
            sx={{ width: 150, height: 150 }}
          />
          <div className="perfil">{profile.name}</div>
          <div className="perfil">{profile.start_date}</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button variant="contained">Mudar</Button>
          </div>
        </div>

        <Card
          variant="outlined"
          sx={{
            width: 1200,
            height: 200,
            bgcolor: "#fff",
            margin: "0 auto",
            borderRadius: 3,
          }}
        >
          <div
            className="dados-topo"
            style={{
              fontWeight: "bold",
              fontSize: 16,
              margin: 10,

              color: "#9352FF",
            }}
          >
            DADOS CADASTRAIS
          </div>
          <CardContent>
            <div className="perfil">{profile.name}</div>
            <div className="perfil">{profile.crm}</div>
            <div className="perfil">{profile.email}</div>
            <div className="perfil">{profile.phone}</div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
