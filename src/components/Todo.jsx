import React,{useState} from 'react'
import {adatok} from '../data.js'
import ListGroup from 'react-bootstrap/ListGroup';


export const  Todo=()=> {
  const [newTodo,setNewTodo] =useState('')
  const [todos,setTodos] = useState(adatok)

  const handleAdd=()=> {
    //console.log('klikk',newTodo)
    setTodos([...todos,newTodo])
  }
  const handleDelete=(val)=> {
    console.log('törlés',val)
    const newArr=todos.filter(item=>item!=val)
    setTodos(newArr)
  }

  const handleDone=(obj) => {
    //console.log('áthúzás',obj.nextElementSibling)
    obj.nextElementSibling.classList.toggle('text-decoration-line-through')

  }

  console.log(todos)

  return (
    <div className='todo'>
        <h1 className='text-center'>My todos</h1>
        <form className="d-flex justify-content-evenly m-1">
          <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
          <i className='fa-regular fa-square-plus fa-3x text-success' onClick={handleAdd}></i>
          <i className="fa-solid fa-trash text-danger fa-3x" onClick={()=>setTodos([])}></i>
        </form>
        <ListGroup>
          {todos.map(item=>
            <ListGroup.Item key={item} className="d-flex justify-content-between">
              <i className="fa-solid fa-square-check text-success fa-2x" onClick={(e)=>handleDone(e.target)}></i>
              <span className="">{item}</span>
              <i className="fa-solid fa-trash text-danger fa-2x" id={item} onClick={(e)=>handleDelete(e.target.id)}></i>
            </ListGroup.Item>)}
        </ListGroup>
    </div> 
  )
}
