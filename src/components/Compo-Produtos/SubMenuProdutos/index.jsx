import './subMenu.css'
import {Link} from "react-router-dom";


export default function SubMenu(){


    return(
       <nav className='subMenu'>
        <ul>
            <li><Link to='/produtos/aves' title='Aves'>Aves</Link></li>
            <li><Link to='/produtos/bovinos' title='Cortes bovinos'>Cortes bovinos</Link></li>
            <li><Link to='/produtos/suinos' title='Suinos'>Suinos</Link></li>
            <li><Link to='/produtos/frios' title='Frios e laticínios'>Frios e laticínios</Link></li>
            <li><Link to='/produtos/congelados' title='Congelados'>Congelados</Link></li>
            <li><Link to='/produtos/peixes' title='Peixes'>Peixes</Link></li>
            <li><Link to='/produtos/conservas' title='Conservas e secos'>Conservas e secos</Link></li>
            <li><Link to='/produtos/feijoada' title='Pertences de feijoada'>Pertences de feijoada</Link></li>
        </ul>

       </nav>
    )
}