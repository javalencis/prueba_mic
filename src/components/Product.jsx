import { ProductDetails } from "./ProductDetails"
import { ProductGallery } from "./ProductGallery"
import product from "../data/product"
import '../styles/Product.scss'
import { useState } from "react"
import { LayoutModal } from "../containers/LayoutModal"
import { ModalGuideSizes } from "./ModalGuideSizes"
export const Product = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <section className="Product">
        <div className="ProductLeft">
        <p className="ProductRoute">Movies / Hombre / Chaquetas y Buzos /<span> Chaqueta de la Nasa multicolor con cierre para hombre</span></p>
            <ProductGallery 
              images={product.images} 
              thumbnailImage={product.thumbnailImage}/>
        </div>
        <ProductDetails product={product} openModal={setIsOpenModal}/>
        {isOpenModal && (

         <LayoutModal openModal={setIsOpenModal}>
            <ModalGuideSizes img={product.sizeguide} openModal={setIsOpenModal}/>
         </LayoutModal> 
        )}
    </section>
  )
}
