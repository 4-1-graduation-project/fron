import styled from 'styled-components';


export const MainContainer = styled.div`
    width: 1250px;
    height: 640px;
    /* 스크롤바 스타일 */
    
    /* &::-webkit-scrollbar {
        width: 10px; 
    }
    &::-webkit-scrollbar-thumb {
        background-color: #888; 
        border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
        background-color: #f1f1f1; 
    } */

`;

export const MainTitle = styled.div`
    width: 100%;
    height: 20px;
    font-size: 24px;
    font-weight: bold;
    padding: 10px;

`;

export const SubTitle = styled(MainTitle)`
    font-size: 20px;
    padding: 0px;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
    font-weight: normal;
    margin-bottom: 10px;
    margin-top: 20px;
`;

export const SearchBox = styled.div`
    width: 450px;
    height: 50px;
    font-size: 24px;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items : center;
    margin: 0 auto;
    gap: 30px;
`;

export const SearchInput = styled.input`
    width: 400px;
    height: 40px;
    border: none;
    background-color: rgb(220,220,220,0.5);
    outline:none;
`;

export const Select = styled.select`
    width: 250px;
    height: 40px;
    border: none;
    background-color: rgb(220,220,220,0.5);
    outline:none;
    color: black;
`;

export const postContainer = styled.div`
    width: 1250px;
    height: 640px;
    /* 스크롤바 스타일 */
    
    /* &::-webkit-scrollbar {
        width: 10px; 
    }
    &::-webkit-scrollbar-thumb {
        background-color: #888; 
        border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
        background-color: #f1f1f1; 
    } */

`;

export const PaginationBox = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

export const PageNumber = styled.li`
    display: inline-block;
    font-size: 17px;
    font-weight: 600;
    padding: 0 5px;
    border-radius: 5px;
    width: 15px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    caret-color: transparent;
    background-color: ${({ active }) => (active ? '#46B8FF' : 'transparent')};
    color: ${({ active }) => (active ? 'white' : 'black')};
    &:hover {
        cursor: pointer;
        background-color: #263a6c;
        color: white;
    }
`;

export const MemberContainer = styled.div`
    width: 90%;
    height: 65%;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #1E90FF;
    border-bottom: 1px solid #1E90FF;
    margin: 0 auto;
    margin-top: 20px;
    text-decoration: none;
    &::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}
`;

export const MemberItem = styled.div`
    width: 95%;
    height: 51.2px;
    display: flex;
    flex-direction: row;
    //background-color: rgb(220, 220, 220, 0.2); 
    //box-shadow: rgba(0, 0, 0, 0.20) 0px 3px 7px;
    border-bottom: 1px solid grey;

    margin: 0 auto;
    &:hover {
        transform: scale(1.05);
    }
    cursor: pointer;
`;

export const MemberNo = styled.div`
    width: 10%;
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
`;


export const MemberId = styled.div`
    width: 50%;
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
    font-weight: bold;
`;


export const MemberGender = styled.div`
    width: 20%;
    text-align: center;
    display : flex;
    justify-content: left;
    align-items : center;
`;

export const CreatePostButton = styled.div`
    width: 10%;
    height: 30px;
    margin-top: 20px;
    border: 1px solid red;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
    border-radius: 5px;
    border:none;
    background-color: #1E90FF;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
`;


export const ContextBox = styled.div`
    width: 92%;
    height: 50%;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display : flex;
    justify-content: space-between;
    align-items : center;
    padding: 0px 20px 0px 20px;

`;

export const DeleteButton = styled.button`
  background-color: #ff6347; /* 버튼 배경색 */
  color: #fff; /* 텍스트 색상 */
  border: none; /* 테두리 없음 */
  padding: 5px 10px; /* 내부 여백 */
  border-radius: 5px; /* 모서리 둥글게 */
  cursor: pointer; /* 포인터 커서 설정 */

  &:hover {
    background-color: #ff3b20; /* 호버시 배경색 변경 */
  }
`;

