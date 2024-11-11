import './button.css'

export default function ButtonBack() {

    return (
        <div className='buttonBack'>
            <a href="javascript:history.back()" className="buttonBack">
                Voltar
            </a>
        </div>

    )
}