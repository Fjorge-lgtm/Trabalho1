import React, {useState} from 'react';
import LampAcesa from './Image/lamp.acesa.jpg';
import LampApagada from './Image/lamp.apagada.jpg'


function Evento (){

  const [ligada, setLigada] = useState(true);


  return(
    <div>
      <img src={ligada ? LampAcesa:LampApagada}/>
      <button onClick={()=>setLigada(!ligada)}>{ligada ? "Desligar":"Ligar"}</button>
    </div>
  )


  
}

export default Evento;