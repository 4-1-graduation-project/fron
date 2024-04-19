import styled from "styled-components";

export const Container = styled.div`
    width: 1250px;
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
    margin: 20px;
    padding-bottom: 10px;
`;

export const SeletedAiBox = styled.div`
    width: 1200px;
    height: 20%;
    margin: 20px;
    border: 1px solid red;
    display : flex;
    flex-direction: row;
    justify-content: center;
    align-items : center;
    text-align: center;

`;

export const SelectedAi = styled.div`
    width: 300px;
    height: 50%;
    margin: 20px;
    border: 1px solid blue;
    font-size: 24px;
    font-weight:bold;
    text-align: left;
`;

export const Button = styled.div`
    width: 80px;
    height: 30px;
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

