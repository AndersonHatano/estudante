import React, { Component } from "react";

class HorarioSalvar extends Component {

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
        fetch("http://localhost:8080/horario", {
          "mode": "no-cors",
          "method": "POST",
          "headers": {
            "content-type": "application/json",
            "accept": "application/json"
          },
          "body": JSON.stringify({
            horario: this.state.horario,
            clientId: this.state.clientId,
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
                        <label class="label">horario</label>
                        <div class="control">
                        <input class="input" type="text" placeholder="Horario" 
                        value={this.state.horario}
                        onChange={(e) => this.handleChange({horario: e.target.value})}/>
                        </div>
                    </div>
    
                    <div class="field">
                        <label class="label">Cliente</label>
                        <div class="control">
                        <input class="input" type="text" placeholder="00,00"
                        value={this.state.clientId}
                        onChange={(e) => this.handleChange({clientId: e.target.value})}/>
                        </div>
                    </div>
    
                    <div class="field">
                        <label class="label">Serviço</label>
                        <div class="control">
                        <input class="input" type="date" placeholder="servico"
                        value={this.state.servicoId}
                        onChange={(e) => this.handleChange({servicoId: e.target.value})}/>
                        </div>
                    </div>
                
    
                    <button class="button is-primary"  onClick={(e) => this.create(e)}>Agendar</button>
                    </form>
            </div>
            );
    }

}
export default HorarioSalvar;