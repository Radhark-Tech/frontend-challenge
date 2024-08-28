import { Avatar } from '@mui/material';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import './styles.css';

type Image = {
    src?: string,
    file_name: string,
    size: string
}

export default function CurrentImage({src, file_name, size }: Image){
    return(
        <div className="image-upload-title-container">
            <Avatar
                alt='Remy Sharp'
                src={src}
                sx={{ width: 56, height: 56 }}
            />
            <div className="upload-image-title">
                <UploadFileOutlinedIcon color="primary" />
                <h5>{file_name}</h5>
                <h6>{size}</h6>
            </div>
        </div>
    );
}