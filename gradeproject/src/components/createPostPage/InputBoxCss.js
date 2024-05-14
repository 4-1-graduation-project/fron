import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 1250px;
    height: 600px;
    border-radius: 15px;
    border: 1px solid #b4b4b4;
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
    width: 70%;
    height: 20px;
    font-size: 20px;
    font-weight: bold;
    white-space: pre-wrap;
    margin: 0 auto;
    margin-top: 50px;

`;

export const InputBox = styled.div`
    width: 70%;
    height: 55%;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;

`;

export const Title = styled.div`
    font-size: 16px;
    font-weight: bold;
    padding: 10px;

`;
export const ContentTitle = styled.div`
    height: 100px;
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
`;

export const ContentContainer = styled.div`
    height: 100px;
    display: flex;
    flex-direction: row;
    gap: 70px;
    height: 100px;
    margin-top: 80px;

`;
export const Input = styled.input`
    border: none;
    border-bottom: 1px solid #aaaaaa;
    outline: none;
    padding: 5px;
    width: 80%;
    &::placeholder {
        position: absolute;
        top: 0;
        left: 0;
        padding: 5px;
        color: gray; /* placeholder 색상 지정 */
        pointer-events: none; /* 입력 이벤트 방지 */
    }
`;

export const CreatePostButton = styled.button`
    width: 10%;
    height: 30px;
    margin-top: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: none;
    background-color: ${({ hasContent }) => hasContent ? '#1E90FF' : '#CCCCCC'};
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: ${({ hasContent }) => hasContent ? 'pointer' : 'not-allowed'};
    margin: 0 auto;
    margin-top: 50px;
`;
