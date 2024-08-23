"use client"

import { useEffect, useState } from "react";
import { Avatar, Box, Container, makeStyles } from "@mui/material";

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DataLabel from "@/components/DataLabel";

type User = {
  nome: string,
  CRM: string,
  email: string,
  tel: string
}


export default function Home() {
  const [user, setUser] = useState<User>();


  useEffect(()=>{
    setUser({
      nome: 'Ana Cláudia Sousa',
      CRM: '123456789',
      email: 'draanaclaudia@exemplo.com',
      tel: '(21) 9 9999-9999'
    });
  },[]);

  return (
    <div style={{
      backgroundColor: 'rgba(250, 250, 250, 1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
    }}>
      <div style={{
        width: '100%',
    
      }}>
        <Box sx={{ bgcolor: 'rgba(64, 64, 64, 1)', height: '25vh', borderRadius: '8px', position: 'relative' }}/>
      </div>
      <div style={{
        zIndex: '2',
        width: '110vh',
        height: '80vh',
        top: '8.1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'absolute'
      }}>
        <div style={{backgroundColor: '#Fff', borderRadius: '5px', width: '100%', padding: '5px 20px'}}>
          <h3 style={{color: 'rgba(134, 59, 255, 1)', fontSize: '.75rem'}}>Dados cadastrais</h3>

          <DataLabel text={user?.nome}>
            <PersonOutlineOutlinedIcon color="disabled" style={{width: '18px'}} />
          </DataLabel>
          <DataLabel text={user?.CRM}>
            <DocumentScannerOutlinedIcon color="disabled" style={{width: '18px'}} />
          </DataLabel>
          <DataLabel text={user?.email}>
            <MailOutlinedIcon color="disabled" style={{width: '18px'}} />
          </DataLabel>
          <DataLabel text={user?.tel}>
            <LocalPhoneOutlinedIcon color="disabled" style={{width: '18px'}} />
          </DataLabel>
        </div>
      </div>
    </div>
  );
}
