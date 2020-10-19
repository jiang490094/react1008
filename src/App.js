import React, { useState, useEffect } from 'react'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import TodoAppPage from './pages/TodoAppPage'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <TodoAppPage todos={todos} setTodos={setTodos} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product/:id?">
              <Product />
            </Route>
            {/* 404找不到網頁，需要放在switch路由表最後一個 */}
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
