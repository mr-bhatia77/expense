import React from 'react'
import Navbar from './Navbar';
import Header from './/Header';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';

export default function Fullexpense() {
    return (
        <div>
            <Navbar></Navbar>
     <Header></Header>
     <Balance></Balance>
     <IncomeExpenses></IncomeExpenses>
     <TransactionList></TransactionList>
     <AddTransaction></AddTransaction>
        </div>
    )
}
