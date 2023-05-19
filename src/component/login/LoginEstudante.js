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
        

        if(email === "lucassantana" && senha === "lucas123"){
            this.setState({redirectTo : "1d00910d-5bf1-4aaa-a952-8d027c8ce60f"});
            invalido = false;
        }

        if(email === "bruno" && senha === "bruno123"){
            this.setState({redirectTo : "s8bGS4VxBgdh0QW6Dc12"});
            invalido = false;
        }

        if(email === "thayna" && senha === "thayna123"){
            this.setState({redirectTo : "l4bMS4wDxBgnh0QW8Sc05"});
            invalido = false;
        }
        
        if(email === "paulo" && senha === "paulo123"){
            this.setState({redirectTo : "A3cNS8wFc5gdh5GW5Sd50"});
            invalido = false;
        }

        if(email === "cleuber" && senha === "cleuber123"){
            this.setState({redirectTo : "k8cSC8asxNsgd9SB4Sc13"});
            invalido = false;
        }

        if(email === "gabriela" && senha === "gabriela123"){
            this.setState({redirectTo : "t7cSD5asxWsgd8SA4Sc21"});
            invalido = false;
        }

        if(email === "renata" && senha === "renata123"){
            this.setState({redirectTo : "j8bNS5wSxvgeH0wE8Dc22"});
            invalido = false;
        }

        if(email === "debora" && senha === "debora123"){
            this.setState({redirectTo : "A4cKD8wvCaGdh7QW5Sd45"});
            invalido = false;
        }

        if(email === "jeova" && senha === "jeova123"){
            this.setState({redirectTo : "d5bGS8Mwf5gdh7SD4Hc13"});
            invalido = false;
        }

        if(email === "matheus_inacio@gmail.com" && senha === "matheus123"){
            this.setState({redirectTo : "h8cMS4wNx9gdd8QE5Sc32"});
            invalido = false;
        }

        if(email === "luisa_camargo@gmail.com" && senha === "luisa123"){
            this.setState({redirectTo : "p2cGS5wDxCgdh8WQ6As28"});
            invalido = false;
        }

        if(email === "hatanoanderson@gmail.com" && senha === "anderson123"){
            this.setState({redirectTo : "l9bMS4wFxBgdh0QW5Sc01"});
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
                        <input class="input" type="email" placeholder="login"
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