import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import NextLink from 'next/link';

import { Button, TextField } from "@mui/material";

import { User } from "@/Types/UserType";
import AlertForm from "../Alert";
import './styles.css';


export default function EditProfileForm({id, name, CRM, email, telefone}: User, updateUser: any){

    const [status, setStatus] = useState<boolean>(true);
    const [isSent, setIsSent] = useState<boolean>(false);

    const { handleSubmit, register, formState: {errors}, watch } = useForm<User>({
        defaultValues: {
            name: name,
            CRM: CRM,
            email: email,
            telefone: telefone
        }
    });

    const sendData = async (data: User) => {
        try{
            setIsSent(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}`,{
                method: 'PATCH',
                body: JSON.stringify({
                    "id": id,
                    "name": data.name,
                    "CRM": data.CRM,
                    "email": data.email,
                    "telefone": data.telefone
                }),
            })
            setStatus(response.ok);
        }
        catch(err){
            console.error(err);
        }
    }

    const onSubmit: SubmitHandler<User> = (data) => {
        sendData(data);
    }
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="personal-data-container">
                <h3 className="edit-profile-title">INFORMAÇÕES PESSOAIS</h3>
                <div className="input-container">
                    <TextField
                        onChangeCapture={() => {isSent ? setIsSent(false) : isSent}}
                        fullWidth
                        error={errors.name ? true:false}
                        label="Nome Completo"
                        helperText={errors.name?.message}
                        {...register("name",{ required: 'Este campo é obrigatório.' })}
                    />
                    <TextField
                        onChangeCapture={() => {isSent ? setIsSent(false) : isSent}}
                        fullWidth
                        error={errors.CRM ? true:false}
                        label="CRM"
                        helperText={errors.CRM?.message}
                        {...register("CRM",{ required: false, minLength: {value: 9, message: 'Tamanho mínimo de 9 números.'} })}
                    />
                </div>
            </div>
            <div className="registration-data-container">
                <h3 className="edit-profile-title">DADOS CADASTRAIS</h3>
                <div className="input-container">
                    <TextField
                        onChangeCapture={() => {isSent ? setIsSent(false) : isSent}}
                        fullWidth
                        type="email"
                        error={errors.email ? true:false}
                        label="Email"
                        helperText={errors.email?.message}
                        {...register("email",{ required: 'Este campo é obrigatório' })}
                    />
                    <TextField
                        onChangeCapture={() => {isSent ? setIsSent(false) : isSent}}
                        fullWidth
                        type="tel"
                        error={errors.telefone ? true:false}
                        label="Telefone"
                        helperText={errors.telefone?.message}
                        {...register("telefone",{ required: 'Este campo é obrigatório', minLength: {value: 11, message: 'Tamanho mínimo de 11 números.'} })}
                    />
                </div>
            </div>
            <div className="submit-button-container">
                <Button variant="outlined" component={NextLink} href="/profile" sx={{borderRadius: '5px'}} color='secondary'>Cancelar</Button>
                <Button variant="contained" sx={{borderRadius: '5px'}} color='secondary' type="submit">Salvar</Button>
            </div>
            {
                isSent && (<AlertForm status={status} />)
            }
        </form>
    );
}