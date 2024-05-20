import styled from "styled-components";

export const Container = styled.div`
    width: 200%;
    height: 600px;
    border-radius: 15px;
    border: 1px solid black;
    overflow: hidden;

`;

export const Box = styled.div`
    width: 1200px;
    height: 100%;
    margin: 20px;

`;


export const Title = styled.div`
    width: 95%;
    height: 5%;
    font-size: 24px;
    font-weight: bold;
    color: black;
    border-bottom: 2px solid black;
    padding-bottom: 10px;
    margin: 20px;
`;

export const SeletedAiBox = styled.div`
    width: 95%;
    height: 20%;
    margin: 20px;

    display : flex;
    flex-direction: row;
    justify-content: center;
    align-items : center;
    text-align: center;
`;

export const InputBox = styled.div`
    width: 95%;
    height: 50%;
    margin: 20px;

    display : flex;
    flex-direction: row;
    justify-content: center;
    align-items : center;
    text-align: center;
`;


export const ButtonBox = styled.div`
    width: 50%;
    height: 20%;
    margin: 20px;
    display : flex;
    flex-direction: row;
    justify-content: center;
    align-items : center;
    text-align: center;
    margin: auto;
    margin-top: 50px;
    gap: 100px;
    cursor: pointer;
`;



export const SelectedAi = styled.div`
    width: 90%;
    height: 50%;
    font-size: 24px;
    font-weight:bold;
    text-align: left;
`;

export const Button = styled.div`
    width: 80px;
    height: 25px;
    border: none;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
    margin: 0 auto;
    border-radius: 10px;
    color: white;
    background-color: #152DFF;
    font-weight: bold;
    background-color: rgba( 100, 128, 255, 0.6 );
    cursor: pointer;
`;


export const InputGrid = styled.div`
    margin-left: 10%;
    width: 40%;
    height: 30%;
    display: flex;
    flex-direction: column;

    grid-gap: 20px;
    margin-top: 20px;

    div {
        display: flex;
        flex-direction: column;
    }

    input { 
        width: 70%;
        border-radius: 20px;
        border: 1px solid grey;
    }
`;

export const InputLabel = styled.div`
    width: 70%;
    display : flex;
    text-align: left;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 5px;
`;
