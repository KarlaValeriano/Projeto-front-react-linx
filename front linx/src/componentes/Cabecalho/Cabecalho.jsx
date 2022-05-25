import React from "react";
import Botao from "../Botao/Botao";
import styles from "./cabecalho.module.css";



 const Cabecalho =() =>{
     return(
     <header className={styles.cabecalho}>
         <section>
             <h1 className={styles.inicio} > Uma seleção de produtos</h1> 
             <h1 className={styles.titulo}>especial para você</h1>
             <h3 className={styles.fim}>Todos os produtos desta lista foram selecionados a 
                 partir da sua navegação. Aproveite!</h3>
         </section>

            <nav className={styles.menu}>
                <ul>
                    <li>
                        <Botao texto='Conheça a linx'/>
                    </li>
                    <li>
                        <Botao texto='Ajude por algoritmo'/>
                    </li>
                    <li>
                        <Botao texto='Seus produtos'/>
                    </li>
                    <li>
                        <Botao texto='Compartilhe'/>
                    </li>
                </ul>
            </nav>

        
         </header>
     )
 }
 export default Cabecalho





