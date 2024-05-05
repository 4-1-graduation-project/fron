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
    document.body.style = `overflow: hidden`;
    return () => document.body.style = `overflow: auto`
  }, [])

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await fetch(`http://ceprj.gachon.ac.kr:60004/src/admins/reports/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch reports');
        }
        const data = await response.json();
        setReport(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchReports();
  }, [id]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Z.LeftSection>
        <SideMenu />
      </Z.LeftSection>
      <Z.RightSection>
        <Z.Header>
          <Z.BackButton>
            <img src={backbutton} alt='뒤로가기' style={{ width: '50px', height: '50px' }} />
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
                  <R.Date>{report ? report.reportTime : ""}</R.Date>
                  <R.NameBox>이름</R.NameBox>
                  <R.Name>{report ? report.userName : ""}</R.Name>
                </S.FirstRow>
                <S.SecondRow>
                  <R.TitleBox>장소</R.TitleBox>
                  <R.Title>{report ? report.placed : ""}</R.Title>
                  <R.ContentBox>문의내용</R.ContentBox>
                  <R.Content>{report ? report.details : ""}</R.Content>
                </S.SecondRow>
              </S.MemberListContainer>
            </S.Box>
          </S.Container>
        </Z.MainContainer>
      </Z.RightSection>
    </div>
  )
}
