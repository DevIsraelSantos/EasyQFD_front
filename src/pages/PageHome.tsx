import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// type PageHomeProbs = {
//     id?: string 
// }

export function PageHome() {

    //States
    const { prj } = useParams();

    const [projeto, setProjeto] = useState(!prj ? '' : prj);


    //Navegações
    let navigate = useNavigate()

    const runRota = (rota: string) => {

        const route = `/${rota}`;
        navigate(route)

    }

    //Eventos
    const btnSignOut = () => {
        alert('deslogou')
        runRota('')
    }


    return (
        <>
            <header>
                cabeçalho
            </header>
            <main>
                <div id="menu">
                    menu
                </div>
                <div id="corpo">
                    corpo
                </div>
            </main>
            <footer>
            </footer>
        </>
    )
}