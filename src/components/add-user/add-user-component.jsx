import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './add-user-styles.css';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function AddUser(props){
    const classes = useStyles();
    return(
        <form className={classes.root} noValidate autoComplete="off">
            <TextField 
                className="campo-usuario"
                onChange={ props.funcionObtenerPersona } 
                id="outlined-basic" 
                label="Agregar Usuario"
                value={props.nombre} 
                error={props.validacion}
                helperText={props.mensajeError}
                variant="outlined" />
            <TextField 
                className="campo-usuario"
                onChange={ props.funcionObtenerEmail } 
                id="outlined-basic" 
                label="Email"
                value={props.email}
                error={props.validacion}
                helperText={props.mensajeError}
                variant="outlined" />
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<AddIcon />}
                onClick={props.funcionAgregar }
                >
                Agregar
            </Button>
        </form> 
    )
}