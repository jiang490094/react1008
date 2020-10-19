import React, { useState, useEffect } from 'react'
import { withRouter, useHistory } from 'react-router-dom'

function NotFoundPage(props) {
  return (
    <>
      <h1>頁面不存在</h1>
      <button
        onClick={() => {
          props.history.push('/product')
        }}
      >
        到產品頁
      </button>
      <hr />
      <button
        onClick={() => {
          props.history.goBack()
        }}
      >
        到上一頁
      </button>
    </>
  )
}

export default withRouter(NotFoundPage)
