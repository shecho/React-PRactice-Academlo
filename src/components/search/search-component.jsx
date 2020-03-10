import React from 'react';
import TextField from '@material-ui/core/TextField';
export default function Search(props){
    return(
        <TextField 
            id="outlined-search" 
            label="Busca tu Usuario" 
            onChange={props.funcionBuscarPersona}
            type="search" 
            variant="outlined" />
    )
}