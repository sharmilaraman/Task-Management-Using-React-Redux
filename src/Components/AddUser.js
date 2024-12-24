import React, {useState} from 'react';
import { addUser } from '../Slices/UserSlices';
import {useDispatch} from 'react-redux';
import './Add.css';
 
const AddUser = () => {
     const[input,setInput]=useState('');
     const dispatch=useDispatch();
     function handleUser(){
          if(input){
     dispatch(addUser(input))
  }     
}
  return (
    <div>
      <h1>React Redux Component</h1>
      <input type='text' placeholder='Enter New User' value={input} onChange={(e)=>{setInput
          (e.target.value)}}></input>
          <br></br>
          <button onClick={handleUser} id='Addbutton'>Add New User</button>
    </div>
  )
}

export default AddUser
