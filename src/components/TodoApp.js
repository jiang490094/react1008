import React, { useState, useEffect } from 'react'

function TodoApp(props) {
  const [todoInput, setTodoInput] = useState('')
  const [todos, setTodos] = useState([
    { id: 1, text: '買iphone 12 pro max', completed: false },
    { id: 2, text: '學好react', completed: true },
    { id: 3, text: '心平氣和心平氣和(つ´ω`)つ(つ´ω`)つ', completed: false },
  ])

  const handleCompleted = (id) => {
    const newTodos = [...todos]

    const todoItemIndex = newTodos.findIndex((item) => item.id === id)

    if (todoItemIndex !== -1) {
      newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed

      setTodos(newTodos)
    }
  }

  return (
    <>
      <h1 className="mt-5">範例：待辨事項</h1>

      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={(e) => {
          if ((e.key = 'Enter' && e.target.value)) {
            const newItem = {
              id: +new Date(),
              text: e.target.value,
              completed: false,
            }
            // 建立新的陣列(合併原本的todos陣列中的值)
            const newTodos = [newItem, ...todos]

            // 設定todos狀態值
            setTodos(newTodos)

            // 清空輸入框
            setTodoInput('')
          }
        }}
      />
      <hr />
      <ul>
        {todos.map((item, index) =>
          item.completed ? (
            <li key={item.text}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCompleted(item.id)}
              />
              <del>{item.text}</del>
            </li>
          ) : (
            <li key={item.text}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCompleted(item.id)}
              />
              {item.text}
            </li>
          )
        )}
      </ul>
    </>
  )
}

export default TodoApp
