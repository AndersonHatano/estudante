import React, { Component } from "react";

class InsumoCadastro extends Component {

    constructor(props){
        super(props);

        this.state ={
            id: null,
            nome: "",
            quantidade: 0,
            servicoId: ""
        };
    }

    create(e){
        // add entity - POST
        e.preventDefault();
    
        // creates entity
        fetch("http://localhost:8080/insumo", {
          "mode": "no-cors",
          "method": "POST",
          "headers": {
            "content-type": "application/json",
            "accept": "application/json"
          },
          "body": JSON.stringify({
            nome: this.state.nome,
            quantidade: this.state.quantidade,
            servicoId: this.state.servicoId
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
                        <label class="label">quantidade</label>
                        <div class="control">
                        <input class="input" type="text" placeholder="00,00"
                        value={this.state.quantidade}
                        onChange={(e) => this.handleChange({quantidade: e.target.value})}/>
                        </div>
                    </div>
    
                    <div class="field">
                        <label class="label">Serviço</label>
                        <div class="control">
                        <input class="input" type="date" placeholder="01/01/1990"
                        value={this.state.servicoId}
                        onChange={(e) => this.handleChange({servicoId: e.target.value})}/>
                        </div>
                    </div>
                
    
                    <button class="button is-primary"  onClick={(e) => this.create(e)}>Cadastrar</button>
                    </form>
            </div>
            );
    }

}
export default InsumoCadastro;