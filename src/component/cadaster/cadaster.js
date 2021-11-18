import React, { Component } from "react";

class AddUser extends Component {

    constructor(props){
        super(props);

        this.state ={
            id: null,
            name: "",
            cpf: "",
            dateBirth: "",
            email: "",
            password: ""
        };
    }

    create(e){
        // add entity - POST
        e.preventDefault();
    
        // creates entity
        fetch("http://localhost:8080/user", {
          "method": "POST",
          "headers": {
            "content-type": "application/json",
            "accept": "application/json"
          },
          "body": JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            cpf: this.state.cpf,
            dateBirth: this.state.dateBirth
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
                        value={this.state.name}
                        onChange={(e) => this.handleChange({name: e.target.value})}/>
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
                        value={this.state.dateBirth}
                        onChange={(e) => this.handleChange({dateBirth: e.target.value})}/>
                        </div>
                    </div>
    
                    <div class="field">
                        <label class="label">CPF</label>
                        <div class="control">
                        <input class="input" type="texte" placeholder="CPF"
                        value={this.state.cpf}
                        onChange={(e) => this.handleChange({cpf: e.target.value})}/>
                        </div>
                    </div>
    
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                        <input class="input" type="password" placeholder="********"
                        value={this.state.password}
                        onChange={(e) => this.handleChange({password: e.target.value})}/>
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