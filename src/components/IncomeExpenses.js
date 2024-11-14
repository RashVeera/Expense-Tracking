import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const IncomeExpenses = () => {
    const {transactions}=useContext(GlobalContext)
    const income=transactions.filter(transaction=>transaction.amount>0).reduce((acc,curr)=>acc+=curr.amount,0).toFixed(2);
    const expense=transactions.filter(transaction=>transaction.amount<0).reduce((acc,curr)=>acc+=curr.amount,0)*(-1.00).toFixed(2);

  return (
    <div>
        <div className='IEcontainer'>
            <div className='income'>
                <h4>INCOME</h4>
                <p >+$ {income}</p>
            </div>
            <div className='expense'>
                <h4>EXPENSE</h4>
                <p >-$ {expense}</p>
            </div>
        </div>
    </div>
  )
}

export default IncomeExpenses