import React from 'react';
import * as R from "./AdminMainCss";
import SideMenu from "./SideMenu";
import UserReport from "./adminhomeItems/UserReport";
import AiSettings from './adminhomeItems/AiSettings';
import UserRate from './adminhomeItems/UserRate';
import DataManagement from './adminhomeItems/DataManagement';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminMain() {
  const navigate = useNavigate();
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
    <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      <R.LeftSection>
        <SideMenu />
      </R.LeftSection>
      <R.RightSection>
        <R.AmdinHeader>
          <R.LogoutButton>
            관리자님 환영합니다.
          </R.LogoutButton>
        </R.AmdinHeader>
        <R.MainContainer>
          <UserReport />
          <AiSettings />
          <UserRate />
          <DataManagement />
        </R.MainContainer>
      </R.RightSection>
    </div>
  )
}
