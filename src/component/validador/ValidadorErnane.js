import React, { Component } from "react";
import Logo from '../validador/logoVerde.png'
import '../validador/Validador.css'

class ValidadorErnane extends Component{


    render(){

        return (
            
            <div id="especial">
                <div class="column is-half is-offset-one-quarter">
                    
                <div class="columns is-mobile">
                    <div class="column is-three-fifths is-offset-one-fifth">
                        <img src={Logo} alt='logo' id="logo"/>
                    </div>
                </div>

                <div class="columns is-mobile">
                    <div class="column is-two-third is-offset-one-third" id="check">
                        <i class="fa-sharp fa-solid fa-circle-check fa-4x"></i>
                    </div>
                </div>

                </div>

                <div class="columns is-mobile">
                    <div class="column is-three-fifths is-offset-one-fifth">
                        <p class="texto-validador" id="texto-meio">Carteirinha válida até 31/07/2023</p>
                    </div>
                </div>

                <div class="columns is-mobile">
                    <div class="column is-three-fifths is-offset-one-fifth">  
                        <p class="texto-validador">
                            <span class="texto-validador-negrito">Nome: </span>
                            Ernane Benedito Vieira Junior
                        </p>
                    </div>
                </div>


                <div class="columns is-mobile">
                    <div class="column is-three-fifths is-offset-one-fifth">  
                        <p class="texto-validador">
                            <span class="texto-validador-negrito">Instituição de ensino: </span>
                            Centro Universitário UNA
                        </p>
                    </div>
                </div>

                <div class="columns is-mobile">
                    <div class="column is-three-fifths is-offset-one-fifth">  
                        <p class="texto-validador">
                            <span class="texto-validador-negrito">Código de uso: </span>
                            p7cSA8wxVGaiT8WHdSc32
                        </p>
                    </div>
                </div>

                <div class="columns is-mobile">
                    <div class="column is-three-fifths is-offset-one-fifth">  
                        <button class="button" id="buttonValidador">Baixar certificado de atributos</button>
                    </div>
                </div>
            </div>

        );
    }


}

export default ValidadorErnane;