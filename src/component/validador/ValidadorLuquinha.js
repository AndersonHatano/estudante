import React, { Component } from "react";
import Logo from '../validador/logoVerde.png'
import '../validador/Validador.css'

class ValidadorLuquinha extends Component{


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
                    <div class="column is-two-third is-offset-one-third">
                        <i class="fa-sharp fa-solid fa-circle-check fa-3x"></i>
                    </div>
                </div>

                </div>

                <div class="columns is-mobile">
                    <div class="column is-three-fifths is-offset-one-fifth">
                        <p class="texto-validador" id="texto-meio">Carteirinha válida até 31/03/2023</p>
                    </div>
                </div>

                <div class="columns is-mobile">
                    <div class="column is-three-fifths is-offset-one-fifth">  
                        <p class="texto-validador">
                            <span class="texto-validador-negrito">Nome: </span>
                            Lucas Mendes Santana
                        </p>
                    </div>
                </div>


                <div class="columns is-mobile">
                    <div class="column is-three-fifths is-offset-one-fifth">  
                        <p class="texto-validador">
                            <span class="texto-validador-negrito">Instituição de ensino: </span>
                            Unipac
                        </p>
                    </div>
                </div>

                <div class="columns is-mobile">
                    <div class="column is-three-fifths is-offset-one-fifth">  
                        <p class="texto-validador">
                            <span class="texto-validador-negrito">Código de uso: </span>
                            l8bNS5wFxBgdh0QW5Sc02
                        </p>
                    </div>
                </div>

                <div class="column is-half is-offset-one-quarter"> 

                    <button class="button" id="buttonValidador">Baixar certificado de atributos</button>
                </div>
            </div>

        );
    }


}

export default ValidadorLuquinha;