"use client"

import ProductDetail from "../components/ProductDetails"
import { useState, useEffect } from "react"

const ProductPage = ({id}) => {
    const [product, setProduct] = useState({})
    useEffect( () => {
        fetch(`https://next-ecommerce-api.vercel.app/products/${id}`)
        .then(data=> data.json())
        .then(data => setProduct(data))
    }, [])
  return (
    <ProductDetail product={product}/>
  )
}

export default ProductPage