import React, { Component } from "react";
import CarteiraLucas from '../estudante/luquinha.jpg'
import LogoClubeDoEstudante from '../estudante/clubeDoEstudante2.jpg'

class CarteiraLuquinha extends Component {


    render(){

        return (

            <div class="column is-three-fifths is-offset-one-fifth ">

                <div>
                    <img src={LogoClubeDoEstudante} alt='logo'/>
                </div>
                
                <div>
                    <button class="button is-danger is-rounded">MENU PRINCIPAL</button>
                </div>
                
                <div>
                    <img src={CarteiraLucas} alt='carteirinha lucas'/>
                </div>
                <div>
                    <h2>QRCode de validação:</h2>
                </div>
                

            </div>

        );

    }

}

export default CarteiraLuquinha;