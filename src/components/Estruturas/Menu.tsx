import { useState } from "react"

type projeto = {
    name: string,
    hash: string
}

export function Menu() {

    const [widthMenu, setWidthMenu] = useState(0)
    const [openMenu, setOpenMenu] = useState('sidenav')

    const [userHash, setUserHash] = useState('devisrael')

    const [projetoSelecionado, setProjetoSelecionado] = useState('aaa');
    const [projetos, setProjetos] = useState([]);

    const alterarWidthMenu = () => {
        if (openMenu.search('open') >= 0) {
            setOpenMenu('sidenav')
        } else {
            setOpenMenu('sidenav open')
            loadProjetos();

        }
        return
    }

    const loadProjetos = () => {
        let prj1, prj2, prj3: projeto;
        prj1 = { name: 'Bolo', hash: 'aaa' }
        prj2 = { name: 'Café', hash: 'bbb' }
        prj3 = { name: 'Pão de queijo', hash: 'ccc' }
        let prjs:projeto[] = [prj1, prj2, prj3];

        setProjetos(prjs);
    };

    const idItem = (projeto: projeto) => {
        let id = 'prj-' + projeto.hash;

        if (projeto.hash == projetoSelecionado) {
            id = 'selected'
        }

        return id
    }

    const listItems = projetos.map((projeto) =>
        <a href={projeto.hash} id={idItem(projeto)}>{'> ' + projeto.name}</a>
    );

    return (
        <div id="Menu">
            <span id='btnMenu' onClick={alterarWidthMenu}>&#9776; </span>
            <div id="sideBar" className={openMenu} >
                <a onClick={alterarWidthMenu} className="closebtn" >&times;</a>
                <ul className="items">
                    {listItems}
                </ul>
            </div>
        </div>
    )
}