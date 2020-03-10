import React from 'react';
import AddUser from '../add-user/add-user-component';
import Search from '../search/search-component';
import './panel-container-styles.css';

export default function PanelContainer(props){
    return(
        <div className="panel-container">        
            <AddUser                 
                funcionAgregar={props.funcionAgregar} 
                funcionObtenerPersona={props.funcionObtenerPersona}
                funcionObtenerEmail={props.funcionObtenerEmail}
                nombre={props.nombre}
                email={props.email}
                validacion={props.validacion}
                mensajeError={props.mensajeError}
            />
            <Search
                funcionBuscarPersona={props.funcionBuscarPersona}
            />
        </div>
    )
}
