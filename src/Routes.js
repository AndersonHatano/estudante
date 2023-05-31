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
import CarteiraLucasAnderson from './component/estudante/carteiraAnderson/CarteiraAnderson';
import CarteiraJapa from './component/estudante/carteiraJapa/CarteiraJapa';
import ValidadorJapa from './component/validador/ValidadorJapa';
import ValidadorThayna from './component/validador/ValidadorThayna';
import CarteiraThayna from './component/estudante/carteiraThayna/CarteiraThayna';
import ValidadorPaulo from './component/validador/ValidadorPaulo';
import CarteiraPaulo from './component/estudante/carteiraPaulo/CarteiraPaulo';
import CarteiraBim from './component/estudante/carteiraBim/CarteiraBim';
import ValidadorBim from './component/validador/ValidadorBim';
import CarteiraGabriela from './component/estudante/carteiraGabriela/CarteiraGabriela';
import ValidadorGabriela from './component/validador/ValidadorGabriela';
import CarteiraRenata from './component/estudante/carteiraRenata/CarteiraRenata';
import ValidadorRenata from './component/validador/ValidadorRenata';
import CarteiraDebora from './component/estudante/carteiraDebora/CarteiraDebora';
import ValidadorDebora from './component/validador/ValidadorDebora';
import CarteiraJeova from './component/estudante/carteiraJeova/CarteiraJeova';
import ValidadorJeova from './component/validador/ValidadorJeova';
import CarteiraInacio from './component/estudante/carteiraInacio/CarteiraInacio';
import ValidadorInacio from './component/validador/ValidadorInacio';
import CarteiraLuisa from './component/estudante/carteiraLuisa/CarteiraLuisa';
import ValidadorLuisa from './component/validador/ValidadorLuisa';
import CarteiraAnderson from './component/estudante/carteiraAnderson/CarteiraAnderson';
import ValidadorAnderson from './component/validador/ValidadorAnderson';
import CarteiraKarina from './component/estudante/carteiraKarina/CarteiraKarina';
import ValidadorKarina from './component/validador/ValidadorKarina';
import CarteiraSuzzane from './component/estudante/carteiraSuzzane/carteiraSuzzane';
import ValidadorSuzzane from './component/validador/ValidadorSuzzane';
import CarteiraKleuber from './component/estudante/carteiraKleuber/CarteiraKleuber';
import ValidadorKleuber from './component/validador/ValidadorKleuber';
import CarteiraEri from './component/estudante/carteiraEri/CarteiraEri';
import ValidadorEri from './component/validador/ValidadorEri';
import CarteiraRay from './component/estudante/carteiraRay/carteiraRay';
import ValidadorRay from './component/validador/ValidadorRay';

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

          <Route exact path="/w7dSS5wSzBfeI7Wv8dS31">
              <CarteiraEri></CarteiraEri>
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

          <Route exact path="/validacao/5f733034-7571-44e6-81f5-4b62374eb848">
              <ValidadorPaulo></ValidadorPaulo>
          </Route>

          <Route exact path="/validacao/90934ce2-fbd3-46e2-8398-d983dd6b7642">
              <ValidadorBim></ValidadorBim>
          </Route>

          <Route exact path="/validacao/7ae98733-0847-4a58-80b5-a9db926d89b0">
              <ValidadorGabriela></ValidadorGabriela>
          </Route>

          <Route exact path="/validacao/54c450b9-b824-4c6a-ba9f-be38cd58d8cb">
              <ValidadorRenata></ValidadorRenata>
          </Route>

          <Route exact path="/validacao/33d6d6e3-91bb-4eeb-a5da-f88a0afea61b">
              <ValidadorDebora></ValidadorDebora>
          </Route>

          <Route exact path="/validacao/06832ef4-f903-463e-90c6-5a5654563c67">
              <ValidadorJeova></ValidadorJeova>
          </Route>

          <Route exact path="/validacao/cacc2cc4-df00-4047-8618-dd8615a9e290">
              <ValidadorInacio></ValidadorInacio>
          </Route>

          <Route exact path="/validacao/3adc7ca6-5898-4fd9-b3fd-82ff25209f06">
              <ValidadorLuisa></ValidadorLuisa>
          </Route>

          <Route exact path="/validacao/81567bc9-e54e-4784-b8b6-100ec6309722">
              <ValidadorAnderson></ValidadorAnderson>
          </Route>

          <Route exact path="/validacao/e5f081b8-8e41-4a81-bf8f-5fa95211a300">
              <ValidadorKarina></ValidadorKarina>
          </Route>

          <Route exact path="/validacao/49946c7c-0506-41f5-a035-4955b13e5c29">
              <ValidadorSuzzane></ValidadorSuzzane>
          </Route>

          <Route exact path="/validacao/aed93be9-0002-4117-b5fc-a333803f3e7c">
              <ValidadorKleuber></ValidadorKleuber>
          </Route>

          <Route exact path="/validacao/e13acdb8-d933-4b3f-b23e-65f2b75ac950">
              <ValidadorEri></ValidadorEri>
          </Route>

          <Route exact path="/validacao/84a98e76-685f-4bfa-802d-f81ecc3a2189">
              <ValidadorRay></ValidadorRay>
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


          <Route exact path="/A3cNS8wFc5gdh5GW5Sd50">
              <CarteiraPaulo></CarteiraPaulo>
          </Route>

          <Route exact path="/k8cSC8asxNsgd9SB4Sc13">
              <CarteiraBim></CarteiraBim>
          </Route>

          <Route exact path="/t7cSD5asxWsgd8SA4Sc21">
              <CarteiraGabriela></CarteiraGabriela>
          </Route>

          <Route exact path="/j8bNS5wSxvgeH0wE8Dc22">
              <CarteiraRenata></CarteiraRenata>
          </Route>

          <Route exact path="/A4cKD8wvCaGdh7QW5Sd45">
              <CarteiraDebora></CarteiraDebora>
          </Route>

          <Route exact path="/d5bGS8Mwf5gdh7SD4Hc13">
              <CarteiraJeova></CarteiraJeova>
          </Route>

          <Route exact path="/h8cMS4wNx9gdd8QE5Sc32">
              <CarteiraInacio></CarteiraInacio>
          </Route>

          <Route exact path="/p2cGS5wDxCgdh8WQ6As28">
              <CarteiraLuisa></CarteiraLuisa>
          </Route>

          <Route exact path="/l9bMS4wFxBgdh0QW5Sc01">
              <CarteiraAnderson></CarteiraAnderson>
          </Route>

          <Route exact path="/d8cFJ8wFcEklh8GN8Ad21">
              <CarteiraKarina></CarteiraKarina>
          </Route>

          <Route exact path="/l8dNS4wDfVwsa7WD8Ac22">
              <CarteiraSuzzane></CarteiraSuzzane>
          </Route>

          <Route exact path="/p8cNG6eACdFdh8FW6Dc87">
              <CarteiraKleuber></CarteiraKleuber>
          </Route>

          <Route exact path="/x2cFS6wVxSdhi7SM7Da97">
              <CarteiraRay></CarteiraRay>
          </Route>

          <Route exact path="/login">
              <LoginEstudante></LoginEstudante>
          </Route>

        </Switch>    

    );

}

export default Routes;