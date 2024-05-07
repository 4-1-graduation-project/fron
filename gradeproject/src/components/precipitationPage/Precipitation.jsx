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
        <div style={{ display: 'flex', flexDirection: 'row', height: '700px' }}>
            <Z.LeftSection>
                <SideMenu />
            </Z.LeftSection>
            <Z.RightSection>
                <Z.AmdinHeader>
                    <Z.PageTitle>
                        Review 3
                    </Z.PageTitle>
                    <Z.LogoutButton>
                        관리자님 환영합니다.
                    </Z.LogoutButton>
                </Z.AmdinHeader>
                <Z.MainContainer>
                    <PrecipitationList />
                </Z.MainContainer>
            </Z.RightSection>
        </div>
    )
}
