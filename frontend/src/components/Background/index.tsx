import './styles.css';
import { Box } from "@mui/material";

type ContentBackground = {
    children: React.ReactNode
}

export default function Background({children}: ContentBackground){
    return (
        <div className='main'>
            <div style={{ width: '100%' }}>
                <Box sx={{ bgcolor: 'rgba(64, 64, 64, 1)', height: '25vh', borderRadius: '8px', position: 'relative' }}/>
            </div>
            {children}
        </div>
    );
}