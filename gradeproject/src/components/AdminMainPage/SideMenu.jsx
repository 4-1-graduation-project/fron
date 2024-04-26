import React, { useState, useEffect } from 'react';
import * as T from "./AdminMainCss";
import { useNavigate, useLocation } from 'react-router-dom';

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

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <T.Title onClick={() => handleMenuClick('/adminMain')}>등대지기</T.Title>
            <T.MenuBox>
                <T.Menu
                    as={selectedMenu === 'adminUser' ? T.SelectedMenu : 'div'}
                    onClick={() => handleMenuClick('/adminUser', 'adminUser')}
                >
                    회원 관리
                </T.Menu>
                <T.Menu
                    as={selectedMenu === 'adminReport' ? T.SelectedMenu : 'div'}
                    onClick={() => handleMenuClick('/adminReport', 'adminReport')}
                >
                    신고 관리
                </T.Menu>
                <T.Menu
                    as={selectedMenu === 'mapDataManagement' ? T.SelectedMenu : 'div'}
                    onClick={() => handleMenuClick('/mapDataManagement', 'mapDataManagement')}
                >
                    지도 데이터 관리
                </T.Menu>
                <T.Menu
                    as={selectedMenu === 'floatingPopulationManagement' ? T.SelectedMenu : 'div'}
                    onClick={() => handleMenuClick('/floatingPopulationManagement', 'floatingPopulationManagement')}
                >
                    유동인구 데이터 관리
                </T.Menu>
                <T.Menu
                    as={selectedMenu === 'precipitationManagement' ? T.SelectedMenu : 'div'}
                    onClick={() => handleMenuClick('/precipitationManagement', 'precipitationManagement')}
                >
                    강수량 데이터 관리
                </T.Menu>
                <T.Menu
                    as={selectedMenu === 'aiSetting' ? T.SelectedMenu : 'div'}
                    onClick={() => handleMenuClick('/aiSetting', 'aiSetting')}
                >
                    AI 관리
                </T.Menu>
                <T.Menu
                    as={selectedMenu === 'evaluationIndicators' ? T.SelectedMenu : 'div'}
                    onClick={() => handleMenuClick('/evaluationIndicators', 'evaluationIndicators')}
                >
                    AI 평가 지표 관리
                </T.Menu>
            </T.MenuBox>
        </div>
    )
}
