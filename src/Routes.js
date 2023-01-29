import React from 'react';
import { Switch, Route } from "react-router-dom";
import AddUser from './component/cadaster/cadaster';
import ServicoCadastro from './component/servico/servico'
import InsumoCadastro from './component/insumo/insumo'
import HorarioSalvar from './component/horario/horario'
import CarteiraLuquinha from './component/estudante/carteiraLucasSantana/Carteiraluquinha';
import ValidadorLuquinha from './component/validador/ValidadorLuquinha';
import LoginEstudante from './component/login/LoginEstudante'
import CarteiraRicardo from './component/estudante/carteiraRicardo/CarteiraRicardo';
import ValidadorRicardo from './component/validador/ValidadorRicardo';
import ValidadorGabriel from './component/validador/ValidadorGabriel';
import CarteiraGabriel from './component/estudante/carteiraGabriel/CarteiraGabriel';
import ValidadorRafael from './component/validador/ValidadorRafael';
import CarteiraRafael from './component/estudante/carteiraRafael/CarteiraRafael';
import ValidadorLuana from './component/validador/ValidadorLuana';
import CarteiraLuana from './component/estudante/carteiraLuana/CarteiraLuana';
import CarteiraCecilia from './component/estudante/carteiraCecilia/CarteiraCecilia';
import ValidadorCecilia from './component/validador/ValidadorCecilia';
import CarteiraCalango from './component/estudante/carteiraCalango/CarteiraCalango';
import ValidadorCalango from './component/validador/ValidadorCalango';
import ValidadorMarcia from './component/validador/ValidadorMarcia';
import CarteiraMarcia from './component/estudante/carteiraMarcia/CarteiraMarcia';
import CarteiraLucasAnderson from './component/estudante/carteiraLucasAnderson/CarteiraLucasAnderson';
import CarteiraJapa from './component/estudante/carteiraJapa/CarteiraJapa';
import ValidadorJapa from './component/validador/ValidadorJapa';
import ValidadorThayna from './component/validador/ValidadorThayna';
import CarteiraThayna from './component/estudante/carteiraThayna/CarteiraThayna';

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

          <Route exact path="/validacao/f67b5b21-9ee0-48b9-9c7e-ce64de715ff8">
              <ValidadorRafael></ValidadorRafael>
          </Route>

          <Route exact path="/validacao/832bbbfb-1711-47dd-89c7-afae7c28afe4">
              <ValidadorLuana></ValidadorLuana>
          </Route>

          <Route exact path="/validacao/08745bfa-cca4-4e29-8047-62953f2552b8">
              <ValidadorCecilia></ValidadorCecilia>
          </Route>

          <Route exact path="/validacao/7d393205-12ea-49d1-bfdd-159373b87cce">
              <ValidadorCalango></ValidadorCalango>
          </Route>

          <Route exact path="/validacao/a08667d3-f5d1-4c07-8f16-8b7661464d19">
              <ValidadorMarcia></ValidadorMarcia>
          </Route>

          <Route exact path="/validacao/d9c2c800-ba8a-4b6d-bf1b-73664054a4df">
              <ValidadorJapa></ValidadorJapa>
          </Route>

          <Route exact path="/validacao/9c4998c2-1bc8-4776-bceb-0425938f4118">
              <ValidadorThayna></ValidadorThayna>
          </Route>

          <Route exact path="/l5dMY5nWpBhdh7YW5Sc01">
              <CarteiraGabriel></CarteiraGabriel>
          </Route>

          <Route exact path="/d8bNS5wXpAgdh7QW4Sq97">
              <CarteiraRafael></CarteiraRafael>
          </Route>

          <Route exact path="/j5bBD8wGxEgdh7QW5Sc65">
              <CarteiraLuana></CarteiraLuana>
          </Route>

          <Route exact path="/q5bDS4wSfBawh0GN5Tc34">
              <CarteiraCecilia></CarteiraCecilia>
          </Route>

          <Route exact path="/p7bFG5wFxFgdh8AW78a81">
              <CarteiraCalango></CarteiraCalango>
          </Route>

          <Route exact path="/h5bGS4962wqFxyBgdah0WW5Sc22">
              <CarteiraMarcia></CarteiraMarcia>
          </Route>

          <Route exact path="/1d00910d-5bf1-4aaa-a952-8d027c8ce60f">
              <CarteiraLucasAnderson></CarteiraLucasAnderson>
          </Route>

          <Route exact path="/s8bGS4VxBgdh0QW6Dc12">
              <CarteiraJapa></CarteiraJapa>
          </Route>

          <Route exact path="/l4bMS4wDxBgnh0QW8Sc05">
              <CarteiraThayna></CarteiraThayna>
          </Route>


          <Route exact path="/login">
              <LoginEstudante></LoginEstudante>
          </Route>

        </Switch>    

    );

}

export default Routes;