import iconArrow from '../assets/icons/arrow.png'
import { useEffect, useRef, useState } from 'react'
export const ToggleFooter = ({children,title}) => {
    const toggleRef = useRef(null);
    const [toggleInfo, setToggleInfo] = useState(false)
    const [openInfo, setOpenInfo] = useState(false)
    const handleToggleInfo = () => {
        setToggleInfo(v => !v)
        setOpenInfo(o => !o)
    }
    
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 640px)');
        if (mediaQuery.matches) {
            const toggle = toggleRef.current;
            toggle.addEventListener('click', handleToggleInfo);

            return () => {
                toggle.removeEventListener('click', handleToggleInfo);
            };
        }
    }, [])

    return (
        <div className='toggle-footer' ref={toggleRef}>
            <div className='title'>
                <h4>
                    {title}
                </h4>
                <img src={iconArrow} alt="Flecha indicativa" className={toggleInfo ? 'expanded' : ''} />
            </div>
            <div className={openInfo ? 'info expanded' : 'info collapse'}>
                {children}
            </div>
        </div>
    )
}
