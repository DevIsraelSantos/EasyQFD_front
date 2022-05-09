import { useEffect, useState } from 'react'
import logo from '../../files/logo1.png'

type CabecalhoProbs = {
    projectName: string
}

export function Cabecalho(probs: CabecalhoProbs) {

    const [telaName, setTelaName] = useState('');

    useEffect(() => {
        console.log(probs.projectName)
        setTelaName(probs.projectName)
    }, [])

    return (
        <header id='header_conteiner'>
            <div id="header_left">
                <img src={logo} alt="logo" />
            </div>
            <div id="header_center">
                <span>{telaName}</span>
            </div>
            <div id="header_right">
                <button id='btn_info'>?</button>
                <button id='btn_perfil' >IS</button>
            </div>
        </header>
    )

} 