import styled from "styled-components";

export const DateField = styled.div`
    margin-left: 5px;
    width: 22%;
    height: 100%;
    font-size: 16px;
    font-weight: bold;
    color: black;
`;

export const ReportDate = styled(DateField)`
    width: 20%;
    height: 100%;
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
    font-size: 14px;
`;

export const UserNameField = styled.div`
    width: 18%;
    height: 100%;
    font-size: 16px;
    font-weight: bold;
    color: black;
`;

export const ReportName = styled(UserNameField)`
    width: 25%;
    height: 100%;
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
    font-size: 14px;
`;

export const TitleField = styled.div`
    width: 23%;
    height: 50%;
    font-size: 16px;
    font-weight: bold;
    color: black;
`;

export const ReportTitle = styled(TitleField)`
    width: 40%;
`;