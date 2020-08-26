import React, {useState} from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'

import { 
    Container,
    Balance,
    ShowForm,
    FormContainer,
    FormGroup,
    FormLabel,
    FormInput,
    ErrorContainer,
    FormSelect,
    FormValidations,
    FormBottom,
    Cancel,
    Button,
 } from "./AddTransactionStyles";


 function FormItem({width ,name, label, type}) {
    return (
        <FormGroup width={width}>
            <FormLabel>{label}</FormLabel>
            <FormInput name={name} type={type || "text"} />
            <ErrorContainer>
                <ErrorMessage name={name}/>
            </ErrorContainer>
        </FormGroup>
    );
}

export default function AddTransaction({balance, pushTransaction}){
    const [showAdd, setShowAdd] = useState(false);

    if(!showAdd) {
        return(
        <Container>
            <Balance>Balance: S/ {balance}</Balance>
            <ShowForm onClick={()=>{setShowAdd(true)}}><i className="far fa-plus-square"></i> Add transaction</ShowForm>
        </Container>
        );
    }

    return(
        <Container>
            <Formik 
                initialValues={{
                    category: "",
                    payee: "",
                    date: "",
                    description: "",
                    amount: "",
                }}
                validationSchema={Yup.object({
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
                })}
                onSubmit={(values)=>{pushTransaction(values)}}
            >
                <FormValidations>
                    <FormContainer>
                        <FormGroup width="165px">
                            <FormLabel>Category</FormLabel>
                            <Field as={FormSelect} name="category">
                                <option value="">Select category</option>
                                <option value="food_and_drinks">Food and drinks</option>
                                <option value="services">Services</option>
                                <option value="transport">Transport</option>
                                <option value="shopping">Shoping</option>
                                <option value="housing">Housing</option>
                                <option value="others">Others</option>
                            </Field>
                            <ErrorContainer>
                                <ErrorMessage name="category"/>
                            </ErrorContainer>
                        </FormGroup>
                        <FormItem width="135px" label="Payee" name="payee"/>
                        <FormItem width="290px" label="Description" name="description" />
                        <FormItem width="161px" label="Date" name="date" type="date"/>
                        <FormItem width="77px" label="Amount" name="amount"/>
                    </FormContainer>
                    <FormBottom>
                        <Cancel type="button" onClick={()=>{setShowAdd(false)}}>Cancel</Cancel>
                        <Button type="submit">Save transaction</Button>
                    </FormBottom>
                </FormValidations>
            </Formik>
        </Container>
    );
}