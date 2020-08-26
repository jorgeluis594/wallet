import styled from "@emotion/styled";
import {Field, Form} from 'formik'

export const Container = styled.div`
    width: 100%;
    margin-top: 20px;
    padding: 24px 15px;
    display: flex;
    align-items: center;
    background: #EBF4FF;
    justify-content: space-between;
`;

export const Balance = styled.span`
    font-weight: bold;
    font-size: 16px;
    color: #3C366B;
`;

export const ShowForm = styled.button`
    padding: 7px 12px;
    background: #667EEA;
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
    border: none;
    outline: none;
`;

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const FormGroup = styled.div`
    width: ${props => props.width};
`;

export const FormLabel = styled.div`
    font-weight: 500;
    font-size: 12px;
    color: #3C366B;
    margin-bottom: 6px;
`;

export const FormInput = styled(Field)`
    background: #FFFFFF;
    border: 1px solid #A0AEC0;
    box-sizing: border-box;
    border-radius: 4px;
    width: 100%;
    outline: none;
    height: 35px;
    padding: 0 12px;
    font-size: 14px;
    color: #3C366B;
`;

export const ErrorContainer = styled.div`
    width: 100%;
    height: 16px;
    color: #E53E3E;
    font-size: 12px;
`;
export const FormSelect = styled.select`
    background: #FFFFFF;
    border: 1px solid #A0AEC0;
    box-sizing: border-box;
    border-radius: 4px;
    width: 100%;
    outline: none;
    height: 35px;
    padding: 0 12px;
    font-size: 14px;
    color: #3C366B;
`;

export const FormValidations = styled(Form)`
    width: 100%;
`;

export const FormBottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const Cancel = styled.button`
    padding: 6px 12px;
    font-weight: 600;
    font-size: 14px;
    color: #1A202C;
    border: none;
    background-color: inherit;
    outline: none;
`;
export const Button = styled.button`
    background: #667EEA;
    padding: 6px 12px;
    border: none;
    outline: none;
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
    margin-left: 8px;
`;