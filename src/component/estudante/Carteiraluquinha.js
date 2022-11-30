import React, { Component } from "react";
import CarteiraLucas from '../estudante/luquinha.jpg'
import LogoClubeDoEstudante from '../estudante/clubeDoEstudante2.jpg'
import '../estudante/Carteira.css'

class CarteiraLuquinha extends Component {


    render(){

        return (

            <div>
                <div class="column is-half is-offset-one-quarter">

                    <div class="columns is-mobile">
                        <div class="column is-half is-offset-one-quarter">

                            <div  class="block">
                                <img src={LogoClubeDoEstudante} alt='logo'/>
                            </div>

                        </div>
                    </div>

                    <div>
                        <button class="button is-rounded">MENU PRINCIPAL</button>
                    </div>

                    <div>
                        <button class="button is-rounded">VER PRÉVIA DA CIE</button>
                    </div>

                        
                </div>

                <div class="column is-half is-offset-one-quarter">

                    <div class="block">
                        <img src={CarteiraLucas} alt='carteirinha lucas'/>
                    </div>

                    <div class="column is-half is-offset-one-quarter">
                        <h2>QRCode de validação:</h2>
                    </div>
                    
                </div>
                    
            </div>

        );

    }

}

export default CarteiraLuquinha;