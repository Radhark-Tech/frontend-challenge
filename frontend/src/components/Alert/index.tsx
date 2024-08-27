import Alert from "@mui/material/Alert";

export default function AlertForm({status}:{status: boolean} ){

    return(
        <Alert variant="filled" severity={status?'success':'error'} sx={{marginTop: '20px', width: '80%'}}>
            {status ? 'Perfil atualizado com sucesso.' : 'Falha ao atualizar perfil.'}
        </Alert>
    );
}