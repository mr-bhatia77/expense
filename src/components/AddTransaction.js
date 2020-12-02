import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
export default function AddTransaction() {
    const { addTransaction } = useContext(GlobalContext)
    const [text, setText] = useState('bharat')
    const [amount, setAmount] = useState(0)
    const newtran = {
        id:Math.random() * 1000,
        text:text,
        amount:+amount
    } 
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={(e)=> e.preventDefault()}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
            (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button onClick={() => addTransaction(newtran)} className="btn">Add transaction</button>
            </form>
        </>
    )
}
