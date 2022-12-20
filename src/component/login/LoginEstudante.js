import React, { Component } from "react";
import Logo from '../validador/logoVerde.png'
import { Redirect } from 'react-router-dom'

class LoginEstudante extends Component {

    constructor(props){
        super(props);

        this.state ={
            email: "",
            senha: "",
            redirectTo : null
        };
    }

    handleChange(changeObject) {
        this.setState(changeObject);
    }


    teste(e){
        
        var email = this.state.email;
        var senha = this.state.senha;
        var invalido = true;

        if(email === "lucas" && senha === "lucas123"){
            this.setState({redirectTo : "l8bNS5wFxBgdh0QW5Sc02"});
            invalido = false;
        }

        if(email === "ricardo" && senha === "ricardo123"){
            this.setState({redirectTo : "P2bFT8wFxfgdg0QW8Sc04"});
            invalido = false;
        }

        if(email === "gabriel" && senha === "gabriel123"){
            this.setState({redirectTo : "l5dMY5nWpBhdh7YW5Sc01"});
            invalido = false;
        }

        if(email === "rafael" && senha === "rafael123"){
            this.setState({redirectTo : "d8bNS5wXpAgdh7QW4Sq97"});
            invalido = false;
        }

        if(email === "luana" && senha === "luana123"){
            this.setState({redirectTo : "j5bBD8wGxEgdh7QW5Sc65"});
            invalido = false;
        }

        if(email === "leonardo" && senha === "leonardo123"){
            this.setState({redirectTo : "p7bFG5wFxFgdh8AW78a81"});
            invalido = false;
        }

        if(email === "cecilia" && senha === "cecilia123"){
            this.setState({redirectTo : "q5bDS4wSfBawh0GN5Tc34"});
            invalido = false;
        }

        
        if(email === "marcia" && senha === "marcia123"){
            this.setState({redirectTo : "h5bGS4962wqFxyBgdah0WW5Sc22"});
            invalido = false;
        }

        if(invalido){
            alert("Email e/ou senha errada!!");
            this.setState({
                email: "",
                senha: "",
                redirectTo : null
            });
        }
    }

    render(){

        if(this.state.redirectTo){
            return (
                <Redirect to={this.state.redirectTo}/>
            );
        }

        return(
            <div class="column is-three-fifths is-offset-one-fifth ">

                <div class="columns is-mobile">
                    <div class="column is-three-fifths is-offset-one-fifth">
                        <img src={Logo} alt='logo' id="logo"/>
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <input class="input" type="email" placeholder="Email"
                        value={this.state.email}
                            onChange={(e) => this.handleChange({email: e.target.value})}/>
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <input class="input" type="password" placeholder="Senha"
                        value={this.state.senha}
                        onChange={(e) => this.handleChange({senha: e.target.value})}/>
                    </div>
                </div>

                <div>
                    <button class="button is-rounded" id="buttonCarteira" 
                    onClick={(e) => this.teste(e)}>ENTRAR</button>
                </div>

                <div>
                    <button class="button is-rounded" id="buttonCarteira" >RECUPERA SENHA</button>
                </div>

            </div>

        );
    }

}

export default LoginEstudante;