import { useNavigate } from "react-router-dom";

export function Corpo() {

    //state

    //Navegações
    let navigate = useNavigate()

    const runRota = (rota: string) => {
        const route = `/${rota}`;
        navigate(route)
    }


    return (
        <div id="corpo">
            div corpo home Projetos
        </div>
    )

} 