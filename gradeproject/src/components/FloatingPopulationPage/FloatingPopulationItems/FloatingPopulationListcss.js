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
    width: 18%;
    height: 50%;
    font-size: 16px;
    font-weight: bold;
    color: black;
`;

export const ReportTitle = styled(TitleField)`
    width: 25%;
`;