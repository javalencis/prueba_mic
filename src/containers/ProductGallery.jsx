import { SlideHorizontal } from "../components/SlideHorizontal"
import '../styles/ProductGallery.scss'
import { SlideSmall } from "../components/SlideSmall"
import { useState } from "react"
import { ListDots } from "../components/ListDots"
export const ProductGallery = ({ images,thumbnailImage }) => {
    const [imgClicked, setImgClicked] = useState(0)
    const [imgCurrent, setImgCurrent] = useState(0)

    return (
        <section className="ProductGallery">
            <SlideSmall 
                images={thumbnailImage} 
                setImgClicked={setImgClicked}
              
            />
            <SlideHorizontal 
                images={images} 
                imgClicked={imgClicked}
                imgCurrent={imgCurrent}
                setImgCurrent={setImgCurrent}
                />
            <ListDots 
                images={images}
                imgCurrent={imgCurrent}
                setImgClicked={setImgClicked}
                />    

        </section>
    )
}
