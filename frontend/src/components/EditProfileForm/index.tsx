import { useForm, SubmitHandler } from "react-hook-form";
import NextLink from 'next/link';
import { Button, TextField } from "@mui/material";
import { User } from "@/Types/UserType";
import './styles.css';

export default function EditProfileForm({id, name, CRM, email, telefone}: User, updateUser: any){
    const { handleSubmit, register, formState: {errors} } = useForm<User>({
        defaultValues: {
            name: name,
            CRM: CRM,
            email: email,
            telefone: telefone
        }
    });
    const onSubmit: SubmitHandler<User> = (data) => {
        console.log(data);
    }
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="personal-data-container">
                <h3 className="edit-profile-title">INFORMAÇÕES PESSOAIS</h3>
                <div className="input-container">
                    <TextField
                        fullWidth
                        error={errors.name ? true:false}
                        label="Nome Completo"
                        helperText={errors.name?.message}
                        {...register("name",{ required: 'Este campo é obrigatório.' })}
                    />
                    <TextField
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
                        fullWidth
                        size="medium"
                        error={errors.email ? true:false}
                        label="Email"
                        helperText={errors.email?.message}
                        {...register("email",{ required: 'Este campo é obrigatório' })}
                    />
                    <TextField
                        fullWidth
                        error={errors.telefone ? true:false}
                        label="Telefone"
                        helperText={errors.telefone?.message}
                        {...register("telefone",{ required: 'Este campo é obrigatório', minLength: {value: 11, message: 'Tamanho mínimo de 11 números.'} })}
                    />
                </div>
            </div>
            <div className="submit-button-container">
                <Button variant="outlined" component={NextLink} href="/" color='secondary'>Cancelar</Button>
                <Button variant="contained" color='secondary' type="submit">Salvar</Button>
            </div>
        </form>
    );
}