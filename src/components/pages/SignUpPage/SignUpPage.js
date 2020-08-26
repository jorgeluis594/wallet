/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useState, useEffect} from 'react';
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useUser } from "../../../contexts/user";
import { useHistory } from "react-router-dom";
import { registerUser } from "../../../services/usersServices";

import { 
    Header,
    LogoHeader,
    Img,
    TextContent,
    SingUpContainer,
    Label,
    FormGroup,
    FormInput,
    ErrorContainer,
    FormSignUp,
    Buttom,
    Footer,
    LinkSignIn
 } from "./SignUpPageStyles";

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

export default function SignUpPage(){

    const { setUser, user } = useUser();
    const [error,setError] = useState(null);
    const history = useHistory()

    useEffect(()=>{
        if(user) history.push("/transactions");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function handleSubmit(values, actions) {
        try {
            setUser(await registerUser(values));
            history.push("/transactions");
        } catch (error) {
            setError(error);
        }
    }

    return (
        <SingUpContainer>
            <Header>
                <LogoHeader>
                    <Img src={Logo}></Img>
                </LogoHeader>
            </Header>
            <TextContent>
            Hi! Welcome to Walletable 👋<br/>Signup to start enyoing your new money management super powers!
            </TextContent>

            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email("Email is not valid")
                        .required("Email is required"),
                    password: Yup.string()
                        .required("Password is required")
                        .min(6,"Password is not valid")
                        .max(40,"Password is not valid"),
                    firstName: Yup.string()
                        .required("First mame is required"),
                    lastName: Yup.string()
                        .required("Last name is required"),
                    phone: Yup.string()
                        .required("Phone is required")
                        .matches(/^[0-9]+$/, "Phone must be only numbers")
                        .min(9, 'Phone must have 9 digits')
                        .max(9, 'Phone must have 9 digits'),
                    confirmPassword: Yup.string()
                        .required("Must confirm password")
                        .oneOf([Yup.ref("password")], "Password must match")

                })}
                onSubmit={(values,actions) =>{handleSubmit(values, actions)}}
            >
                <FormSignUp>
                    <ErrorContainer style={{textAlign : "center"}}>{error?.message}</ErrorContainer>
                    <FormItem name={"firstName"} label={"First Name"} />
                    <FormItem name={"lastName"} label={"Last Name"} />
                    <FormItem name={"phone"} label={"Phone Number"} />
                    <FormItem name={"email"} label={"Email Address"} />
                    <FormItem name={"password"} label={"Password"} type="password"/>
                    <FormItem name={"confirmPassword"} label={"Confirm password"} type="password" />
                    <Buttom type="submit">SIGN UP NOW</Buttom>
                </FormSignUp>
            </Formik>

            <Footer>
                Already have an account? <LinkSignIn to="/signin">Signin</LinkSignIn>
            </Footer>

        </SingUpContainer>
    
    );
}