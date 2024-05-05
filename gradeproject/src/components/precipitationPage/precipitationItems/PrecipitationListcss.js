import styled from "styled-components";

export const DateField = styled.div`
    margin-left: 5px;
    width: 18%;
    height: 100%;
    font-size: 16px;
    font-weight: bold;
    color: black;
    
`;

export const ReportDate = styled(DateField)`
    width: 20%;
`;

export const UserNameField = styled.div`
    width: 18%;
    height: 100%;
    font-size: 16px;
    font-weight: bold;
    color: black;
`;

export const ReportName = styled(UserNameField)`
    width: 15%;
`;

export const TitleField = styled.div`
    width: 25%;
    height: 50%;
    font-size: 16px;
    font-weight: bold;
    color: black;
`;

export const ReportTitle = styled(TitleField)`
    width: 63%;
    height: 100%;
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
    font-size: 14px;
`;

export const Container = styled.div`
    width: 1250px;
    height: 620px;
    overflow: hidden;

`;

export const MemberItem = styled.div`
    width: 95%;
    height: 5%;
    display: flex;
    flex-direction: row;
    background-color: rgb(220, 220, 220, 0.2); 
    box-shadow: rgba(0, 0, 0, 0.20) 0px 3px 7px;
    margin: 0 auto;
`;
