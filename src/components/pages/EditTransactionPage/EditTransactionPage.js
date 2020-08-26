/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from "formik";
import format from 'date-fns/format'
import * as Yup from 'yup';

import { getTransaction, updateTransaction, destroyTransaction } from "../../../services/transactionsServices";
import { useUser } from "../../../contexts/user";

import ImgCategory from '../../shared/ImgCategory'
import MainContainer from '../../MainContainer/MainContainer'
import HeaderPage from '../../shared/Header'
import { 
    Container,
    ImgContainer,
    Form,
    FormGroup,
    FormLabel,
    FormInput,
    ErrorContainer,
    FormSelect,
    FormTextArea,
    FormBottom,
    ButtonDelete,
    ButtonSave
 } from "./EditTransactionPageStyles";



 function FormItem({name, label, formik,type}) {
    return (
        <FormGroup>
            <FormLabel>{label}</FormLabel>
            <FormInput name={name} type={type || "text"} {...formik.getFieldProps(name)}/>
            <ErrorContainer>
                {Error(formik, name)}
            </ErrorContainer>
        </FormGroup>
    );
}

function Error(formik,name){
    return formik.errors[name] && formik.touched[name] ? formik.errors[name] : null
}

export default function EditTransactionPage({match}){

    const {user, setUser} = useUser()
    const history = useHistory()
    const formik = useFormik({
        initialValues: {
            category: "",
            payee: "",
            description: "",
            date: "",
            amount: "",
        },
        validationSchema: Yup.object({
            category: Yup.string()
                        .required("Category is required"),
            payee: Yup.string()
                .required("Payee is required"),
            date: Yup.date()
                .max(new Date(), "Date must be in the past"),
            description: Yup.string(),
            amount: Yup.string()
                .required("Amount is required")
                .matches(/^-?[0-9]\d*(\.\d+)?$/, "Only number")
        }),
        onSubmit: (values)=>{editTranasction(values)}
    })

    async function editTranasction(values){
        try {
            await updateTransaction(user, match.params.id, values);
            history.push("/transactions");
        } catch (error) {
            setUser(null);
        }
    }

    async function deleteTransaction(){
        try {
            if(await destroyTransaction(user, match.params.id)) history.replace("/transactions")
        } catch (error) {
            setUser(null);
        }
    }
    useEffect(()=>{
        async function loadTransaction(){
            try {
                const transaction = await getTransaction(user, match.params.id);
                const date = new Date(transaction.date)
                formik.setValues({
                    category: transaction.category,
                    payee: transaction.payee,
                    description: transaction.description,
                    date: format(date, 'yyyy-MM-dd'),
                    amount: transaction.amount,
                })
            } catch (error) {
                setUser(null);
            }
        }
        loadTransaction();
    },[]);
return (
    <>
    <HeaderPage/>
    <MainContainer>
        <Container>
            <ImgContainer>
                {ImgCategory[formik.values.category]}
            </ImgContainer>
            <Form onSubmit={formik.handleSubmit}>
                <FormGroup>
                    <FormLabel>Category</FormLabel>
                    <FormSelect name="category" {...formik.getFieldProps("category")}>
                        <option value="">Select Category</option>
                        <option value="food_and_drinks">Food and drinks</option>
                        <option value="services">Services</option>
                        <option value="transport">Transport</option>
                        <option value="shopping">Shoping</option>
                        <option value="housing">Housing</option>
                        <option value="others">Others</option>
                    </FormSelect>
                    <ErrorContainer>{Error(formik, "category")}</ErrorContainer>
                </FormGroup>
                <FormItem name="payee" label="Payee" formik={formik}/>
                <FormGroup>
                    <FormLabel>Description</FormLabel>
                    <FormTextArea name="description" {...formik.getFieldProps("description")}/>
                    <ErrorContainer>{Error(formik, "description")}</ErrorContainer>
                </FormGroup>
                <FormItem name="date" label="Date" type="date" formik={formik}/>
                <FormItem name="amount" label="Amount" formik={formik}/>
                <FormBottom>
                    <ButtonDelete type="button" onClick={()=>{deleteTransaction()}}>Delete</ButtonDelete>
                    <ButtonSave type="submit"><i className="far fa-save"></i> Save</ButtonSave>
                </FormBottom>
            </Form>
        </Container>
    </MainContainer>
    </>
);
}