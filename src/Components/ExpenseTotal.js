import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const ExpenseTotal = () => {

   const {expense}=useContext(AppContext)
  //  console.log(expense)  //ALL EXPENSES
   const totalExpense=expense.reduce((total,item)=>{
   return(
    total += item.cost
    );
   },0)

  return (
    <div className='alert alert-primary'>
        <span>
            SpentSoFar €{totalExpense}
            </span>
        </div>
  )
}

export default ExpenseTotal