import styled from "styled-components";

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

export const AmdinHeader = styled.div`
    width: 100%;
    height: 10%;
    flex-direction: row;
    justify-content: space-evenly;
    
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

export const GridItem = styled.div`
    background-color: ${({ color }) => color};
    border: 1px solid black;
    opacity: 0.4;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.15px 2.15px 2.8px;
`;


//================================UserReport=================================

export const Container = styled.div`
    background-color: #CBCDFF;
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.15px 2.15px 2.8px;
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
`;

export const ReportList = styled.div`
    width: 90%;
    height: 200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    &::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}
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
    background-color: #FFC3C3;
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
    margin: 25px;
`;

export const SettingBoxTitle = styled.div`
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-weight: bold;
    color: black;
`;

export const SettingBoxSubTitle = styled.div`
    width: 8%;
    height: 50%;
    display: flex;
    justify-content: center;
    font-size: 12px;
    margin-top: auto;
`;

export const TextContainer = styled.div`
    width: 87%;
    height: 200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
     
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
    background-color: #edebb7;
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.15px 2.15px 2.8px;
`;


export const ReportStars = styled.div`
  color: gold; /* Filled star color */
  font-size: 24px; /* Adjust star size as needed */
  border: 1px solid red;
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
    background-color: #a5c79f;
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
`;

export const MenuBox = styled.div`
    width: 100%;
    height: 100%;
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

export const SelectedMenu = styled(Menu)`
    color : white;
    background-color: black;
`;
