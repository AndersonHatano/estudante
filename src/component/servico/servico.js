import React, { Component } from "react";

class ServicoCadastro extends Component {

    constructor(props){
        super(props);

        this.state ={
            id: null,
            nome: "",
            valor: "",
            ativo: true,
            usuarioId: "",
        };
    }

    create(e){
        // add entity - POST
        e.preventDefault();
    
        // creates entity
        fetch("http://localhost:8080/servico", {
          "mode": "no-cors",
          "method": "POST",
          "headers": {
            "content-type": "application/json",
            "accept": "application/json"
          },
          "body": JSON.stringify({
            nome: this.state.nome,
            valor: this.state.valor,
            ativo: this.state.ativo,
            usuarioId: this.state.usuarioId
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
                        <label class="label">Valor</label>
                        <div class="control">
                        <input class="input" type="text" placeholder="00,00"
                        value={this.state.valor}
                        onChange={(e) => this.handleChange({valor: e.target.value})}/>
                        </div>
                    </div>
    
                    <div class="field">
                        <label class="label">Prestador</label>
                        <div class="control">
                        <input class="input" type="date" placeholder="01/01/1990"
                        value={this.state.usuarioId}
                        onChange={(e) => this.handleChange({usuarioId: e.target.value})}/>
                        </div>
                    </div>
                    
                    <div class="field">
                        <label class="checkbox">ativo?</label>
                        <div class="control">
                        <input type="checkbox"
                        value={this.state.ativo}
                        onChange={(e) => this.handleChange({ativo: e.target.value})}/>
                        </div>
                    </div>
    
                    <button class="button is-primary"  onClick={(e) => this.create(e)}>Cadastrar</button>
                    </form>
            </div>
            );
    }

}


export default ServicoCadastro;