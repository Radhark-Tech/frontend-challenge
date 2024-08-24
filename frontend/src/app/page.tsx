"use client"

import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import DataLabel from "@/components/DataLabel";
import UserProfile from "@/components/UserProfile";

import './styles.css';

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
    <div className='main'>
      <div style={{ width: '100%' }}>
        <Box sx={{ bgcolor: 'rgba(64, 64, 64, 1)', height: '25vh', borderRadius: '8px', position: 'relative' }}/>
      </div>
      <div className='content-container'>
        <div className='content-header'>
          <UserProfile />
        </div>
          
        <div className='labels-container'>
          <h3 className='title-data-labels'>Dados cadastrais</h3>

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
