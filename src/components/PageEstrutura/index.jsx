import './estrutura.css';
import ImagePhone from '../../imagens/estrutura/imgPhone.png'

export default function Estrutura() {

    return (
        <section className='estrutura'>

            <div className='box-estrutura'>
                <div className='imageCarroGrande' id='box-box1'>
                    <aside>Frota - Carros Grandes</aside>
                </div>

                <div className='imageFiorino' id='box-box1'>
                    <aside>Frota - Fiorinos</aside>
                </div>
            </div>

            <div className='box-estrutura'>
                <aside className='box-central'>
                    <h1>Estrutura</h1>
                    <p>Frotas - Câmaras Frigorificas</p>
                </aside>

                <figure>
                    <img src={ImagePhone} alt="Imagem telefone" />
                </figure>

            </div>
            <div className='box-estrutura'>
                <div className='imageCamara' id='box-box1'>
                    <aside>Câmara de Congelados</aside>
                </div>

                <div className='imageCamaraSeco' id='box-box1'>
                    <aside>Câmara de Seco</aside>
                </div>


            </div>

        </section>
    )
}