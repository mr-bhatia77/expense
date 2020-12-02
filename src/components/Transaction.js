
import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Transaction(props) {
    const {deleteTransaction} = useContext(GlobalContext)
    return (
        <div>
            <li className={props.transaction.amount<0? 'minus' : 'plus'}>
            {props.transaction.text} <span>{props.transaction.amount}</span>
            <button onClick={()=>deleteTransaction(props.transaction.id)} className="delete-btn">x</button>
                    </li>
        </div>
    )
}
