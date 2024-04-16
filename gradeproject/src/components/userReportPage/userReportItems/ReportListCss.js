import styled from "styled-components";

export const DateField = styled.div`
    margin-left: 5px;
    width: 13%;
    height: 100%;
    font-size: 16px;
    font-weight: bold;
    color: black;
`;

export const UserNameField = styled.div`
    width: 16%;
    height: 100%;
    font-size: 16px;
    font-weight: bold;
    color: black;
`;

export const TitleField = styled.div`
    width: 21%;
    height: 50%;
    font-size: 16px;
    font-weight: bold;
    color: black;
`;

export const ContentField = styled.div`
    width: 55%;
    height: 50%;
    font-size: 16px;
    font-weight: bold;
    color: black;

`;

export const MemberItem = styled.div`
    width: 100%;
    height: 5%;
    border-bottom: 1px solid black;
    margin-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
`;

export const ReportDate = styled(DateField)`
    width: 12%;
`;

export const ReportName = styled(UserNameField)`
    width: 15%;
`;

export const ReportTitle = styled(TitleField)`
    width: 20%;
`;

export const ReportContent = styled(ContentField)`
    width: 48%;
`;