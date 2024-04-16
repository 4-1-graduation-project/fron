import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Z from "../../../components/adminMainPage/AdminMainCss";
import SideMenu from '../../../components/adminMainPage/SideMenu';
import backbutton from "../../../assets/backbutton.png";
import * as S from "../../userManagementPage/userManagementItems/MemberListCss";
import * as R from "./ReportListCss";

export default function ReportDetail() {

  const { id } = useParams();
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/userReport/Data.json/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setReport(data))
      .catch(error => {
        console.error('Error fetching member data:', error);//API없어서 에러나는듯 함
        setReport(null); // Reset member state to null
      });
  }, [id]);
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Z.LeftSection>
        <SideMenu />
      </Z.LeftSection>
      <Z.RightSection>
        <Z.Header>
          <Z.BackButton>
            <img src={backbutton} alt='뒤로가기' />
          </Z.BackButton>
          <Z.LogoutButton>
            로그아웃
          </Z.LogoutButton>
        </Z.Header>
        <Z.MainContainer>
          <S.Container>
            <S.Box>
              <S.Title>신고 상세 관리</S.Title>
              <S.MemberListContainer>
                <S.FirstRow>
                  <R.DateBox>문의 날짜</R.DateBox>
                  <R.Date>{report ? report.id : ""}</R.Date>
                  <R.NameBox>이름</R.NameBox>
                  <R.Name>{report ? report.address : ""}</R.Name>
                </S.FirstRow>
                <S.SecondRow>
                  <R.TitleBox>문의제목</R.TitleBox>
                  <R.Title>{report ? report.name : ""}</R.Title>
                  <R.ContentBox>문의내용</R.ContentBox>
                  <R.Content>{report ? report.gender : ""}</R.Content>
                </S.SecondRow>
              </S.MemberListContainer>
            </S.Box>
          </S.Container>
        </Z.MainContainer>
      </Z.RightSection>
    </div>
  )
}
