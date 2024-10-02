import './subMenu.css'
import {Link} from "react-router-dom";


export default function SubMenu(){


    return(
       <nav className='subMenu'>
        <ul>
            <li><Link to='produtos/aves'>Aves</Link></li>
            <li><Link to='produtos/bovinos'>Cortes bovinos</Link></li>
            <li><Link to='produtos/suinos'>Suinos</Link></li>
            <li><Link to='produtos/frios'>Frios e laticínios</Link></li>
            <li><Link to='produtos/congelados'>Congelados</Link></li>
            <li><Link to='produtos/peixes'>Peixes</Link></li>
            <li><Link to='produtos/conservas'>Conservas e secos</Link></li>
            <li><Link to='produtos/feijoada'>Pertences de feijoada</Link></li>
        </ul>

       </nav>
    )
}