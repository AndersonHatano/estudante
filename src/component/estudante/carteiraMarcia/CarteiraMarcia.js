import React, { Component } from "react";
import CarteirinhaMarcia from '../carteiraMarcia/carteiraMarcia.JPG'
import LogoClubeDoEstudante from '../clubeDoEstudante2.jpg'
import qrCodeMarcia from '../carteiraMarcia/qrCodeMarcia.png'
import { Redirect } from 'react-router-dom'
import '../Carteira.css'

class CarteiraMarcia extends Component {

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
                        <img src={CarteirinhaMarcia} alt='carteirinha Marcia' id="carteirinhafoto"/>
                    </div>

                    <div class="columns is-mobile">
                        <div class="column is-half is-offset-one-quarter">
                            <h2>QRCode de validação:</h2>
                        </div>
                    </div>

                    <div class="columns is-mobile">
                        <div class="column is-half is-offset-one-quarter">

                            <div  class="block">
                                <img src={qrCodeMarcia} alt='qr code Marcia'/>
                            </div>

                        </div>
                    </div>
                    
                </div>
                    
            </div>

        );

    }

}

export default CarteiraMarcia;