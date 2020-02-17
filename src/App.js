 import React,{useState,useEffect} from 'react';
 import axios from 'axios';

function Frase({frase}){
  return (
    <div className="frase">
    <h1>{frase.quote}</h1>
    <p>- {frase.author}</p>
  </div>
    )
}



 function App(){

    const [frase,obtenerfrase]=useState({});
    //consulta a una rest API
      const consultarAPI = async () => {
      const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
      // agregar el resultado de la API al state; (similar a this.setState)
      obtenerfrase(resultado.data[0]);
    }

    //consultar a una rest API
    useEffect
    (
      () => {
        consultarAPI()
      },[]
    )


    return(
      <div className="contenedor">
      <Frase 
        frase={frase}
      />
      <button
        onClick={consultarAPI}
      >Generar Nueva</button>
    </div>
    );

 }

 export default App;