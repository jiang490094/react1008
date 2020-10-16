import React, { useState, useEffect } from 'react'
import TodoAddForm from './todo/TodoAddForm'
import TodoList from './todo/TodoList'

function TodoApp(props) {
  const [todoInput, setTodoInput] = useState('')
  // 將每個待辨事項改為物件值
  // { id, text: string, completed: bool }
  const [todos, setTodos] = useState([
    { id: 1, text: '買iphone 12', completed: false },
    { id: 2, text: '學好react', completed: true },
    { id: 3, text: '心平氣和心平氣和(つ´ω`)つ(つ´ω`)つ', completed: false },
  ])

  // 利用id值尋找對應的item的索引值，然後改變completed值
  const handleCompleted = (id) => {
    // 先複製一個新的todos陣列
    const newTodos = [...todos]

    // 利用id值尋找對應的item的索引值
    const todoItemIndex = newTodos.findIndex((item) => item.id === id)

    // 如果尋找到的索引值不是-1時，代表有找到索引值
    if (todoItemIndex !== -1) {
      // 布林值 true變false，false變true
      newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed

      // 設定回原本的todos
      setTodos(newTodos)
    }
  }

  // 利用id值尋找對應的item的索引值，然後移出陣列
  const handleDelete = (id) => {
    //建立一個新的陣列，其中"不包含要被移除的項目(用filter)
    const newTodos = todos.filter((item, index) => item.id !== id)

    // 設定回原本的todos
    setTodos(newTodos)
  }

  return (
    <>
      <h1 className="mt-5">範例：待辨事項</h1>
      <TodoAddForm
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        todos={todos}
        setTodos={setTodos}
      />
      <hr />
      <TodoList
        todos={todos}
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
      />
    </>
  )
}

export default TodoApp
