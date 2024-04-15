import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../Context/AppContext'

const ExpenseList = () => {
 
    const { expense }  = useContext(AppContext);
 
  return (
    <ul className='list-group'>
        {expense?.map((expense)=>(
            <ExpenseItem 
            key={expense.id}
            id={expense.id}
             name={expense.name} 
             cost={expense.cost}/>
        ))}
    </ul>
  )
}

export default ExpenseList;