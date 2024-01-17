import { useEffect } from 'react';
import '../styles/Warning.scss'
export const Warning = ({ setWarning }) => {
    const handleVisibleWarning = () => {
        setWarning(false);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.className != "Warning") {
                handleVisibleWarning();
            }

        };
        const timeOut = setTimeout(() => {    
            document.addEventListener('click', handleClickOutside);
        }, 100);
        

        return () => {

            document.removeEventListener('click', handleClickOutside);
            clearTimeout(timeOut);

        };
    }, []);
    return (
        <div className="Warning" >
            Por favor, selecciona una opción de cada variación
        </div>
    )
}
