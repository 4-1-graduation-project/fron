import * as A from "../adminMainPage/AdminMainCss";
import SideMenu from "../adminMainPage/SideMenu";
import { useNavigate } from 'react-router-dom';
import backbutton from "../../assets/backbutton.png";
import ReportList from "./userReportItems/ReportList";

export default function UserReport() {
    const navigate = useNavigate();

    const handleMenuClick = (url, menuName) => {
        navigate(url);

    };
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <A.LeftSection>
                <SideMenu />
            </A.LeftSection>
            <A.RightSection>
                <A.Header>
                    <A.BackButton onClick={() => handleMenuClick('/adminMain')}>
                        <img src={backbutton} alt='뒤로가기' />
                    </A.BackButton>
                    <A.LogoutButton>
                        로그아웃
                    </A.LogoutButton>
                </A.Header>
                <A.MainContainer>
                    <ReportList />
                </A.MainContainer>
            </A.RightSection>
        </div>
    )
}
