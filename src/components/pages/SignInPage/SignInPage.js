/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useState, useEffect} from 'react';
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useUser } from "../../../contexts/user";
import { loginUser } from "../../../services/usersServices"
import { useHistory } from "react-router-dom";

import { 
    Header,
    LogoHeader,
    Img,
    TextContent,
    SingInContainer,
    Label,
    FormGroup,
    FormInput,
    ErrorContainer,
    FormSignIn,
    Buttom,
    Footer,
    LinkSignUp
} from "./SingInPageStyles";


import Logo from "../../../images/logo.png";




const FormLabel = ({children}) => <Label>{children}</Label>

function FormItem({name, label, type}) {
    return (
        <FormGroup>
            <FormLabel>{label}</FormLabel>
            <FormInput name={name} type={type || "text"} />
            <ErrorContainer>
                <ErrorMessage name={name}/>
            </ErrorContainer>
        </FormGroup>
    );
}

export default function SingInPage(){


    const { setUser, user } = useUser();
    const [error,setError] = useState(null);
    const history = useHistory()

    useEffect(()=>{
        if(user) history.push("/transactions");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function handleSubmit (values, actions) {
        try {
            setUser(await loginUser(values.email, values.password));
            history.push("/transactions");
        } catch (error) {
            setError(error);
        }
    }

    return(
        <SingInContainer>
            <Header>
                <LogoHeader>
                    <Img src={Logo}></Img>
                </LogoHeader>
            </Header>
            <TextContent>
                Hi! Welcome to Walletable 👋 <br/>Signin to start enyoing your new money management super powers!
            </TextContent>

            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email("Email is not valid")
                        .required("Email is required"),
                    password: Yup.string()
                        .required("Password is required")
                        .min(6,"Password is not valid")
                        .max(40,"Password is not valid")
                })}
                onSubmit={(values,actions) =>{handleSubmit(values, actions)}}
            >
                <FormSignIn>
                    <ErrorContainer style={{textAlign : "center"}}>{error?.message}</ErrorContainer>
                    <FormItem name={"email"} label={"Email Address"} />
                    <FormItem name={"password"} label={"Password"} type={"password"}/>
                    <Buttom type="submit">SIGN IN NOW</Buttom>
                </FormSignIn>
                
            </Formik>

            <Footer>
                Don’t have an account? <LinkSignUp to="/signup">Signup</LinkSignUp>
            </Footer>

        </SingInContainer>
    );
}