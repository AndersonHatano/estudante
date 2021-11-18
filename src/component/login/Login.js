import '../login/logo.png'
import '../login/Login.css'

function Login(){

    return (
        <div class="column is-three-fifths is-offset-one-fifth ">
            <form class="box">

            
                <img src="../login/logo" alt='logo'/>

                <div class="field">
                    <label class="label">Nome</label>
                    <div class="control">
                    <input class="input" type="text" placeholder="Nome"/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                    <input class="input" type="email" placeholder="e.g. alex@example.com"/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Data de Nascimento</label>
                    <div class="control">
                    <input class="input" type="date" placeholder="01/01/1990"/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">CPF</label>
                    <div class="control">
                    <input class="input" type="texte" placeholder="CPF"/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                    <input class="input" type="password" placeholder="********"/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Confirmar senha</label>
                    <div class="control">
                    <input class="input" type="password" placeholder="********"/>
                    </div>
                </div>

                <button class="button is-primary">Cadastrar</button>
                </form>
        </div>
        );

}

export default Login;