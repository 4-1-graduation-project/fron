import React, { useState, useEffect } from 'react';
import * as T from "./AdminMainCss";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import SideHome from "../../assets/sidemenu/SideHome.png";
import Sidereport from "../../assets/sidemenu/Sidereport.png";
import Sidemap from "../../assets/sidemenu/Sidemap.png";
import Sidepeople from "../../assets/sidemenu/Sidepeople.png";
import Siderate from "../../assets/sidemenu/Siderate.png";
import SideAi from "../../assets/sidemenu/SideAi.png";
import Sidelogout from "../../assets/sidemenu/Sidelogout.png";
import Sidestar from "../../assets/sidemenu/Sidestar.png";
import light from "../../assets/sidemenu/light.png";

export default function SideMenu() {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedMenu, setSelectedMenu] = useState('');

    useEffect(() => {
        // 현재 URL을 기반으로 선택된 메뉴를 설정합니다.
        const { pathname } = location;
        if (pathname === '/adminUser' || pathname.includes('/adminUser/')) {
            setSelectedMenu('adminUser');
        } else if (pathname === '/adminReport' || pathname.includes('/adminReport/')) {
            setSelectedMenu('adminReport');
        } else if (pathname === '/mapDataManagement' || pathname.includes('/mapDataManagement/')) {
            setSelectedMenu('mapDataManagement');
        } else if (pathname === '/floatingPopulationManagement' || pathname.includes('/floatingPopulationManagement/')) {
            setSelectedMenu('floatingPopulationManagement');
        } else if (pathname === '/precipitationManagement' || pathname.includes('/precipitationManagement/')) {
            setSelectedMenu('precipitationManagement');
        } else if (pathname === '/aiSetting' || pathname.includes('/aiSetting/')) {
            setSelectedMenu('aiSetting');
        } else if (pathname === '/evaluationIndicators' || pathname.includes('/evaluationIndicators/')) {
            setSelectedMenu('evaluationIndicators');
        }

    }, [location.pathname]);

    const handleMenuClick = (url, menuName) => {
        navigate(url);
        setSelectedMenu(menuName);
    };

    const handleLogout = () => {
        // 로컬 스토리지에서 accessToken 삭제
        localStorage.removeItem('accessToken');

        // 로그아웃 API 호출
        const logoutUrl = 'http://ceprj.gachon.ac.kr:60004/src/admins/logout';

        axios.post(logoutUrl)
            .then(response => {
                // 로그아웃 성공 시 처리
                console.log('로그아웃 성공:', response.data);
                alert('로그아웃이 되었습니다.');
                navigate('/');
                // 여기에 추가적인 로그아웃 성공 처리 로직을 구현할 수 있습니다.
            })
            .catch(error => {
                // 로그아웃 실패 시 처리
                console.error('로그아웃 실패:', error);
                // 여기에 추가적인 로그아웃 실패 처리 로직을 구현할 수 있습니다.
            });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(220, 220, 220, 0.3)', height: '100%' }}>
            <T.Title onClick={() => handleMenuClick('/adminMain')}>
                <img src={light} alt='로고' style={{ width: '70px', height: '70px' }} />
                등대지기

            </T.Title>
            <T.MenuBox>
                <T.Menu
                    as={selectedMenu === 'adminUser' ? T.SelectedMenu : 'div'}
                    onClick={() => handleMenuClick('/adminUser', 'adminUser')}
                >
                    <img src={SideHome} alt="홈" style={{ width: '20px', height: '20px' }} />
                    회원 관리
                </T.Menu>
                <T.Menu
                    as={selectedMenu === 'adminReport' ? T.SelectedMenu : 'div'}
                    onClick={() => handleMenuClick('/adminReport', 'adminReport')}
                >
                    <img src={Sidereport} alt="신고" style={{ width: '20px', height: '20px' }} />
                    신고 관리
                </T.Menu>
                <T.Menu
                    as={selectedMenu === 'precipitationManagement' ? T.SelectedMenu : 'div'}
                    onClick={() => handleMenuClick('/precipitationManagement', 'precipitationManagement')}
                >
                    <img src={Sidestar} alt="신고" style={{ width: '20px', height: '20px' }} />
                    사용자 평가 관리
                </T.Menu>
                <T.Menu
                    as={selectedMenu === 'mapDataManagement' ? T.SelectedMenu : 'div'}
                    onClick={() => handleMenuClick('/mapDataManagement', 'mapDataManagement')}
                >
                    <img src={Sidemap} alt="신고" style={{ width: '20px', height: '20px' }} />
                    지도 데이터 관리
                </T.Menu>
                <T.Menu
                    as={selectedMenu === 'floatingPopulationManagement' ? T.SelectedMenu : 'div'}
                    onClick={() => handleMenuClick('/floatingPopulationManagement', 'floatingPopulationManagement')}
                >
                    <img src={Sidepeople} alt="신고" style={{ width: '20px', height: '20px' }} />
                    유동인구 데이터 관리
                </T.Menu>

                <T.Menu
                    as={selectedMenu === 'aiSetting' ? T.SelectedMenu : 'div'}
                    onClick={() => handleMenuClick('/aiSetting', 'aiSetting')}
                >
                    <img src={SideAi} alt="신고" style={{ width: '20px', height: '20px' }} />
                    AI 관리
                </T.Menu>
                <T.Menu
                    as={selectedMenu === 'evaluationIndicators' ? T.SelectedMenu : 'div'}
                    onClick={() => handleMenuClick('/evaluationIndicators', 'evaluationIndicators')}
                >
                    <img src={Siderate} alt="신고" style={{ width: '20px', height: '20px' }} />
                    AI 평가 지표 관리
                </T.Menu>
                <T.Menu onClick={handleLogout}>
                    <img src={Sidelogout} alt="신고" style={{ width: '20px', height: '20px' }} />
                    로그아웃
                </T.Menu>
            </T.MenuBox>
        </div>
    )
}
