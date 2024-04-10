import styled from "styled-components";

export const LeftSection = styled.div`
    width: 20%;
    height: 100%;
    border: 1px solid red;
`;

export const RightSection = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    width: 100%;
    height: 10%;
    border: 1px solid blue;
`;

export const LogoutButton = styled.div`
    width: 10%;
    height: 40%;
    border: 2px solid black;
    border-radius: 20px;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
    float: right;
    margin-top: 20px;
    margin-right: 10px;
    font-size: 16px;
    font-weight: bold;
`;

//===================================Grid배열========================

export const MainContainer = styled.div`
    width: 98%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
    margin: 10px;
`;

export const GridItem = styled.div`
    background-color: ${({ color }) => color};
    border: 1px solid black;
    opacity: 0.4;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.15px 2.15px 2.8px;
`;


//======================================SideMenu=============================

export const Title = styled.div`
    width: 100%;
    height: 10%;
    border: 1px solid blue;
    text-align: center;
    line-height: 60px;
    font-size: 32px;
    font-weight: bold;
`;

export const MenuBox = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid green;
`;

export const Menu = styled.div`
    width: 80%;
    height: 7%;
    border: 1px solid black;
    margin: 0 auto;
    border-radius: 20px;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    margin-top: 10px;
    font-weight: bold;
`;

