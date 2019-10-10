import React,{useState} from 'react';
import Form from './Form';
import List from './List';

const App=()=>{
  const[title,settitle]=useState([]);
  const additem=element=>{
    if(element.length===0){
      alert("Type somthing..")
    }else{
      settitle([...title,element])
      console.log(element);
    }
  }
  return(
    <div><Form additem={additem}/><List items={title}/></div>
  );
}
export default App;
