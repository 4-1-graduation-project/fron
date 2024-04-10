import React from 'react'
import * as R from "./AdminMainCss";
import SideMenu from "./SideMenu";
import UserReport from "./adminhomeItems/UserReport";
import AiSettings from './adminhomeItems/AiSettings';
import UserRate from './adminhomeItems/UserRate';
import DataManagement from './adminhomeItems/DataManagement';

export default function AdminMain() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <R.LeftSection>
        <SideMenu />
      </R.LeftSection>
      <R.RightSection>
        <R.Header>
          <R.LogoutButton>
            로그아웃
          </R.LogoutButton>
        </R.Header>
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

