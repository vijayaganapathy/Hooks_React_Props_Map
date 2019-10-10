import React from 'react';
const List=(props)=>
 {
     return(<div>
         <ul>
             {
                 props.items.map(i=>{
                     return(
                         <li key={i}>{i}</li>
                     )
                 })
             }
         </ul>
     </div>)
// return(<div key={props.items}>
// {props.items}</div>)
 }
 export default List;
