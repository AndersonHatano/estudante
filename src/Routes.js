import React from 'react';
import { Switch, Route } from "react-router-dom";
import AddUser from './component/cadaster/cadaster';
import ServicoCadastro from './component/servico/servico'
import InsumoCadastro from './component/insumo/insumo'
import HorarioSalvar from './component/horario/horario'
import CarteiraLuquinha from './component/estudante/Carteiraluquinha';
import ValidadorLuquinha from './component/validador/ValidadorLuquinha';


/*import Cliente from './components/pages/Cliente';*/

export function Routes(){

    return (
        <Switch>
          <Route exact path="/cadastro">
              <AddUser></AddUser>
          </Route>

          <Route exact path="/servico">
              <ServicoCadastro></ServicoCadastro>
          </Route>

          <Route exact path="/insumo">
              <InsumoCadastro></InsumoCadastro>
          </Route>

          <Route exact path="/horario">
              <HorarioSalvar></HorarioSalvar>
          </Route>

          <Route exact path="/lucas">
              <CarteiraLuquinha></CarteiraLuquinha>
          </Route>

          <Route exact path="/validacao/d2dea299-6e4f-45d8-99c2-3d32dea8092a">
              <ValidadorLuquinha></ValidadorLuquinha>
          </Route>

        </Switch>    

    );

}

export default Routes;