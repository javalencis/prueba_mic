import { FooterFirstSection } from "./FooterFirstSection"
import '../styles/Footer.scss'
import { FooterSecondSection } from "./FooterSecondSection"
export const Footer = () => {
    return (
        <footer className="Footer">
            <FooterFirstSection/>
            <FooterSecondSection/>
            <section>
                inferior
            </section>
        </footer>
    )
}
