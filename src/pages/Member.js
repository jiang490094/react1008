import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'

function Member(props) {
  const { isAuth } = props

  if (isAuth === false) return <Redirect to="/register" />

  return (
    <>
      <h1>Member</h1>
      <Breadcrumb />
      <h3>目前會員狀態：{isAuth ? '登入' : '登出'}</h3>
      <div class="container">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">帳號</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">姓名</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="button" class="btn btn-primary">
            修改
          </button>
        </form>
      </div>
    </>
  )
}

export default Member
