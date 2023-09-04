import { useState } from 'react';
import './App.css';
import Todoinputbox from './components/inputbox.jsx';
import Todolist from './components/todolist';

function App() {
  const [todolist,setTodolist] = useState([]);
  function addtodo(item){
    console.log(item);
    let obj = {
      id : todolist.length+1,
      text : item,
      status : false
    }
    setTodolist([...todolist,obj]);
    console.log(todolist);
  }

  function toogle(id){

     let updatetodo = todolist.map((el)=>{
      if(el.id===id){
        return {...el,status:!el.status};
      }else{
        return el;
      }
     })
     setTodolist(updatetodo);
  }
  function deletetodo(id){
    let updatetodo = todolist.filter((el)=>{
      if(el.id!==id){
        return el;
      }
     })
     setTodolist(updatetodo);
  }

  return (
    <div className="App">
      <h1>TODO APP</h1>
      < Todoinputbox addtodofn = {addtodo} />
      < Todolist todolists = {todolist} tooglefn = {toogle} deletefun ={deletetodo}/>
    </div>
  );
}

export default App;
