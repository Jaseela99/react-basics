import React from 'react'

const TodoList = ({setTodos,todos}) => {
    const handleDelete = (todo) => {
        const newTodos = [...todos]
        const index = newTodos.indexOf(todo)
        newTodos.splice(index,1)
        setTodos(newTodos)
    }
  return (
      
    <ul>
        {todos.map((todo,index)=>{
            return <li key={index}>{todo}
            <button onClick={handleDelete}>X</button></li>
        })}

    </ul>
  )
}

export default TodoList