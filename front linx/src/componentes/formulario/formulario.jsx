import React from 'react'
import Botao from '../Botao/Botao'
import styles from './Formulario.module.css'

const Formulario = () => {
  return (
   
           <form className={styles.form}> 
           
            
                <label>Seu nome:</label>
                <input type = "text"/>
           
           
                <label>Email:</label>
                <input type = "email"/>
           
            
                <label>Cpf</label>
                <input type = "email"/>
            
            <div>
        <label >
          <input name="masculino" type="radio" />
          Masculino
        </label>

        <label>
          <input name="feminino" type="radio" />
          Feminino
        </label>
        </div>
       <div className={styles.btn}>
         <Botao className={styles.button2} texto='Enviar'/>
       </div>
    </form>
   
  )
}

export default Formulario