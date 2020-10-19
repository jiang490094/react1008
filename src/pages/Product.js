import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'

function Product(props) {
  const { isAuth } = props
  let { id } = useParams()

  console.log(props)

  if (isAuth === false) return <Redirect to="/register" />

  return (
    <>
      <h1>Product</h1>
      <Breadcrumb />
      <h3>目前會員狀態：{isAuth ? '登入' : '登出'}</h3>
      <h3>{id}</h3>
    </>
  )
}

export default Product
