import React, { Component } from "react";
import carteiraRay from './carteiraRay.JPG'
import LogoClubeDoEstudante from '../clubeDoEstudante2.jpg'
import qrCodeRay from '../carteiraRay/qrCodeRay.png'
import { Redirect } from 'react-router-dom'
import '../Carteira.css'

class CarteiraRay extends Component {

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
                        <img src={carteiraRay} alt='carteirinha Anderson' id="carteirinhafoto"/>
                    </div>

                    <div class="columns is-mobile">
                        <div class="column is-half is-offset-one-quarter">
                            <h2>QRCode de validação:</h2>
                        </div>
                    </div>

                    <div class="columns is-mobile">
                        <div class="column is-half is-offset-one-quarter">

                            <div  class="block">
                                <img src={qrCodeRay} alt='qr code Ray'/>
                            </div>

                        </div>
                    </div>
                    
                </div>
                    
            </div>

        );

    }

}

export default CarteiraRay;