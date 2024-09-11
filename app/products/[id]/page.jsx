import ProductPage from "../../pages/ProductPage"

const page = ({params}) => {
  return (
    <ProductPage id={params.id}/>
  )
}

export default page