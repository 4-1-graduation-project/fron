import React from 'react';
import * as Z from "../adminMainPage/AdminMainCss";
import SideMenu from "../../components/adminMainPage/SideMenu";
import backbutton from "../../assets/backbutton.png";
import MemberList from './userManagementItems/MemberList';
import { useNavigate } from 'react-router-dom';
export default function UserManagement() {
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
                <Z.Header>
                    <Z.LogoutButton>
                        관리자님 환영합니다.
                    </Z.LogoutButton>
                </Z.Header>
                <Z.MainContainer>
                    <MemberList />
                </Z.MainContainer>
            </Z.RightSection>
        </div>
    )
}
