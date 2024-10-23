import './contato.css'
import Imagebackground from '../../imagens/PageContato/background.png'
import icon from '../../imagens/PageContato/icon.png'
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";





export default function Contato() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [message, setMessage] = useState('')
    const [selectOptionId, setSelectOptionId] = useState('')

    const handleChange = (event) => {
        const selectedId = event.target.selectedOptions[0].id;
        setSelectOptionId(selectedId);

    };

    if (selectOptionId === 'agregarVeiculo') {
        setSelectOptionId('Agregar veiculo')

    } if (selectOptionId === 'trabalheConosco') {
        setSelectOptionId('Trabalhe conosco')

    } if (selectOptionId === 'sejaRepresentante') {
        setSelectOptionId('Seja representante')

    } if (selectOptionId === 'cotacaoProdutos') {
        setSelectOptionId('Cotação de produtos ')

    } if (selectOptionId === 'outrosAssuntos') {
        setSelectOptionId('Outros assuntos ')

    } if (selectOptionId === 'escolhaAssunto') {
        setSelectOptionId('')
    }


    const enviarFormulario = (e) => {
        e.preventDefault();

        // Configurar EmailJS
        emailjs.send('emailQueDelicia', 'templateQueDelicia', {
            city: city,
            name: name,
            email: email,
            phone: phone,
            state: state,
            selectOptionId: selectOptionId,
            message: message

        }, 'TmaA6gPIBF0R4ZnGp')
            .then(() => {
                setName('');
                setMessage('');
                setCity('');
                setEmail('');
                setPhone('');
                setSelectOptionId('');
                setState('');

                toast.success("Email enviado com sucesso");
            })
            .catch(() => {
                toast.error("Email não enviado");
            });


    };



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
                    <img src={Imagebackground} alt="contato" />
                </div>
            </section>

            <section className='formulario'>
                <h1>Envie uma mensagem</h1>

                <form onSubmit={enviarFormulario}>
                    <div className='assunto'>
                        <label htmlFor="assunto">Assunto</label>
                        <select id="assunto" onChange={handleChange}>
                            <option id='escolhaAssunto' value='0' className='optionSelect'>Escolha um assunto</option>
                            <option id='agregarVeiculo' value='1'>Agregar veiculo</option>
                            <option id='trabalheConosco' value='2'>Trabalhe conosco</option>
                            <option id='sejaRepresentante' value='3'>Seja representante</option>
                            <option id='cotacaoProdutos' value='4'>Cotação de produtos</option>
                            <option id='outrosAssuntos' value='5'>Outros assuntos</option>
                        </select>
                    </div>

                    <div className='name'>
                        <label htmlFor="name">Nome</label>
                        <input type="text"
                            id='name'
                            name='name'
                            required
                            value={name}
                            onChange={e => setName(e.target.value)} />
                    </div>

                    <div className='boxEmailAndNumberPhone'>
                        <div className='email'>
                            <label htmlFor="email">E-mail</label>
                            <input type="email"
                                id='email'
                                name='email'
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)} />

                        </div>

                        <div className='numberPhone'>
                            <label htmlFor="number">Telefone</label>
                            <input type="number"
                                id='number'
                                required
                                name='phone'
                                value={phone}
                                onChange={e => setPhone(e.target.value)} />

                        </div>
                    </div>


                    <div className='boxCityAndState'>
                        <div className='city'>
                            <label htmlFor="city">Cidade</label>
                            <input type="text"
                                id='city'
                                required
                                name='city'
                                value={city}
                                onChange={e => setCity(e.target.value)} />
                        </div>


                        <div className='state'>
                            <label htmlFor="state">Estado</label>
                            <input type="text"
                                id='state'
                                required
                                value={state}
                                name='state'
                                onChange={e => setState(e.target.value)} />

                        </div>
                    </div>

                    <div className='boxMessage'>
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea id="mensagem"
                            name="mensagem"
                            rows="4"
                            cols="50"
                            placeholder="Digite sua mensagem aqui..." required
                            value={message}
                            onChange={e => setMessage(e.target.value)} />
                    </div>

                    {
                        (selectOptionId !== '' && name !== '' && email !== '' && phone !== '' && city !== '' && state !== '' && message !== '') ?
                            <button>Enviar</button> :
                            <button disabled>Enviar</button>
                    }


                </form>

            </section>


        </section>
    )
}