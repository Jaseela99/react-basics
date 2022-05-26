import React from 'react'
import TodoList from './TodoList'

const Todo = () => {
    const [value,setValue]  = React.useState('')
    const [todos,setTodos] = React.useState([])
    const onChangeTodo =(e)=>{
        setValue(e.target.value)
    }
    const handleAdd =()=>{
        const newTodo = [...todos,value]
        setTodos(newTodo)
        setValue('')
    }
  return (
    <div>Todo
        <input type="text" onChange={onChangeTodo} value={value} placeholder="write todo"/>
        <button onClick={handleAdd}>Add Todo</button>
        <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default Todo