import React, { Component } from "react";

class AddUser extends Component {

    constructor(props){
        super(props);

        this.state ={
            id: null,
            nome: "",
            cpf: "",
            dataNascimento: "",
            email: "",
            senha: "",
            celular: "",
            prestador: true
        };
    }

    create(e){
        // add entity - POST
        e.preventDefault();
    
        // creates entity
        fetch("http://localhost:8080/usuario", {
          "mode": "no-cors",
          "method": "POST",
          "headers": {
            "content-type": "application/json",
            "accept": "application/json"
          },
          "body": JSON.stringify({
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            cpf: this.state.cpf,
            dataNascimento: this.state.dataNascimento,
            celular: this.state.celular,
            prestador: this.state.prestador
          })
        })
        .then(response => response.json())
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err);
        });
      }

    handleChange(changeObject) {
        this.setState(changeObject)
    }

    render(){
        return (
            <div class="column is-three-fifths is-offset-one-fifth ">
                <form class="box">
    
                
                    <img src="../cadaster/logo.png" alt='logo'/>
    
                    <div class="field">
                        <label class="label">Nome</label>
                        <div class="control">
                        <input class="input" type="text" placeholder="Nome" 
                        value={this.state.nome}
                        onChange={(e) => this.handleChange({nome: e.target.value})}/>
                        </div>
                    </div>
    
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                        <input class="input" type="email" placeholder="e.g. alex@example.com"
                        value={this.state.email}
                        onChange={(e) => this.handleChange({email: e.target.value})}/>
                        </div>
                    </div>
    
                    <div class="field">
                        <label class="label">Data de Nascimento</label>
                        <div class="control">
                        <input class="input" type="date" placeholder="01/01/1990"
                        value={this.state.dataNascimento}
                        onChange={(e) => this.handleChange({dataNascimento: e.target.value})}/>
                        </div>
                    </div>
    
                    <div class="field">
                        <label class="label">CPF</label>
                        <div class="control">
                        <input class="input" type="text" placeholder="CPF"
                        value={this.state.cpf}
                        onChange={(e) => this.handleChange({cpf: e.target.value})}/>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Celular</label>
                        <div class="control">
                        <input class="input" type="text" placeholder="celular"
                        value={this.state.celular}
                        onChange={(e) => this.handleChange({celular: e.target.value})}/>
                        </div>
                    </div>

                    
                    <div class="field">
                        <label class="checkbox">Prestador?</label>
                        <div class="control">
                        <input type="checkbox"
                        value={this.state.prestador}
                        onChange={(e) => this.handleChange({prestador: e.target.value})}/>
                        </div>
                    </div>
    
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                        <input class="input" type="password" placeholder="********"
                        value={this.state.senha}
                        onChange={(e) => this.handleChange({senha: e.target.value})}/>
                        </div>
                    </div>
    
                    <div class="field">
                        <label class="label">Confirmar senha</label>
                        <div class="control">
                        <input class="input" type="password" placeholder="********"/>
                        </div>
                    </div>
    
                    <button class="button is-primary"  onClick={(e) => this.create(e)}>Cadastrar</button>
                    </form>
            </div>
            );
    }

}


export default AddUser;