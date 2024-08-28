import { Button } from "@mui/material";
import './styles.css';

export default function ButtonUploadFile(){
    return(
        <Button size="medium" variant="text" color='primary' className='edit-image-button'>
            <input type="file" className="input-file" />
            Alterar foto
        </Button>
    );
}