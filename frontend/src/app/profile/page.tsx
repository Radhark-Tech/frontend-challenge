'use client'

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';

import DataLabel from '@/components/DataLabel';
import UserProfile from '@/components/UserProfile';
import Background from '@/components/Background';
import Equipe from '@/components/Equipe';
import TermOfUse from '@/components/TermOfUse';
import TitlePage from '@/components/TitlePage';

import { useUserContext } from '@/context/UserContext';
import './styles.css';

export default function Home() {

  const { userProfile } = useUserContext();
  return (
    <>
      <TitlePage title='Perfil' />
      <Background>
        <div className='content-container'>
          <div className='content-header'>
            <UserProfile name={userProfile?.name} />
          </div>          
          <div className='labels-container'>
            <h3 className='title-data-labels'>DADOS CADASTRAIS</h3>
            <DataLabel text={userProfile?.name}>
              <PersonOutlineOutlinedIcon color='disabled' style={{width: '18px'}} />
            </DataLabel>          
            <DataLabel text={userProfile?.CRM}>
              <DocumentScannerOutlinedIcon color='disabled' style={{width: '18px'}} />
            </DataLabel>
            <DataLabel text={userProfile?.email}>
              <MailOutlinedIcon color='disabled' style={{width: '18px'}} />
            </DataLabel>
            <DataLabel text={userProfile?.telefone}>
              <LocalPhoneOutlinedIcon color='disabled' style={{width: '18px'}} />
            </DataLabel>          
          </div>
          <div className='labels-container' style={{marginTop: '35px'}}>
            <h3 className='title-data-labels'>EQUIPE</h3>
            <Equipe />
          </div>
          <TermOfUse />
        </div>
      </Background>
    </>
  );
}
