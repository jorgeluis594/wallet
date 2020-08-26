import React from 'react'
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'

import HeaderPage from '../../shared/Header'
import MainContainer from '../../MainContainer/MainContainer'
import Icons from "../../../images/Categories";
import { 
    Container,
    ImgContainer,
    FormGroup,
    FormLabel,
    FormInput,
    ErrorContainer
 } from "./ProfilePageStyles";


 function FormItem({name, label,type}) {
    return (
        <FormGroup>
            <FormLabel>{label}</FormLabel>
            <Field as={FormInput} name={name} type={type || "text"} />
            <ErrorContainer>
                <ErrorMessage name={name}/>
            </ErrorContainer>
        </FormGroup>
    );
}

export default function ProfilePage(){

    return (
        <>
            <HeaderPage/>
            <MainContainer>
                <Container>
                    <ImgContainer><Icons.ProfileIcon/></ImgContainer>
                    
                </Container>
            </MainContainer>
        </>
    );
}