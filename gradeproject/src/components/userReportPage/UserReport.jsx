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
                    <A.LogoutButton>
                        관리자님 환영합니다.
                    </A.LogoutButton>
                </A.Header>
                <A.MainContainer>
                    <ReportList />
                </A.MainContainer>
            </A.RightSection>
        </div>
    )
}
