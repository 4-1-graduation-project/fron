import { useNavigate } from 'react-router-dom';
import * as Z from "../adminMainPage/AdminMainCss";
import SideMenu from "../../components/adminMainPage/SideMenu";
import backbutton from "../../assets/backbutton.png";
import PrecipitationList from './precipitationItems/PrecipitationList';
export default function Precipitation() {
    const navigate = useNavigate();

    const handleMenuClick = (url, menuName) => {
        navigate(url);

    };
    return (
        <div style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
            <Z.LeftSection>
                <SideMenu />
            </Z.LeftSection>
            <Z.RightSection>
                <Z.Header>
                    <Z.BackButton onClick={() => handleMenuClick('/adminMain')}>
                        <img src={backbutton} alt='뒤로가기' />
                    </Z.BackButton>
                    <Z.LogoutButton>
                        로그아웃
                    </Z.LogoutButton>
                </Z.Header>
                <Z.MainContainer>
                    <PrecipitationList />
                </Z.MainContainer>
            </Z.RightSection>
        </div>
    )
}
