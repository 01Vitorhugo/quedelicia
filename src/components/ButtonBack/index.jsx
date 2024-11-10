import './button.css'

export default function ButtonBack(){

    return(
        <>
            <a href="javascript:history.back()" className="buttonBack">
               Voltar
            </a>
        </>
    )
}