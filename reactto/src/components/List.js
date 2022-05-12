import React from 'react'

const List = (props) => {
  return (
    <div>

        <ul>
            {props.user.map((user,index)=>
                <li key={index}>{user.name}
                <button onClick={props.handleDelete} >Delete</button>
                 <button onClick={props.handleEdit} >Edit</button> 
                {user.name?(<input type="text" value={user.name} onChange={(e)=>props.setName(e.target.value)} />):null}
                </li>
                
            )
            }
        </ul>
    </div>
  )
}

export default List