import React from 'react'
import * as R from "./AdminMainCss";
import SideMenu from './SideMenu';


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
          <R.GridItem color="#CBCDFF"></R.GridItem>
          <R.GridItem color="#FFC3C3"></R.GridItem>
          <R.GridItem color="#746F00"></R.GridItem>
          <R.GridItem color="#D6FFCF"></R.GridItem>
        </R.MainContainer>
      </R.RightSection>
    </div>
  )
}
