import React from "react";

function Todolist({todolists, tooglefn,deletefun}){

function HandleClick(id){
    tooglefn(id);
}
function HandleClick1(id){
    deletefun(id);
}

return(<>
{todolists.map((el)=>{
    return <div key={el.id}>
           <h1>{el.text}</h1>
           <p>{el.status?"completed" : "pending"}</p>
           <button onClick={()=>HandleClick(el.id)}>Toogle</button>
           <button onClick={()=>HandleClick1(el.id)}>Delete</button>
    </div>
})}
</>)
}

export default Todolist;