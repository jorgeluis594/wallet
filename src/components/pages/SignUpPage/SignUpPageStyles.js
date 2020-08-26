import styled from "@emotion/styled";
import { Field, Form } from "formik";
import {Link} from "react-router-dom"

export const SingUpContainer = styled.section`
    width: 442px;
    margin: 20px auto 0 auto;
`;

export const Header = styled.header`
    text-align: center;
`;

export const LogoHeader = styled.div`
    text-align: center;
    width: 170px;
    height: 39px;
    margin: 0 auto;
`;
export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
`;
export const TextContent = styled.p`
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: white;
    margin-top: 32px;
    line-height: 19px;
`;

export const Label = styled.label`
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    color: white;
`;

export const FormSignUp = styled(Form)`
    width: 284px;
    margin: 10px auto 14px auto;
`;

export const FormGroup = styled.div`
    width: 100%;
`;

export const FormInput = styled(Field)`
        width: 100%;
        margin: 6px 0;
        background-color: inherit;
        border: none;
        border-bottom: 1px solid white;
        color: white;
        font-size: 12px;
        outline: none;
        background-color: #434190;
`;

export const ErrorContainer = styled.div`
    width: 100%;
    height: 16px;
    color: #E53E3E;
    font-size: 12px;
`;

export const Buttom = styled.button`
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
    border-radius: 100px;
    padding: 7px 41px;
    margin: 18px auto;
    display: block;
    border: none;
    font-weight: 600;
    font-size: 14px;
    color: #1A202C;
    outline: none;
`;

export const Footer = styled.footer`
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    color: white;
`;
export const LinkSignIn = styled(Link)`
    color: #a3bffa;
    text-decoration: underline;
`;