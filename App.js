import React,{useReducer, useState} from "react";
import './App.css';
const initialState={count:0}
const reducer = (state,action)=>{
  console.log(state,action)
  switch (action.type) {
    case 'DECREMENT':
        return {count:state.count-1}
    case 'INCREMENT':
        return {count:state.count+1}
    default:
        return state
  }
}
function Counter() {
 
    const [state,dispatch]= useReducer(reducer,initialState)
        return(
          <div>

            <button type="button" class="btn btn-outline-primary" onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
           <span className="span">{state.count}</span>
            <button type="button" class="btn btn-outline-danger"  onClick={()=>dispatch({type:'INCREMENT'})}>+</button>

          </div>
  );
}

export default Counter;
