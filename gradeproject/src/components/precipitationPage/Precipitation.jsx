import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import * as Z from "../adminMainPage/AdminMainCss";
import SideMenu from "../../components/adminMainPage/SideMenu";
import backbutton from "../../assets/backbutton.png";
import PrecipitationList from './precipitationItems/PrecipitationList';

export default function Precipitation() {
    const [precipitations, setPrecipitations] = useState([]);
    const navigate = useNavigate();

    const handleMenuClick = (url, menuName) => {
        navigate(url);

    };
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        fetch('http://ceprj.gachon.ac.kr:60004/src/admins/feedbacks', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(response => response.json())
            .then(data => setPrecipitations(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '700px' }}>
            <Z.LeftSection>
                <SideMenu />
            </Z.LeftSection>
            <Z.RightSection>
                <Z.ReviewAmdinHeader>
                    <Z.PageTitle>
                        Review {precipitations.length}
                    </Z.PageTitle>
                    <Z.LogoutButton>
                        관리자님 환영합니다.
                    </Z.LogoutButton>
                </Z.ReviewAmdinHeader>
                <Z.MainContainer>
                    <PrecipitationList />
                </Z.MainContainer>
            </Z.RightSection>
        </div>
    )
}
