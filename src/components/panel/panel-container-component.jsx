import React from 'react';
import AddUser from '../add-user/add-user-component';
import Search from '../search/search-component';
import './panel-container-styles.css';

export default function PanelContainer(props){
    return(
        <div className="panel-container">        
            <AddUser                 
                funcionAgregar={props.funcionAgregar} 
                funcionObtenerPersona={props.funcionObtenerPersona} />
            <Search
                funcionBuscarPersona={props.funcionBuscarPersona}
            />
        </div>
    )
}
