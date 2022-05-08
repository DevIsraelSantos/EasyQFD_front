import { useParams } from "react-router-dom";
import { Cabecalho } from "../components/Estruturas/Cabecalho";
import { Menu } from "../components/Estruturas/Menu";
import { Rodape } from "../components/Estruturas/Rodape";
import { Corpo } from "../components/Estruturas/Corpo";
import { CorpoProjeto } from "../components/Estruturas/CorpoProjeto";

export function PageHome() {

    //States and Params
    const { prj } = useParams();

    //Eventos
    const selectCorpo = () => {        
        if (!prj) {
            return <Corpo />
        } else {
            return <CorpoProjeto projeto={prj}/>
        }
    }

    return (
        <>
            <Cabecalho />
            <main>
                <Menu />
                {selectCorpo()}
            </main>
            <Rodape/>
        </>
    )
}