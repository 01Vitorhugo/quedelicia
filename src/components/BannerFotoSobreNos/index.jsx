import './fotoSobreNos.css'
import teste from '../../imagens/teste.jpg'
import teste2 from '../../imagens/teste2.jpg'


export default function BannerFotoSobreNos(){

    return(
        <section className='bannerSobreNos'>
            <img src={teste} alt='teste' />
            <img src={teste2} alt='teste' />


        </section>
    )
}