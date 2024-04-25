import styled from "styled-components";

export const LeftSection = styled.div`
    width: 60%;
    height: 100%;
`;

export const RightSection = styled.div`
    width: 40%;
    height: 100%;
`;

export const Container = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto; 
    margin-top: 50px;   
`;

export const FirstTitle = styled.div`
    width: 50%;
    height: 25%;
    white-space: pre-wrap;
    font-size: 26px;
    font-weight: bold;
    line-height: 40px;
    margin: 0 auto;
    margin-top: 30px;
`;

export const SecondTitle = styled.div`
    width: 50%;
    height: 10%;
    font-size: 32px;
    font-weight: bold;
    margin: 0 auto;
    margin-top: 50px;
`;


export const LoginContainer = styled.div`
    width: 80%;
    height: 40%;
    margin: 0 auto;
    margin-top: 50px;
`;

export const DownloadBox = styled.div`
    width: 40%;
    height: 5%;
    border-radius: 10px;
    text-align: center;
    line-height: 35px;
    margin: 0 auto;
    margin-top: 5vh;
`;


//===================LoginBox=======================================


export const IDInputBox = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
`;

export const PwdInputBox = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
`;

export const IdTitle = styled.div`
    width: 10%;
    height: 100%;
    font-size: 24px;
    font-weight: bold;
    margin-right: 15px;
`;

export const IdInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border-bottom: 2px solid black;
`;

export const PwdTitle = styled.div`
    width: 15%;
    height: 100%;
    font-size: 24px;
    font-weight: bold;
    margin-right: 5px;
`;

export const PwdInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border-bottom: 2px solid black;

`;

export const IntroduceBox = styled.div`
    width: 65%;
    height: 20%;
    line-height: 20px;
    margin: 0 auto;
    font-size: 14px;
    font-weight: bold;
`;

export const LoginButtonBox = styled.div`
    width: 45%;
    height: 12%;
    margin: 0 auto;
    text-align: center;
    line-height: 30px;
    border-radius: 20px;
    color: black;
    font-weight: bold;
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    cursor: pointer;
`;

