import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as Z from "../adminMainPage/AdminMainCss";
import SideMenu from "../../components/adminMainPage/SideMenu";
import backbutton from "../../assets/backbutton.png";
import FloatingPopulationList from './FloatingPopulationItems/FloatingPopulationList';

export default function FloatingPopulation() {
    const navigate = useNavigate();

    const handleMenuClick = (url, menuName) => {
        navigate(url);

    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '700px'  }}>
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
                    <FloatingPopulationList />
                </Z.MainContainer>

            </Z.RightSection>
        </div>
    )
}
