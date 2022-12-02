import React from 'react';
import { Switch, Route } from "react-router-dom";
import AddUser from './component/cadaster/cadaster';
import ServicoCadastro from './component/servico/servico'
import InsumoCadastro from './component/insumo/insumo'
import HorarioSalvar from './component/horario/horario'
import CarteiraLuquinha from './component/estudante/Carteiraluquinha';
import ValidadorLuquinha from './component/validador/ValidadorLuquinha';
import LoginEstudante from './component/login/LoginEstudante'
import CarteiraRicardo from './component/estudante/CarteiraRicardo';
import ValidadorRicardo from './component/validador/ValidadorRicardo';
import ValidadorGabriel from './component/validador/ValidadorGabriel';
import CarteiraGabriel from './component/estudante/CarteiraGabriel';


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

          <Route exact path="/l8bNS5wFxBgdh0QW5Sc02">
              <CarteiraLuquinha></CarteiraLuquinha>
          </Route>

          <Route exact path="/P2bFT8wFxfgdg0QW8Sc04">
              <CarteiraRicardo></CarteiraRicardo>
          </Route>

          <Route exact path="/validacao/49ec6703-df3f-4036-94c7-b527cd3c1eb0">
              <ValidadorRicardo></ValidadorRicardo>
          </Route>

          <Route exact path="/validacao/d2dea299-6e4f-45d8-99c2-3d32dea8092a">
              <ValidadorLuquinha></ValidadorLuquinha>
          </Route>

          <Route exact path="/validacao/3052eeb2-9a74-48ae-bc90-a2a344b78b07">
              <ValidadorGabriel></ValidadorGabriel>
          </Route>

          <Route exact path="/l5dMY5nWpBhdh7YW5Sc01">
              <CarteiraGabriel></CarteiraGabriel>
          </Route>

          <Route exact path="/login">
              <LoginEstudante></LoginEstudante>
          </Route>

        </Switch>    

    );

}

export default Routes;