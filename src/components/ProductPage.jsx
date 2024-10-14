import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchProduct from '../hooks/useFetchProducts'
import { useState, useEffect } from 'react'

const ProductPage = () => {
  const params = useParams()
  const [dataProducts, setDataProducts] = useState()

  async function getData() {
    const data = await useFetchProduct(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
    setDataProducts(data)
    console.log(data)
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(dataProducts)
  if (!dataProducts) return null
  return (
    <div>
      <h2>{dataProducts.nome}</h2>
      {dataProducts.fotos.map((foto) => (
        <img src={foto.src} alt="" />
      ))}
      <p>R$ {dataProducts.preco}</p>
      <p>{dataProducts.descricao}</p>
    </div>
  )
}

export default ProductPage
