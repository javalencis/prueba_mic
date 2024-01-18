import iSecure from '../assets/icons/secure-payments.svg'
import iShipping from '../assets/icons/country-shipping.svg'
import iSupport from '../assets/icons/client-support.svg'
import iReturn from '../assets/icons/product-return.svg'
import iFollowing from '../assets/icons/package-following.svg'
import '../styles/FooterFirstSection.scss'
export const FooterFirstSection = () => {
    return (
        <section className="FooterFirstSection">
            <div className="items">
                <div>

                    <img src={iSecure} alt="" />

                    <p>Pagos <br /><strong>seguros</strong></p>
                </div>
            </div>
            <div className="items p">
                <div>
                    <img src={iShipping} alt="" />
                    <p>Envíos a <strong>todo <br /> el país</strong></p>
                </div>
            </div>
            <div className="items p">
                <div>
                    <img src={iSupport} alt="" />
                    <p>Atención al  <br /> cliente</p>
                </div>
            </div>
            <div className="items p">
                <div>
                    <img src={iReturn} alt="" />
                    <p>Devoluciones  <br /><strong>gratuitas</strong></p>
                </div>
            </div>
            <div className="items p">
                <div>
                    <img src={iFollowing} alt="" />
                    <p><strong>Seguimiento <br /></strong> de pedido</p>
                </div>
            </div>

        </section>
    )
}
