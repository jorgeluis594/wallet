import styled from '@emotion/styled'

export const Container = styled.div`
    width: 183px;
    margin: 35px auto;
`;
export const ImgContainer = styled.div`
    width: 52px;
    height: 52px;
    margin: 0 auto;
`;

export const Form = styled.form`
    width: 100%;
`;

export const FormGroup = styled.div`
    width: 100%;
`;

export const FormLabel = styled.div`
    font-weight: 500;
    font-size: 12px;
    color: #3C366B;
    margin-bottom: 6px;
`;

export const FormInput = styled.input`
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
    border-radius: 4px;
    width: 100%;
    outline: none;
    height: 35px;
    padding: 0 12px;
    font-size: 14px;
    color: #3C366B;
`;

export const FormTextArea = styled.textarea`
    max-width: 100%;
    min-width: 100%;
    min-height: 67px;
    max-height: 67px;
    background: #FFFFFF;
    border: 1px solid #A0AEC0;
    border-radius: 4px;
    outline: none;
    padding: 0 12px;
    font-size: 14px;
    color: #3C366B;
`;

export const FormBottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const ButtonDelete = styled.button`
    padding: 6px 13px;
    font-weight: 600;
    font-size: 14px;
    color: #E53E3E;
    border: none;
    background-color: white;
    outline: none;
`;

export const ButtonSave = styled.button`
    padding: 6px 13px;
    background: #667EEA;
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
    border: none;
    outline: none;
`;