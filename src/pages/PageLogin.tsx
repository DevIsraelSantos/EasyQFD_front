import { useNavigate } from "react-router-dom";

export function  PageLogin(){

    let navigate = useNavigate()

    const runRota = (rota:string) => {
    
      const route = `/${rota}`;
      navigate(route)
      
    }

    const runSignIn = () => {
        runRota('auth/in')
    }
    const runSignUp = () => {
        runRota('auth/Up')
    }
    const runRst = () => {
        runRota('auth/rst')
    }
    

    return (
        <div id="login_page">
            <div id="login_image">
                
            </div>
            <div id="login_container">
                <div id="login_title">
                    <label>Easy QFD</label>
                </div>
                <div id="login_input">
                    <label>email</label>
                    <input type="text"/>
                    <label >Senha</label>
                    <input type="passworld" />
                    <a onClick={runRst}>Esqueci a senha</a>
                </div>
                <div id="login_button">
                    <button id='login_btn_signup' onClick={runSignUp}>Sign Up</button>
                    <button id='login_btn_signin' onClick={runSignIn}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}