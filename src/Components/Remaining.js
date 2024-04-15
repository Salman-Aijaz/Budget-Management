import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Remaining = () => {

  const {expense,budget}=useContext(AppContext)

  const totalExpense = expense.reduce((total,item)=>{
   return (total = total+item.cost);
  },0)
  const alertType= totalExpense>budget?'alert-danger':'alert-success';
  return (
    <div className={`alert ${alertType}`}>
        <span>Remaining: €{budget - totalExpense}</span>
            </div>
  )
}

export default Remaining