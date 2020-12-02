import React from 'react'

export default function Transaction(props) {
    return (
        <div>
            <li className={props.transaction.amount<0? 'minus' : 'plus'}>
            {props.transaction.text} <span>{props.transaction.amount}</span><button className="delete-btn">x</button>
                    </li>
        </div>
    )
}
