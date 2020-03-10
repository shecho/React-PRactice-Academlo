import React from 'react';
import './App.css';
import Header from './components/header/header-component';
import PanelContainer from './components/panel/panel-container-component';
import CardContainer from './components/card-container/card-container-component';
import Container from '@material-ui/core/Container';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      //Clave:Valor
      personas: [],
      nombre: "",
      email: "",
      buscarPersona: "",
      respaldoPersonas: [],
      camposValidos: false,
      mensajeError: ""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(arregloPersonas => {        
        this.setState({personas : arregloPersonas});
        this.setState({respaldoPersonas : arregloPersonas});
      }
    )
  }

  //Al utilizar las funciones de flecha el contexto será el mismo en el que se declaró
  agregarTarjeta = () => {

    if(this.state.nombre.length > 0 && this.state.email.length > 0){
      let personasModificadas = this.state.personas;
      let arregloIndices = this.state.personas.map( persona => persona.id);
      let indice = arregloIndices[arregloIndices.length-1] + 1; 
      
      personasModificadas.push({
        "id": indice,
        "name": this.state.nombre,
        "username": "Bret",
        "email": this.state.email,    
      });
  
      //Agregar los nuevos estados
      this.setState({personas: personasModificadas});
      this.setState({respaldoPersonas: personasModificadas});   
      
      //Quitar el valor actual para los dos componentes de texto
      this.setState({nombre: ""});
      this.setState({email: ""});
    }else{
      alert("Hay campos vacios");
      this.setState({camposValidos: true});
      this.setState({mensajeError: "Completa este campo"});
    }
  }

  obtenerPersona = (event) => {    
    this.setState({nombre: event.target.value});
    if(event.target.value.length > 0){
      this.setState({camposValidos: false});
      this.setState({mensajeError: ""});
    }else{
      this.setState({camposValidos: true});
    }
  }

  obtenerEmail = (event) => {    
    this.setState({email: event.target.value});
    if(event.target.value.length > 0){
      this.setState({camposValidos: false});
      this.setState({mensajeError: ""});
    }else{
      this.setState({camposValidos: true});
    }
  }

  buscarPersona = (event) => {
    //Crear una variable para guardar todas las personas que actualmente están en la aplicación
    // Y para así poder trabajar sobre ese arreglo
    let respaldoPersonas = this.state.respaldoPersonas;    
    //Voy a filtrar el arreglo para que me regresen las personas que cumplan con la expresión 
    // persona.name.includes(event.target.value)
    let arregloPersonasModificadas = respaldoPersonas.filter( 
      persona => persona.name.includes(event.target.value)
    );
    //En este punto voy a actualizar el estado por el arreglo de personas filtradas
    this.setState({personas: arregloPersonasModificadas});
  }

  borrarPersona = (event, id) => {
    //Obtenemos el indice donde se encuentra el id de la persona que queremos borrar
    // let getPersonaIndex = this.state.personas.findIndex( persona => persona.id === id);
    let getPersonaIndex = this.state.personas.map( persona => persona.id );
    getPersonaIndex = getPersonaIndex.indexOf(id);
    //Creamos una copia del arreglo para poder manipularlo posteriormente
    let arregloPersonas = this.state.personas;
    //Eliminamos el elemento dentro del arreglo
    arregloPersonas.splice(getPersonaIndex, 1);
    //Agregamos el nuevo estado para personas
    this.setState({personas: arregloPersonas});
  }

  render(){
    return (
      <Container maxWidth="lg">
        <Header />
        <PanelContainer 
          funcionAgregar={this.agregarTarjeta} 
          funcionObtenerPersona={this.obtenerPersona}
          funcionObtenerEmail={this.obtenerEmail}
          funcionBuscarPersona={this.buscarPersona}
          nombre={this.state.nombre}
          email={this.state.email}
          validacion={this.state.camposValidos}
          mensajeError={this.state.mensajeError}
        />
        <CardContainer 
          personas={this.state.personas}
          funcionBorrarPersona={this.borrarPersona}
        />      
      </Container>
    )
  }
}