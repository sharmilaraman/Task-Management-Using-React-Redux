import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../Slices/UserSlices';
import './View.css';

const ViewUsers = () => {
     const userData=useSelector(state=>state.Users);
     const dispatch=useDispatch();
     function handleUsers(index){
          dispatch(deleteUser(index));

     }
  return (
    <div>
      <h1>View Users List</h1>
      {
          userData.map((user,index)=>{
               return(
                    <ul key={index}>
                       <h2>{user}</h2> 
                       <button id='deletebutton' onClick={()=>{
                         handleUsers(index)
                       }}>Delete</button>       
                    </ul>
               )
          })
      }
    </div>
  )
}

export default ViewUsers
