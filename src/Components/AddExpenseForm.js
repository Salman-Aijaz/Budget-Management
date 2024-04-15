import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {

  const {dispatch}=useContext(AppContext)

  const [name,setName]=useState('')
  
  const[cost,setCost]=useState('')

  const onSubmit =(event)=>{
  event.preventDefault()
  // alert("name"+name+"Cost"+cost)

  const expense={
    id:uuidv4(),
    name:name,
    cost:Number(cost)
  };

  dispatch({
    type:"ADD-EXPENSE",
    payload:expense,
  })
  // console.log(expense)  //JO CHEEZ HM ADD KR RHE HAIN
  }
  return (
    <form onSubmit={onSubmit}>
        <div className='row'>
   <div className="col-sm">
  <label htmlFor="name">Name</label>
  <input type="text" 
  required="Required" 
  className='form-control'
   id='name'
   value={name}
   onChange={(event)=>setName(event.target.value)} />
   </div>
   <div className="col-sm">
    <label htmlFor="cost">Cost</label>
    <input type="text" 
    required="required"
     className='form-control' 
     id='cost' 
     value={cost}
     onChange={(event)=>setCost(event.target.value)}/>
   </div>
   <div className="col-sm ">
    <button type='submit' className='mt-4 btn btn-primary '>Save</button>
   </div>
        </div>
    </form>
  )
}

export default AddExpenseForm