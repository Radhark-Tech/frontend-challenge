'use client'

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';

import DataLabel from '@/components/DataLabel';
import UserProfile from '@/components/UserProfile';
import Background from '@/components/Background';

import { User } from '@/Types/UserType';
import './styles.css';

const user: User = {
  name: 'Ana Cláudia Sousa',
  crm: '123456789',
  email: 'draanaclaudia@exemplo.com',
  phone: '(21) 99999-9999' 
}

export default function Home() {

  return (
    <Background>      
      <div className='content-container'>
        <div className='content-header'>
          <UserProfile />
        </div>          
        <div className='labels-container'>
          <h3 className='title-data-labels'>Dados cadastrais</h3>
          <DataLabel text={user?.name}>
            <PersonOutlineOutlinedIcon color='disabled' style={{width: '18px'}} />
          </DataLabel>          
          <DataLabel text={user?.crm}>
            <DocumentScannerOutlinedIcon color='disabled' style={{width: '18px'}} />
          </DataLabel>
          <DataLabel text={user?.email}>
            <MailOutlinedIcon color='disabled' style={{width: '18px'}} />
          </DataLabel>
          <DataLabel text={user?.phone}>
            <LocalPhoneOutlinedIcon color='disabled' style={{width: '18px'}} />
          </DataLabel>          
        </div>          
      </div>
    </Background>
  );
}
