import { Button, TextField } from '@mui/material';
import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Input = styled(TextField)`
    width: 500px;
`;

export const StyledButton = styled(Button)`
    width: 500px;
`;

export const DecorInput = styled.div`
    margin-bottom: 20px;
`;

export const LoginTitle = styled.h2`
    text-transform: uppercase;
    color: #13c4d1;
    margin-bottom: 10px;
`;

export const Error = styled.p`
margin-top: 8px;
color: red;
font-style: italic;
`

export const AuthError = styled.p`
    color: red;
    font-style: italic;
    margin-bottom: 8px;
`;