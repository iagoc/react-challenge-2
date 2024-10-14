import React, { useEffect, useState } from 'react'
import useFetchProduct from '../hooks/useFetchProducts'
import { Link, NavLink } from 'react-router-dom'


const Products = () => {
  const [dataProducts, setdataProducts] = useState([])

  async function getData() {
    const data = await useFetchProduct('https://ranekapi.origamid.dev/json/api/produto')
    setdataProducts(data)
    console.log(data)
  }

  useEffect(() => {
    getData()
  }, [])

  if (dataProducts === null) return null
  return (
    <div className='product-idx'>
      {dataProducts.map((product) => (
        <div>
          <Link to={`/${product.id}`}><img src={product.fotos[0].src} alt="" /></Link>
          <p>{product.nome}</p>
        </div>
      ))
      }
    </div >
  )
}

export default Products
