import styled from "styled-components";

export const Container = styled.div`
    width: 1250px;
    height: 600px;
    border-radius: 15px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    border: 1px solid black;
    overflow: hidden;

`;

export const Box = styled.div`
    width: 1200px;
    height: 100%;
    margin: 20px;

`;

export const FieldContainer = styled.div`
    width: 100%;
    height: 5%;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: row;
`;

export const Title = styled.div`
    width: 100%;
    height: 5%;
    font-size: 24px;
    font-weight: bold;
    color: black;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

//===================Field=======================

export const NoField = styled.div`
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

export const IdField = styled.div`
    width: 21%;
    height: 50%;
    font-size: 16px;
    font-weight: bold;
    color: black;
`;

export const AddressField = styled.div`
    width: 55%;
    height: 50%;
    font-size: 16px;
    font-weight: bold;
    color: black;

`;

export const GenderField = styled.div`
    width: 11%;
    height: 50%;
    font-size: 16px;
    font-weight: bold;
    color: black;
`;

//============================Item====================================

export const MemberContainer = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    &::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}
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

export const MemberNo = styled(NoField)`
    width: 10%;
`;

export const MemberName = styled(UserNameField)`
    width: 15%;
`;

export const MemberId = styled(IdField)`
    width: 17%;
`;

export const MemberAddress = styled(AddressField)`
    width: 48%;
`;

export const MemberGender = styled(GenderField)`
    width: 5%;
`;

//==========================MemberListDetailCss===========================

export const MemberListContainer = styled.div`
    width: 80%;
    height: 70%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    &::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}
    border: 1px solid black;
`;

export const FirstRow = styled.div`
    width: 100%;
    height: 35%;
    border: 1px solid black;
    display: flex;  
    flex-direction: row;
    
`;

export const SecondRow = styled.div`
    width: 100%;
    height: 70%;
    border: 1px solid black;
    display: flex;  
    flex-direction: row;
    
`;

export const NoBox = styled.div`
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


export const No = styled.div`
    width: 30%;
    height: 100%;
    border-left: 1px solid black;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
`;


export const AddressBox = styled.div`
    width: 20%;
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


export const Address = styled.div`
    width: 30%;
    height: 100%;
    border-top-left-radius: 15px;
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


export const GenderBox = styled.div`
    width: 20%;
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


export const Gender = styled.div`
    width: 30%;
    height: 100%;
    border-top-left-radius: 15px;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
`;


export const IdBox = styled.div`
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


export const Id = styled.div`
    width: 30%;
    height: 100%;
    border-top-left-radius: 15px;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
`;


export const BirthBox = styled.div`
    width: 20%;
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


export const Birth = styled.div`
    width: 30%;
    height: 100%;
    border-top-left-radius: 15px;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
`;

export const PaginationBox = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageNumber = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

export const SearchBox = styled.div`
    width: 20%;
    height: 100%;
    color: black;
    margin-bottom: 20px;
    border: 1px solid blue;
`;




