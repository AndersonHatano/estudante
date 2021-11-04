import '../login/Login.css'

function Login(){

    return (
        <div class="column is-three-fifths is-offset-one-fifth ">
            <div class="box">
                <h5 class="subtitle is-5">Email</h5>
                <input class="input is-normal is-primary" type="text" placeholder="Email"/>
                <br/>
                <h5 class="subtitle is-5">Senha</h5>
                <input class="input is-normal is-primary" type="text" placeholder="Senha"/>
                
                <button class="button is-warning is-hovered">Entrar</button>

                <h6 class="subtitle is-6">Não tem conta? Crie sua conta</h6>
                <h6 class="subtitle is-6">Esqueci minha senha</h6>
            </div>
        </div>
        );

}

export default Login;