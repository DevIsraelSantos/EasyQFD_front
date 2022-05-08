import { useNavigate } from "react-router-dom";


export function Menu() {

    //state

    //Navegações
    let navigate = useNavigate()

    const runRota = (rota: string) => {
        const route = `/${rota}`;
        navigate(route)
    }

    return (
        <div id="menu">
            Div menu
        </div>
    )

} 