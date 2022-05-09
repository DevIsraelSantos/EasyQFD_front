import { useParams } from "react-router-dom";
import { Cabecalho } from "../components/Estruturas/Cabecalho";
import { Menu } from "../components/Estruturas/Menu";
import { Rodape } from "../components/Estruturas/Rodape";
import { Corpo } from "../components/Estruturas/Corpo";
import { CorpoProjeto } from "../components/Estruturas/CorpoProjeto";
import { useState } from "react";

export function PageHome() {

    //States and Params
    const { prj } = useParams();
    const [projectName, setProjectName] = useState()

    //Eventos
    const selectCorpo = () => {
        if (!prj) {
            return <Corpo />
        } else {
            return <CorpoProjeto projeto={prj} />
        }
    }

    const contruirCabecalho = () => {

        let projeto = (!prj? 'Projetos':prj);
        console.table({projeto})
        return (
            <Cabecalho projectName={projeto} />
        )
    }

    return (
        <>
            {contruirCabecalho()}
            <main>
                <Menu />
                {selectCorpo()}
            </main>
            <Rodape />
        </>
    )
}