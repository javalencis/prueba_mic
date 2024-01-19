import { FooterFirstSection } from "../components/FooterFirstSection"
import '../styles/Footer.scss'
import { FooterSecondSection } from "../components/FooterSecondSection"
import { FooterThirdSection } from "../components/FooterThirdSection"
export const Footer = () => {
    return (
        <footer className="Footer">
            <FooterFirstSection/>
            <FooterSecondSection/>
            <FooterThirdSection/>
        </footer>
    )
}
