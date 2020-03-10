import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import { blue } from '@material-ui/core/colors';
import './card-style.css';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    blueColor: {
      color: theme.palette.getContrastText(blue[500]),
      backgroundColor: blue[500],
    },
}));

export default function Card(props){
    const classes = useStyles();
    return(
        <Grid item xs={3}>
            <Paper className={`card-flex ${classes.paper}`}>
              <Avatar className={classes.blueColor}>{props.nombre[0]}</Avatar>
              <p>{props.nombre}</p>
              <p>{props.email}</p>
              <IconButton 
                aria-label="delete"
                onClick={ (event) => props.funcionBorrarPersona(event, props.id) }
              >
                <DeleteIcon />
              </IconButton>
            </Paper>
        </Grid>
    )
}
