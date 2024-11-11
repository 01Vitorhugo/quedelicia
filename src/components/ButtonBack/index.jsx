import { useEffect, useState } from 'react'
import './button.css'

export default function ButtonBack() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [width]);

    if (width < 1025) {
        return (

            <div className='buttonBack'>
                <a href="javascript:history.back()" className="buttonBack">Voltar</a>
            </div>
        )
    }

}