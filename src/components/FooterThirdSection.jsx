import iFacebook from '../assets/icons/facebook.svg'
import iInstagram from '../assets/icons/instagram.svg'
import iEmail from '../assets/icons/email.png'
import iPhone from '../assets/icons/phone.png'
import iMap from '../assets/icons/mapblack.png'
import imgPay from '../assets/imgs/medios-de-pago-mic-footer.png'
import iconArrow from '../assets/icons/arrow.png'

import '../styles/FooterThirdSection.scss'
import { useEffect, useState } from 'react'
import { ToggleFooter } from './ToggleFooter'

export const FooterThirdSection = () => {


    return (
        <section className="FooterThirdSection">
            <div className="fts-img">
                <img src={imgPay} alt="" />
            </div>
            <div className="fts-info">
                <div className="top">
                    <h4>
                        SÍGUENOS
                    </h4>
                    <div className='networks'>
                        <img src={iFacebook} alt="" />
                        <img src={iInstagram} alt="" />
                    </div>
                    <h4>
                        CONTÁCTANOS
                    </h4>
                    <div className='contact'>
                        <img src={iEmail} alt="" />
                        <p>servicioalcliente@moviessshop.co</p>
                    </div>
                    <div className='contact'>
                        <img src={iPhone} alt="" className='phone'/>
                        <p>+57 300910 8311</p>
                    </div>
                    <div className='contact map'>
                        <img src={iMap} alt="" />
                        <p>NUESTRAS TIENDAS</p>
                    </div>
                </div>
                <div className="mid">
                    <ToggleFooter title="TE AYUDAMOS">
                        <a href="">Preguntas frecuentes</a>
                        <a href="">Garantía de productos</a>
                        <a href="">Cambios y devoluciones</a>
                        <a href="">Contáctanos</a>
                    </ToggleFooter>
                    <ToggleFooter title="INFORMACIÓN LEGAL">
                        <a href="">Términos y condiciones</a>
                        <a href="">Términos y condiciones <br /> recoge en tienda física</a>
                        <a href="">Modificar mi suscripción</a>
                        <a href="">Políticas de privacidad</a>
                        <a href="">Legales Campañas</a>
                        <a href="">Políticas de devoluciones</a>
                        <a href="">Superintendencia Industria <br /> y Comercio - SIC</a>
                        <a href="">Autorización tratamiento de<br /> datos</a>
                        <a href="">Transparencia y Ética</a>
                        <a href="">Empresarial</a>
                    </ToggleFooter>

                </div>
                <div className="bottom">
                    <ToggleFooter title="MI CUENTA">
                        <a href="">Iniciar sesión</a>
                        <a href="">Rastrea pedido</a>
                    </ToggleFooter>
                    <ToggleFooter title="ACERCA DE MOVIES">
                        <a href="">Nuestra historia</a>
                        <a href="">Trabaja con nosotros</a>
                    </ToggleFooter>
                    
                </div>
            </div>
        </section>
    )
}
