import { useParams } from "react-router-dom";
import { Cabecalho } from "../components/Estruturas/Cabecalho";
import { Rodape } from "../components/Estruturas/Rodape";
import { Corpo } from "../components/Estruturas/Corpo";
import { CorpoProjeto } from "../components/Estruturas/CorpoProjeto";
import { useEffect, useState } from "react";

type HomeProps = {
    novo: boolean
}

export function PageHome(props: HomeProps) {

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

    useEffect(() => {

    }, [])

    return (
        <>
            <Cabecalho projectName={(!prj ? 'Projetos' : prj)} />
            <main>
                {selectCorpo()}
            </main>
            <Rodape />
        </>
    )
}