import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext';

const Transactions = ({transaction}) => {
    const sign=transaction.amount<0?'-':'+'
    const {deleteTransaction}=useContext(GlobalContext);
    
  return (
    <div className='inline'>

    <ul>           <button onClick={()=>deleteTransaction(transaction.id)} className='deleteButton'>x</button>

    <li 
    className={`transactions ${sign==='-'?'minus':'positive'}`}
>
        <span>{transaction.text}</span>
        <div className='sign-container'>
        <span className='signs'>{sign} ${Math.abs(transaction.amount)}</span>
        </div>
    </li>

    </ul>

</div>
  )
}

export default Transactions