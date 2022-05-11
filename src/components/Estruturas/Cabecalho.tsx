import { useEffect, useState } from 'react'
import { CgOrganisation } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

type CabecalhoProbs = {
    projectName: string
}

export function Cabecalho(probs: CabecalhoProbs) {

    const [nomeTela, setNomeTela] = useState('');

    //Navegações
    let navigate = useNavigate()

    const runRota = (rota: string) => {
        const route = `/${rota}`;
        navigate(route)
    }

    const clickLogo = () => { runRota('home') }

    useEffect(() => {
        setNomeTela(probs.projectName)
    }, [])

    return (
        <header id='header_conteiner'>
            <div id="header_left" onClick={clickLogo}>
                <CgOrganisation />
            </div>
            <div id="header_center">
                <span>{nomeTela}</span>
            </div>
            <div id="header_right">
                <button id='btn_info'>?</button>
                <button id='btn_perfil' >IS</button>
            </div>
        </header>
    )

} 