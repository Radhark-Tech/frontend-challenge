"use client"

import Background from "@/components/Background";
import ButtonUploadFile from "@/components/ButtonUploadFile";
import CurrentImage from "@/components/UploadFile";
import EditProfileForm from "@/components/EditProfileForm";
import './styles.css';
import { User } from "@/Types/UserType";

const user: User = {
    name: 'Ana Cláudia Sousa',
    crm: '123456789',
    email: 'draanaclaudia@exemplo.com',
    phone: '(21) 99999-9999' 
}

export default function edit_profile() {
    
    return(
        <Background>
            <div className="form-container">                
                <div className="image-upload-container">
                    <CurrentImage src='' file_name='document_file_name.jpg' size='100kb' />
                    <div className="Upload-image-button">
                        <ButtonUploadFile />
                    </div>
                </div>
                <EditProfileForm {...user}/>
            </div>
        </Background>
    )
}