import React, { useContext,useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const AddTransaction = () => {
  const [Text,setText]=useState('')
  const [Amount,setAmount]=useState(0)
  const {addTransaction}=useContext(GlobalContext)

  const onsubmit =(e)=>{
    e.preventDefault()
    addTransaction({
      id:Math.floor(Math.random() * 100000000),
      text:Text,
      amount:+Amount
    })
    setText('')
    setAmount(0)
  }

  return (
    <div>
    <h4>Add New Transactions</h4>
    <hr className='transactionlistbreak'/>
    <form onSubmit={onsubmit}>
    <label className='spans'>Name</label>
    <input className='label-text' value={Text} type='text' onChange={(e)=>setText(e.target.value)}/>

    <label className='spans'>Amount <br/> (negative-expense, positive - income) </label>
    <input className='label-text' value={Amount} type='number' onChange={(e)=>setAmount(e.target.value)} defaultValue={0}/>

    <button className='addButton'>Add Transaction</button>
    </form>
    </div>
  )
}

export default AddTransaction