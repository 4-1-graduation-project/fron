import styled, { keyframes } from 'styled-components';

export const LeftSection = styled.div`
    width: 20%;
    height: 100%;
`;

export const RightSection = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

`;

export const FileHeader = styled.div`
    width: 97%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 auto;

`;

export const ReportDetailHeader = styled.div`
    width: 95%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 auto;
`;


export const AmdinHeader = styled.div`
    width: 100%;
    height: 7%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`;

export const ReviewAmdinHeader = styled.div`
    width: 97%;
    height: 7%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    
`;

export const NoticeAmdinHeader = styled.div`
    width: 97%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    border-bottom: 1px solid grey;
    
`;

export const LogoutButton = styled.div`
    width: 95%;
    height: 30px;
    text-align: center;
    display : flex;
    justify-content: right;
    align-items : center;
    float: right;
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
    padding-left: 20px;
`;


export const PageTitle = styled.div`
    width: 15%;
    height: 30px;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
    float: right;
    margin-top: 10px;
    font-size: 24px;
    font-weight: bold;
    padding-left: 20px;
`;


export const BackButton = styled.div`
    width: 80%;
    height: 40%;
    margin-top: 20px;
    font-size: 16px;
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

export const NoticeMainContainer = styled.div`
    width: 98%;
    height: 100%;
    gap: 10px;
    margin: 0 auto;
`;

export const FileContainer = styled.div`
    width: 98%;
    height: 100%;
    margin: 10px;
    display: flex;
    flex-direction: column;
`;


export const GridItem = styled.div`
    background-color: ${({ color }) => color};
    border: 1px solid black;
    opacity: 0.4;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.15px 2.15px 2.8px;
`;


//================================UserReport=================================

export const Container = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.15px 2.15px 2.8px;
    overflow: hidden;
`;



export const ReportBoxHeader = styled.div`
    width: 90%;
    height: 10%;
    border-bottom: 2px solid black;
    display: flex;
    flex-direction: row;
    margin: 25px;
`;

export const ReportBoxTitle = styled.div`
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-weight: bold;
    color: black;
`;

export const ReportBoxSubTitle = styled.div`
    width: 10%;
    height: 50%;
    display: flex;
    justify-content: center;
    font-size: 12px;
    margin-top: auto;
    cursor: pointer;
`;

export const ReportList = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
    overflow-y: auto;
    justify-content: space-around;
    text-align: center;
    align-items : center;

    &::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}
`;


export const ReportItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    bottom: 10px;
    border: 1px solid black;
`;

export const ReportItemSide = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    bottom: 10px;
`;




export const ReportNumber = styled.div`
    width: 100%;
    height: 50%;
    position: relative;
    top: 60px;
    font-weight: bold;
    font-size: 26px;
`;

export const ReportText = styled.div`
    width: 100%;
    height: 10%;
`;


export const StarBox = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
`;

export const ReportListItem = styled.div`
    width: 100%;
    height: 10%;
    border-bottom: 2px solid gray;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    padding-bottom: 10px;
`;

export const ReportTitle = styled.div`
    width: 80%;
    height: 100%;
    font-size: 18px;

`;

export const ReportAuthor = styled.div`
    width: 20%;
    height: 100%;
`;

export const ReportDate = styled.div`
    width: 20%;
    height: 30%;
    font-size: 12px;
    margin: auto;

`;


//================================AiSettings=================================

export const AiSettingContainer = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.15px 2.15px 2.8px;
`;

export const SettingBoxHeader = styled.div`
    width: 90%;
    height: 10%;
    border-bottom: 2px solid black;
    display: flex;
    flex-direction: row;
    margin: 25px 25px 10px 25px; 
`;

export const SettingBoxTitle = styled.div`
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-weight: bold;
    color: black;
`;

export const SettingBoxSubTitle = styled.div`
    width: 10%;
    height: 50%;
    display: flex;
    justify-content: center;
    font-size: 12px;
    margin-top: auto;
    cursor: pointer;
`;

export const TextContainer = styled.div`
    width: 90%;
    height: 200px;
    display: flex;
    flex-direction: row;
     
`;

export const TextBox = styled.div`
    width: 90%;
    height: 20px;
    display: flex;
    flex-direction: row;
    margin-left: 25px;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
    margin-bottom: 10px;
`;

export const SlideBox = styled.div`
    width: 80%;
    height: 180px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
`;

export const SelectedTitle = styled.div`
    width: 80%;
    height: 10%;
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: bold;

`;
export const UsedDateSetTitle = styled.div`
    width: 80%;
    height: 20%;
    font-size: 18px;
    font-weight: bold;

`;
export const UpdatedDateTitle = styled.div`
    width: 80%;
    height: 20%;
    font-size: 18px;
    font-weight: bold;
`;

export const AiSettingsList = styled.ul`
  line-height: 0.5;
  margin: 0;
  padding-inline-start: 1.5em;
  list-style-position: inside;
  list-style-type: square;
  overflow: hidden;


`;
export const AiSettingsItems = styled.li`
  line-height: 1.8;
  margin: 0;
  padding-inline-start: 1.5em;
  list-style-position: inside;
  list-style-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2'><polyline points='20 6 9 17 4 12'></polyline></svg>");
  height: 30%;
`;


//================================ UserRate =================================

export const UserRateContainer = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.15px 2.15px 2.8px;
`;


export const ReportStars = styled.div`
  color: gold; /* Filled star color */
  font-size: 24px; /* Adjust star size as needed */
  width: 30%;
`;

export const FilledStar = styled.span`
  margin-right: 5px; /* Adjust spacing between stars as needed */
`;

export const EmptyStar = styled.span`
  margin-right: 5px; /* Adjust spacing between stars as needed */
  color: #ccc; /* Empty star color */
`;


export const RateTitle = styled.div`
    width: 90%;
    height: 100%;
    font-size: 18px;

`;

export const RateAuthor = styled.div`
    width: 20%;
    height: 100%;
`;



//================================ DataManagement =================================

export const DataManagementContainer = styled.div`
    /* background-color: rgb(165, 199, 159, 0.7); */
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.15px 2.15px 2.8px;
`;

//======================================SideMenu=============================

export const Title = styled.div`
    width: 100%;
    height: 10%;
    text-align: center;
    line-height: 60px;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: left;
    display : flex;
    justify-content: left;
    align-items : center;
    margin-left: 20px;
    cursor: pointer;
`;

export const Title2 = styled.div`
    width: 50%;
    height: 40px;
    text-align: center;
    line-height: 60px;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: left;
    display : flex;
    justify-content: left;
    align-items : center;
    margin-left: 20px;
    cursor: pointer;
`;

export const RegisterTitle = styled.div`
    width: 100%;
    height: 10%;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
    display : flex;
    flex-direction: row;
    justify-content:space-between;
`;

export const MenuBox = styled.div`
    width: 100%;
    height: 100%;
`;

export const Menu = styled.div`
    width: 100%;
    height: 50px;
    margin: 0 auto;
    text-align: left;
    display : flex;
    justify-content: left;
    align-items : center;

    margin-top: 10px;
    font-weight: bold;
    cursor: pointer;
    color: rgb(70, 70, 70, 0.8);
    flex-direction: row;
    gap: 5px;
`;

export const MenuTitle = styled.div`
    width: 50%;
    height: 50px;
    border: 1px solid black;
    display : flex;
    align-items : center;
    margin-top: 10px;
    font-weight: bold;



`;


export const SelectedMenu = styled(Menu)`
background-color: rgb(53, 126, 199, 0.2);
    
`;

export const SlideButton = styled.button`
    background-color: #fff;
    border: none;
    color: #333;
    font-size: 24px;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #f0f0f0;
    }

    &:first-child {
        left: 0;
    }

    &:last-child {
        right: 0;
    }
`;

export const SlideImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.25);
    }
`;

export const SlideTitle = styled.div`
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
    margin-top: 5px;
`;

export const FileBox = styled.div`
    width: 95%;
    height: 70%;
    border-radius: 10px;
    border: 1px solid #c8c8c8;
    margin: 0 auto;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
    .shadow-6 {
        text-align: center;
        display : flex;
        justify-content: center;
        align-items : center;
        box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 8px 8px rgba(0,0,0,0.11), 
              0 16px 16px rgba(0,0,0,0.11), 
              0 32px 32px rgba(0,0,0,0.11);
}

`;

export const SendButtonBox = styled.div`
    width: 10%;
    height: 7%;
    background-color: #3CA0E1;
    margin: 0 auto;
    margin-top: 30px;
    border: none;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
    border-radius: 10px;
    color: white;
    cursor: pointer;
`;

export const Cancelbutton = styled.div`
    width: 35%;
    height: 40px;
    background-color: #FF5A5A;
    margin: 0 auto;
    margin-top: 30px;
    border: none;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items : center;
    border-radius: 10px;
    color: white;
    cursor: pointer;
`;




