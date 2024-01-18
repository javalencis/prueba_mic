import { FooterFirstSection } from "./FooterFirstSection"
import '../styles/Footer.scss'
import { FooterSecondSection } from "./FooterSecondSection"
import { FooterThirdSection } from "./FooterThirdSection"
export const Footer = () => {
    return (
        <footer className="Footer">
            <FooterFirstSection/>
            <FooterSecondSection/>
            <FooterThirdSection/>
        </footer>
    )
}
