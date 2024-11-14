import React, { useContext } from 'react'
import Transactions from './Transactions'
import { GlobalContext } from '../context/GlobalContext'

const TransctionsList = () => {
  const {transactions}=useContext(GlobalContext)
  return (
    <div>
        <h4>History</h4>
        <hr className='transactionlistbreak'/>
        {
          transactions.map(transaction=>
            <Transactions key={transaction.id} transaction={transaction}/>
          )
        }

       
    </div>
  )
}

export default TransctionsList