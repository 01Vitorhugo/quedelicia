import './contato.css'
import Imagebackground from '../../imagens/PageContato/background.png'
import icon from '../../imagens/PageContato/icon.png'





export default function Contato() {

    function teste(){
        alert('Testeeee')

    }

    return (
        <section className='contato'>
            <section className='banner-contato'>
                <div className='icon'>
                    <img src={icon} alt="icone contato" />
                    <h1>Fale Conosco</h1>
                    <p>Dúvidas, sugestões, elogios ou críticas.</p>
                    <p>Sua opinião é muito importante para nós.</p>
                </div>

                <div className='image-background'>
                    <img src={Imagebackground} alt="image contato" />
                </div>
            </section>

            <section className='formulario'>
                <h1>Envie uma mensagem</h1>

                <form action="">
                    <div className='assunto'>
                        <label for="assunto">Assunto:</label>
                        <select id="assunto" >
                            <option>Escolha um assunto</option>
                            <option value="Teste">Teste</option>
                            <option value="Teste">Teste</option>
                            <option value="Teste">Teste</option>
                            <option value="Teste">Teste</option>
                        </select>
                    </div>

                    <div className='name'>
                        <label for="name">Nome:</label>
                        <input type="text" />
                    </div>

                    <div className='boxEmailAndNumberPhone'>
                        <div className='email'>
                            <label for="name">E-mail:</label>
                            <input type="email" />
                        </div>

                        <div className='numberPhone'>
                            <label for="name">Telefone:</label>
                            <input type="email" />

                        </div>
                    </div>


                    <div className='boxCityAndState'>
                        <div className='city'>
                            <label for="city">Cidade:</label>
                            <input type="text" />
                        </div>

                        <div className='state'>
                            <label for="state">Estado:</label>
                            <input type="text" />

                        </div>
                    </div>

                    <div className='boxMessage'>
                        <label for="mensagem">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem" rows="4" cols="50" placeholder="Digite sua mensagem aqui..."></textarea>
                    </div>

                    <button onClick={teste}>Enviar</button>

                </form>

            </section>


        </section>
    )
}