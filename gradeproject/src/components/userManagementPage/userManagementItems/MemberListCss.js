import styled, { keyframes } from 'styled-components';


export const Container = styled.div`
    width: 1250px;
    height: 600px;
    border-radius: 15px;
    overflow-y: auto;
    overflow-x: hidden;
    /* 스크롤바 스타일 */
    &::-webkit-scrollbar {
        width: 10px; /* 세로 스크롤바 너비 */
    }
    &::-webkit-scrollbar-thumb {
        background-color: #888; /* 스크롤바 색상 */
        border-radius: 5px; /* 스크롤바 모서리 둥글게 */
    }
    &::-webkit-scrollbar-track {
        background-color: #f1f1f1; /* 스크롤바 트랙 색상 */
    }

`;

export const DropDownContainer = styled.div`
    width: 95%;
    height: 200px;
    border-radius: 15px;
    overflow: hidden;
    margin: 0 auto;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    @keyframes dropdown {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: dropdown 0.4s ease;
`;


export const Box = styled.div`
    width: 1200px;
    height: 100%;
    margin: 20px;

`;

export const FieldContainer = styled.div`
    width: 96%;
    height: 4%;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    margin-top: 10px;
`;

export const Title = styled.div`
    width: 95%;
    height: 7%;
    font-size: 24px;
    font-weight: bold;
    color: black;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid grey;
    margin: 0 auto;
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
    width: 19%;
    height: 100%;
    font-size: 16px;
    font-weight: bold;
    color: black;
`;

export const AddressField = styled.div`
    width: 55%;
    height: 100%;
    font-size: 16px;
    font-weight: bold;
    color: black;

`;

export const GenderField = styled.div`
    width: 11%;
    height: 100%;
    font-size: 16px;
    font-weight: bold;
    color: black;
`;

//============================Item====================================

export const MemberContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: auto;
    &::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}
`;

export const MemberItem = styled.div`
    width: 95%;
    height: 30px;
    display: flex;
    flex-direction: row;
    background-color: rgb(220, 220, 220, 0.2); 
    box-shadow: rgba(0, 0, 0, 0.20) 0px 3px 7px;
    margin: 0 auto;
`;

export const MemberNo = styled(NoField)`

    width: 10%;
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
`;

export const MemberName = styled(UserNameField)`
    width: 15%;
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
`;

export const MemberId = styled(IdField)`
    width: 17%;
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
`;

export const MemberAddress = styled(AddressField)`
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
    width: 48%;
`;

export const MemberGender = styled(GenderField)`
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
    width: 10%;
`;

//==========================MemberListDetailCss===========================

export const MemberListContainer = styled.div`
    width: 95%;
    height: 70%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    &::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}
`;

export const FirstRow = styled.div`
    width: 100%;
    height: 40%;
    display: flex;  
    flex-direction: column;
    gap: 5px;
    margin: 15px;
    
`;

export const SecondRow = styled.div`
    width: 100%;
    height: 70%;
    border: 1px solid black;
    display: flex;  
    flex-direction: row;
    
`;

export const NoBox = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
`;


export const No = styled.div`
    width: 100%;
    height: 100%;
    border-left: 1px solid black;
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
`;


export const AddressBox = styled.div`
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
`;


export const Address = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
`;


export const NameBox = styled.div`
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
`;


export const Name = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
`;


export const GenderBox = styled.div`
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
`;


export const Gender = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
`;


export const IdBox = styled.div`
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
`;


export const Id = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
`;


export const BirthBox = styled.div`
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
`;


export const Birth = styled.div`
    width: 100%;
    height: 100%;
    border-top-left-radius: 15px;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
`;

export const PaginationBox = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: right;
  align-items: center;
`;

export const PageNumber = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding-right: px;
  padding-left: 5px;
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
    width: 100%;
    height: 50%;
    color: black;
    gap: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 20px;
`;

export const SearchMapBox = styled.div`
    width: 20%;
    height: 80%;
    color: black;
    margin-bottom: 20px;
    gap: 20px;
    display: flex;
    flex-direction: row;
`;

export const Input = styled.input`
    width: 20%;
    height: 90%;
    border: 1px solid grey;
    border-radius: 5px;
    outline: none;
    border: 1px solid #46AAEB;
`;

export const memberInput = styled.input`
    width: 20%;
    height: 90%;
    border: 1px solid grey;
    border-radius: 5px;
    outline: none;
    border: 1px solid #46AAEB;
`;



