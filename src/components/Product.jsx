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
            <ProductGallery/>
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
