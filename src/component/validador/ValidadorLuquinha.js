import React, { Component } from "react";
import Logo from '../validador/logoVerde.png'
import '../validador/Validador.css'

class ValidadorLuquinha extends Component{


    render(){

        return (

            <div id="especial">
                <img src={Logo} alt='logo'/>

                <p>Carteirinha válida até 31/03/2023</p>

                <p>
                    <span>Nome: </span>
                    Lucas Mendes Santana
                </p>

                <p>
                    <span>Instituição de ensino: </span>
                    Unipac
                </p>

                <p>
                    <span>Código de uso: </span>
                    l8bNS5wFxBgdh0QW5Sc02
                </p>

                <button class="button" id="buttonValidador">Baixar certificado de atributos</button>

            </div>

        );
    }


}

export default ValidadorLuquinha;