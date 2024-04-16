import React, { useState, useEffect } from 'react';
import * as T from "./AdminMainCss";
import { useNavigate, useLocation } from 'react-router-dom';

export default function SideMenu() {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedMenu, setSelectedMenu] = useState('');

    useEffect(() => {
        // 현재 URL을 기반으로 선택된 메뉴를 설정합니다.
        switch (location.pathname) {
            case '/adminUser':
                setSelectedMenu('adminUser');
                break;
            // 다른 메뉴들도 동일하게 처리합니다.
            default:
                setSelectedMenu('');
                break;
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
                <T.Menu>신고 관리</T.Menu>
                <T.Menu>제도 데이터 관리</T.Menu>
                <T.Menu>유동인구 데이터 관리</T.Menu>
                <T.Menu>강수량 데이터 관리</T.Menu>
                <T.Menu>AI 관리</T.Menu>
                <T.Menu>AI 평가 지표 관리</T.Menu>
            </T.MenuBox>
        </div>
    )
}
