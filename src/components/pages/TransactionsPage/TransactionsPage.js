/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useUser } from "../../../contexts/user";
import { listTransactions, addTransaction } from "../../../services/transactionsServices";
import TransactionDetail from '../../TransactionDetail/TransactionDetail'
import compareDesc from "date-fns/compareDesc";

import { TransactionsContainer} from "./TransactionsPageStyles";
import HeaderPage from "../../shared/Header";

 import MainContainer from '../../MainContainer/MainContainer'
 import AddTransaction from "../../AddTransaction/AddTransaction";

 function calculateBalance(transactions){
     return transactions?.reduce((balance,transaction) => balance + transaction.amount,0);
 }

export default function TransactionsPage() {
    const {user, setUser} = useUser();
    const [ transactions, setTransactions ] = useState(null);

    useEffect(()=>{
        async function loadTransactions(){
            try {
                const data = await listTransactions(user)
                setTransactions(data);
            } catch (error) {
                setUser(null);
            }
        }
        loadTransactions();
    },[]);

    async function addTransactionToList(transaction){
        try {
            const newTransaction = await addTransaction(user,transaction)
            const newTransactions = [...transactions, newTransaction]
            setTransactions(newTransactions.sort((a,b)=>compareDesc(new Date(a.date), new Date(b.date))));
        } catch (error) {
            setUser(null)
        }
    }
    return (
        <>
            <HeaderPage/>
            <MainContainer>
                <AddTransaction balance={calculateBalance(transactions)} pushTransaction={addTransactionToList}/>
                <TransactionsContainer>
                    {transactions 
                        ? transactions.map(transaction => <TransactionDetail 
                                                            transaction={transaction}
                                                            key={transaction.id}
                                                            />)
                        : null
                    }
                </TransactionsContainer>
            </MainContainer>
        </>
    )
}