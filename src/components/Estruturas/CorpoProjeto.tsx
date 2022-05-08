import { useNavigate } from "react-router-dom";

type CorpoProjetoProbs = {
    projeto: string
}

export function CorpoProjeto(probs:CorpoProjetoProbs) {

    //state

    //Navegações
    let navigate = useNavigate()

    const runRota = (rota: string) => {
        const route = `/${rota}`;
        navigate(route)
    }


    return (
        <div id="corpo">
            div corpo do Projeto {probs.projeto}
        </div>
    )

} 