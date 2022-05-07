import { useNavigate } from "react-router-dom";


export function PageHome() {

    //States


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
            header
        </header>
        <main>
            main
        </main>
        <footer>
            footer
        </footer>
        </>
    )
}