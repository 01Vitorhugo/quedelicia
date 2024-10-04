import './subMenu.css'
import { Link } from "react-router-dom";
import ave from '../../../imagens/icons-produtos-submenu/ave.svg'
import bovino from '../../../imagens/icons-produtos-submenu/boi.svg'
import suino from '../../../imagens/icons-produtos-submenu/suinos.svg'
import frios from '../../../imagens/icons-produtos-submenu/frios e laticnios.svg'
import congelados from '../../../imagens/icons-produtos-submenu/congelados.svg'
import peixes from '../../../imagens/icons-produtos-submenu/peixes.svg'
import conservas from '../../../imagens/icons-produtos-submenu/conservas e secos.svg'
import feijoada from '../../../imagens/icons-produtos-submenu/pertences de feijoada.svg'


export default function SubMenu() {


    return (
        <nav className='subMenu'>
            <ul>
                <Link to='/produtos/aves' title='Aves'>
                    <li>
                        Aves
                        <img src={ave} alt="icone ave" />
                    </li>
                </Link>

                <Link to='/produtos/bovinos' title='Cortes bovinos'>
                    <li>
                        Cortes bovinos
                        <img src={bovino} alt="icone cortes bovinos" />
                    </li>
                </Link>

                <Link to='/produtos/suinos' title='Suinos'>
                    <li>
                        Suinos
                        <img src={suino} alt="icone suinos" />
                    </li>
                </Link>

                <Link to='/produtos/frios' title='Frios e laticínios'>
                    <li>
                        Frios e laticínios
                        <img src={frios} alt="icone frios e laticínios" />
                    </li>
                </Link>

                <Link to='/produtos/congelados' title='Congelados'>
                    <li>
                        Congelados
                        <img src={congelados} alt="icone congelados" />
                    </li>
                </Link>

                <Link to='/produtos/peixes' title='Peixes'>
                    <li>
                        Peixes
                        <img src={peixes} alt="icone peixes" />
                    </li>
                </Link>


                <Link to='/produtos/conservas' title='Conservas e secos'>
                    <li>
                        Conservas e secos
                        <img src={conservas} alt="icone conservas e secos" />
                    </li>
                </Link>

                <Link to='/produtos/feijoada' title='Pertences de feijoada'>
                    <li>
                        Pertences de feijoada
                        <img src={feijoada} alt="icone feijoada" />
                    </li>
                </Link>
            </ul>

        </nav>
    )
}