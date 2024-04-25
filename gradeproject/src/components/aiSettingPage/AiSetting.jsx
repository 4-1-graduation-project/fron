import { useNavigate } from 'react-router-dom';
import * as Z from "../adminMainPage/AdminMainCss";
import SideMenu from "../../components/adminMainPage/SideMenu";
import backbutton from "../../assets/backbutton.png";
import AiSettingList from './aiSettingItems/AiSettingList';

export default function AiSetting() {
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
                        <img src={backbutton} alt='뒤로가기' style={{ width: '50px', height: '50px' }} />
                    </Z.BackButton>
                    <Z.LogoutButton>
                        로그아웃
                    </Z.LogoutButton>
                </Z.Header>
                <Z.MainContainer>
                    <AiSettingList />
                </Z.MainContainer>
            </Z.RightSection>
        </div>
    )
}
