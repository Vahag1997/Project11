"use client"
import dynamic from "next/dynamic"
import Loading from "../../../components/shared/Loading"
const ProductCarousel = dynamic(() => import("./ProductCarousel"), {
  loading: () => <Loading />,
  ssr: false,
})
 const ClientProductCarousel = ({ info, products = [] }) => {  
  return <ProductCarousel info={info} products={products} />
}
export default ClientProductCarousel