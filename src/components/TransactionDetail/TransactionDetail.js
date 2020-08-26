import React from 'react';
import ImgCategory from '../shared/ImgCategory'
import { format, formatDistance} from 'date-fns'

import { 
    TransactionContainer,
    Title,
    TitleContainer,
    Amount,
    SubtitleContainer,
    Subtitle,
 } from "./TransactionDetailStyles";


 const CategoriesName = {
    food_and_drinks: "Food & Drinks",
    services: "Services",
    transport: "Transport",
    shopping: "Shopping",
    others: "Other",
    housing: "Housing"
 }
export default function TransactionDetail({transaction}){
    return(
        <TransactionContainer>
            {ImgCategory[transaction.category]}
            <TitleContainer><Title>{CategoriesName[transaction.category]}</Title></TitleContainer>
            <TitleContainer><Title>{transaction.payee}</Title></TitleContainer>
            <TitleContainer><Title>{transaction.description}</Title></TitleContainer>
            <TitleContainer><Title>{format(new Date(transaction.date),"LLL dd")}</Title></TitleContainer>
            <TitleContainer className="amount"><Amount>S/ {transaction.amount}</Amount></TitleContainer>
            <SubtitleContainer><Subtitle>Category</Subtitle></SubtitleContainer>
            <SubtitleContainer><Subtitle>Payee</Subtitle></SubtitleContainer>
            <SubtitleContainer><Subtitle>Description</Subtitle></SubtitleContainer>
            <SubtitleContainer><Subtitle>{formatDistance(new Date(transaction.date), new Date())}</Subtitle></SubtitleContainer>
        </TransactionContainer>
    );
}