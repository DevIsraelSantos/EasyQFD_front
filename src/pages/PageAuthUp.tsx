import { useNavigate } from "react-router-dom";

export function PageAuthUp() {

    //States

    //Navegações
    let navigate = useNavigate()
    const runRota = (rota: string) => {
        const route = `/${rota}`;
        navigate(route)

    }
    const runHome = () => {
        runRota('auth/in')
    }

    //Eventos
    const btnCancelar = () => {
        runHome()
    }
    const btnCadastrar = () => {
        alert('Cadastro Realizado')
        runHome()
    }

    return (
        <div id="login_page" >
            <div id="login_container" className="auth">
                <div id="login_title">
                    <label>Primeiro Acesso</label>
                </div>
                <div id="login_input">
                    <label id='login_label_email' className='labelLogin auth' >Email</label>
                    <input id='login_email' type="text" className='txtLogin auth' />

                    <label id='login_label_senha' className='labelLogin auth' >Senha</label>
                    <input id='login_email' type="text" className='txtLogin auth' />

                    <label id='login_label_senha2' className='labelLogin auth' >Confirmar Senha</label>
                    <input id='login_email' type="text" className='txtLogin auth' />
                </div>
                <div id="login_button">
                    <button id='login_btn_Cancelar' className='btnLogin' onClick={btnCancelar}>Cancelar</button>
                    <button id='login_btn_Enviar' className='btnLogin' onClick={btnCadastrar}>Cadastrar</button>
                </div>
            </div>
        </div>
    )
}