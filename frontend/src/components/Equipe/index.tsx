import { Avatar } from '@mui/material';
import './styles.css';

export default function Equipe(){
    return(
        <div className='equipe-container'>
            <Avatar
                alt='Remy Sharp'
                src=''
                sx={{ width: 40, height: 40 }}
            />
            <div className='equipe-text-container'>
                <h4>NOME SOBRENOME</h4>
                <h5 >Concierge</h5>
            </div>
        </div>
    );
}