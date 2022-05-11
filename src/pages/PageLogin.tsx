import { useNavigate } from "react-router-dom";

export function PageLogin() {
    //States

    
    //Navegações
    let navigate = useNavigate()
    
    const runRota = (rota: string) => {
        
        const route = `/${rota}`;
        navigate(route)
        
    }
    
    //Eventos
    const btnSignIn = () => {
        runRota('home')
    }
    const btnSignUp = () => {
        runRota('auth/Up')
    }
    const btnRst = () => {
        runRota('auth/rst')
    }


    return (
        <div id="login_page">
            <div id="login_image">
                <div>
                    {/* Logo da ferramenta */}
                </div>
            </div>
            <div id="login_container">
                <div id="login_title">
                    <label>Easy QFD</label>
                </div>
                <div id="login_input">
                    <label id='login_label_email' className='labelLogin' >Email</label>
                    <input id='login_email' type="text" className='txtLogin' />
                    <label id='login_label_senha' className='labelLogin' >Senha</label>
                    <input type="password" id="login_senha" className='txtLogin' />
                    <a id='login_rst' onClick={btnRst}>Esqueci a senha</a>
                </div>
                <div id="login_button">
                    <button id='login_btn_signin' className='btnLogin' onClick={btnSignIn}>Login</button>
                    <button id='login_btn_signup' className='btnLogin' onClick={btnSignUp}>Cadastrar</button>
                </div>
            </div>
        </div>
    )
}