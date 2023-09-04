import React, { useState } from "react";

function Todoinputbox({addtodofn}){

    const [todo,setTodo] = useState("");

    function Texttodo(e){
       setTodo(e.target.value);
    }
    function Handleclick(){
        addtodofn(todo);
        document.getElementById("input_box").value = "";
    }
    return(<div>
        <input id="input_box" onChange={Texttodo} type="text" placeholder="Enter Your Todo Item"/>
        <button onClick={Handleclick} disabled={todo===""}>Add Todo</button>
    </div>)
}

export default Todoinputbox;