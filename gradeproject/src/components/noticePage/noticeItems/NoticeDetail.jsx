import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import * as Z from "../../adminMainPage/AdminMainCss";
import backbutton from "../../../assets/backbutton.png";
import SideMenu from "../../../components/adminMainPage/SideMenu";
import DetailBox from "./DetailBox";

export default function NoticeDetail() {
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
        <Z.NoticeAmdinHeader>
          <Z.BackButton onClick={() => handleMenuClick('/notice')}>
            <img src={backbutton} alt='뒤로가기' style={{ width: '30px', height: '30px' }} />
          </Z.BackButton>
          <Z.LogoutButton>
            관리자님 환영합니다.
          </Z.LogoutButton>
        </Z.NoticeAmdinHeader>
        <Z.NoticeMainContainer>
          <DetailBox />
        </Z.NoticeMainContainer>
      </Z.RightSection>
    </div>
  )
}