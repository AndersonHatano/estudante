import React, { Component } from "react";
import carteiraDebora from '../carteiraDebora/carteirinhaDebora.JPG'
import LogoClubeDoEstudante from '../clubeDoEstudante2.jpg'
import qrCodeDebora from '../carteiraDebora/qrCodeDebora.png'
import { Redirect } from 'react-router-dom'
import '../Carteira.css'

class CarteiraDebora extends Component {

    constructor(props){
        super(props);

        this.state ={
            redirectTo : null
        };
    }

    voltarMenu(e){
        this.setState({redirectTo : "login"})
    }

    render(){
        
        if(this.state.redirectTo){
            return (
                <Redirect to={this.state.redirectTo}/>
            );
        }

        return (

            <div>
                <div class="column is-half is-offset-one-quarter">

                    <div class="columns is-mobile">
                        <div class="column is-half is-offset-one-quarter">

                            <div  class="block">
                                <img src={LogoClubeDoEstudante} alt='logo' id="logoCarteira"/>
                            </div>

                        </div>
                    </div>

                    <div>
                        <button class="button is-rounded" id="buttonCarteira"
                        onClick={(e) => this.voltarMenu(e)}>MENU PRINCIPAL</button>
                    </div>

                    <div>
                        <button class="button is-rounded" id="buttonCarteira">VER PRÉVIA DA CIE</button>
                    </div>

                        
                </div>

                <div class="column is-half is-offset-one-quarter">

                    <div class="block">
                        <img src={carteiraDebora} alt='carteirinha Debora' id="carteirinhafoto"/>
                    </div>

                    <div class="columns is-mobile">
                        <div class="column is-half is-offset-one-quarter">
                            <h2>QRCode de validação:</h2>
                        </div>
                    </div>

                    <div class="columns is-mobile">
                        <div class="column is-half is-offset-one-quarter">

                            <div  class="block">
                                <img src={qrCodeDebora} alt='qr code debora'/>
                            </div>

                        </div>
                    </div>
                    
                </div>
                    
            </div>

        );

    }

}

export default CarteiraDebora;