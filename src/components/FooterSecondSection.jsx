import '../styles/FooterSecondSection.scss'
export const FooterSecondSection = () => {
    return (
        <section className="FooterSecondSection">
            <h2>
                LA HISTORIA CONTINÚA...
            </h2>
            <p>SUSCRÍBETE Y ENTÉRATE DE LANZAMIENTOS EXCLUSIVOS, NUEVAS COLECCIONES Y DESCUENTOS ESPECIALES. ¡Recibe 15% OFF EN TU PRIMERA COMPRA!</p>
            <form>
                <div className='top'>
                    <div>
                        <label htmlFor="name" >
                            Nombres y apellidos
                        </label>
                        <input id="name" type="text" />
                    </div>
                    <div>
                        <label htmlFor="email" >
                            Correo electrónico
                        </label>
                        <input id="email" type="email" />
                    </div>
                    <div>

                        <label htmlFor="phone" >
                            Celular
                        </label>
                        <input id="phone" type="text" />
                    </div>
                    <div>
                        <label htmlFor="document" >
                            Número de documento
                        </label>
                        <input id="document" type="text" />
                    </div>
                </div>
                <div className='mid'>
                    <p>Te interesa productos para</p>
                    <input id="women" type="checkbox" />
                    <label htmlFor="women">Mujer</label>
                    <input id="men" type="checkbox" />
                    <label htmlFor="men">Hombre</label>
                </div>
                <div className='bottom'>
                    <div>

                        <input id="terms" type="checkbox" />
                        <label htmlFor="terms">Aceptas <a href="">Tratamiento de Datos Personales</a> y <a href="">Términos y Condiciones</a></label>

                    </div>
                    <button>
                        SUSCRIBIRME
                    </button>

                </div>

            </form>
        </section>
    )
}
