import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

export default function Card(props){
    const classes = useStyles();
    return(
        <Grid item xs={3}>
            <Paper className={classes.paper}>
              <p>{props.nombre}</p>
              <p>{props.email}</p>
              <IconButton 
                 nombre={props.name} 
                 email={props.email}
                aria-label="delete"
                onClick={ (event) => props.funcionBorrarPersona(event, props.id) }
              >
                <DeleteIcon />
              </IconButton>
            </Paper>
        </Grid>
    )
}
//
 /* 

*/