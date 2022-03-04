import React from 'react';
import { useState } from "react";

const UsuarioEntrada = ({setUser}) => {
  
let [input, setInput] = useState("");

function inputHandler(event) {
setInput(event.target.value);
  }

  return (
    <>
     <h2>Digite alguma coisa, vou lhe informar quantos caracteres foram utilizados: </h2>
     <textarea onChange={inputHandler}></textarea>

    <h2>Você digitou {input.length} caracters: </h2>
</>
  )
}

export default UsuarioEntrada;

