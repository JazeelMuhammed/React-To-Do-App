
import './App.css';
import { useState } from 'react';


function App() {
  //setting up 2 states
  const [toDos,setTodos] = useState([]) //to know status of List of ToDos
  const [toDo,setTodo] = useState('')  //to know status of entering toDo.
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(event)=>setTodo(event.target.value)} type="text" placeholder="🖊️ Add item..." />

        {/* To add an item into a state of Arraay,we must
         first spread the items in that array and add
         the new items using update Function. */}    
        <i onClick={()=>setTodos([...toDos,{id:Date.now(), text: toDo, status: false}])} className="fas fa-plus"></i>
      </div>                  {/* Keeping toDo as an object */}
  
      <div className="todos">
      {
      // Created an anonymous arrow function with 
      // parameter 'value' indicates each 'toDo'.
        toDos.map((obj)=>{
        return(
          <div className="todo">
            <div className="left">
              <input onChange={(event)=>{
                console.log(event.target.checked)
                console.log(obj)
              }} value={obj.status} type="checkbox" name="" id="" />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i value={obj.text} onClick={(event)=>{
                setTodos(toDos.filter(obj3=>{
                  let temp
                  if(obj3.id !== obj.id){
                    temp = obj3;
                  }
                  return temp;
                }))
              }} className="fas fa-times"></i>
            </div>
          </div>
          )
         
        })
      }
      {
        toDos.map(obj=>{
          if(obj.status){
            return (<h1>{obj.text}</h1>)
          }
          return null
        })
      }
       
      
      </div>
    </div>
  );
}

export default App;
