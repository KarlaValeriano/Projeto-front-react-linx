import React from "react"
import './App.css'
import Cabecalho from "./componentes/Cabecalho/Cabecalho"
import Divisor from "./componentes/Divisor/Divisor"


function App() {
 

  return (
    <div className="App">
      <Cabecalho/>
      <Divisor/>
      {/*
      <Produtos/>
      <Compartilhe/>
      <Rodape/> */}
    </div>
  )
}

export default App ;
