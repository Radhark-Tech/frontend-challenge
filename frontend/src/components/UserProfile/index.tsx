import './styles.css';

import EditIcon from '@mui/icons-material/Edit';
import { Avatar } from '@mui/material';

export default function UserProfile(){
    return(
        <>
            <div className='user-profile-info'>
                <Avatar
                    alt='Remy Sharp'
                    src=''
                    style={{marginBottom: '70px'}}
                    sx={{ width: 128, height: 128 }}
                />
                <div className='user-profile-text-container'>
                    <h1 className='user-profile-name'>Dra. Ana Cláudia Sousa</h1>
                    <h2  className='user-profile-registered'>Início 06 Jun,2024</h2>
                </div>
            </div>            
            <div className='user-profile-edit-button'>
              <EditIcon />
              Editar
            </div>
        </>
    );
}