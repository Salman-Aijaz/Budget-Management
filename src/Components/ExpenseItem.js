import React, { useContext } from 'react'
import {TiDelete} from 'react-icons/ti'
import { AppContext } from '../Context/AppContext'

const ExpenseItem = (props) => {

    const {dispatch }=useContext(AppContext)
    const handledDeleteExpense =()=>{
      dispatch({
        type:"DELETE-EXPENSE",
        payload:props.id
      })
    }
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center mt-2'>
   {props.name}
   <div>
   <span className='btn btn-primary mr-5'>
   €{props.cost}
   </span>
   <TiDelete size='1.5em' onClick={handledDeleteExpense}></TiDelete>
   </div>
    </li>
  )
}

export default ExpenseItem  