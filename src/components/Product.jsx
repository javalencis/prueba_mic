import { ProductDetails } from "./ProductDetails"
import { ProductGallery } from "./ProductGallery"
import product from "../data/product"
import '../styles/Product.scss'
export const Product = () => {

  return (
    <section className="Product">
        <div className="ProductLeft">
            <ProductGallery/>
        </div>
        <ProductDetails product={product}/>
    </section>
  )
}
