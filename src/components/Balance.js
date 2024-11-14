import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Balance = () => {
  const {transactions} =useContext(GlobalContext)
  const amount=transactions.reduce((acc,curr)=> acc+=curr.amount,0).toFixed(2)
  
  return (
    <>
    <h4>Your Balance</h4>
  <h2>$ {amount}</h2>
  </>
  )
}

export default Balance