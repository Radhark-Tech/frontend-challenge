import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import { Button } from '@mui/material';
import NextLink from 'next/link'
import './styles.css';

export default function TermOfUse(){
    return (
        <Button variant='text' component={NextLink} href='/term-of-use' sx={{width: '199px', height: '36px', padding:'6px 8px', marginTop: '35px'}}>
            <PrivacyTipOutlinedIcon style={{width:'20px'}} />
            <h5 className='term-text'>Consultar Termos de Uso</h5>
        </Button>
    );
}