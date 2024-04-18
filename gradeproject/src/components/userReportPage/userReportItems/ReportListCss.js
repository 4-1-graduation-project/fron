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

export const PoliceTitle = styled(TitleField)`
    width: 67%;
`;


export const LocationField = styled.div`
    margin-left: 5px;
    width: 20%;
    height: 100%;
    font-size: 16px;
    font-weight: bold;
    color: black;
`;

export const emergencyBellLocation = styled(LocationField)`
    width: 20%;
`;

export const emergencyBelladdress = styled(TitleField)`
    width: 75%;
`;

export const ReportContent = styled(ContentField)`
    width: 48%;
`;


export const DateBox = styled.div`
    width: 20%;
    height: 100%;
    border-radius: 15px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
`;

export const Date = styled.div`
    width: 30%;
    height: 100%;
    border-left: 1px solid black;
    border-right: 1px solid black;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
`;

export const NameBox = styled.div`
    width: 20%;
    height: 100%;
    border-right: 1px solid black;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
`;

export const Name = styled.div`
    width: 30%;
    height: 100%;
    border-top-left-radius: 15px;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
`;

export const TitleBox = styled.div`
    width: 20%;
    height: 100%;
    border-right: 1px solid black;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
`;

export const Title = styled.div`
    width: 30%;
    height: 100%;
    border-top-left-radius: 15px;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
`;

export const ContentBox = styled.div`
    width: 20%;
    height: 100%;
    border-right: 1px solid black;
    border-left: 1px solid black;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
`;

export const Content = styled.div`
    width: 30%;
    height: 100%;
    border-top-left-radius: 15px;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
`;

