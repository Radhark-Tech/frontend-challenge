"use client"

import { useContext } from "react";
import Background from "@/components/Background";
import ButtonUploadFile from "@/components/ButtonUploadFile";
import CurrentImage from "@/components/UploadFile";
import EditProfileForm from "@/components/EditProfileForm";
import { UserContext } from "@/context/UserContext";
import './styles.css';

export default function EditPage() {
    const { userProfile } = useContext(UserContext);

    return(
        <Background>
            <div className="form-container">                
                <div className="image-upload-container">
                    <CurrentImage src='' file_name='document_file_name.jpg' size='100kb' />
                    <div className="Upload-image-button">
                        <ButtonUploadFile />
                    </div>
                </div>
                <EditProfileForm {...userProfile} />
            </div>
        </Background>
    )
}