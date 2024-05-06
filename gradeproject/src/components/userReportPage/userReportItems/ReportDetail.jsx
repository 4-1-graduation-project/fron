import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import L from 'leaflet'; // Leaflet.js 불러오기
import * as Z from "../../../components/adminMainPage/AdminMainCss";
import SideMenu from '../../../components/adminMainPage/SideMenu';
import backbutton from "../../../assets/backbutton.png";
import * as S from "../../userManagementPage/userManagementItems/MemberListCss";
import * as R from "./ReportListCss";

// 지도 스타일 정의
const mapStyles = {
  width: '100%',
  height: '100%',
};

export default function ReportDetail() {

  const { id } = useParams();
  const [report, setReport] = useState(null);
  const [map, setMap] = useState(null); // Leaflet.js 지도 객체 상태 추가

  const navigate = useNavigate();

  const handleMenuClick = (url, menuName) => {
    navigate(url);
  };

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => document.body.style = `overflow: auto`
  }, []);

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
        // API로부터 받아온 위치 정보를 기반으로 지도를 생성합니다.
        if (data.reportPlaced) {
          const map = L.map('map').setView([36.6272, 127.5152], 10); // Leaflet.js 지도 생성
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map); // 기본 타일 레이어 추가
          L.marker([36.6272, 127.5152]).addTo(map); // 마커 추가 (임시 위치)
          setMap(map); // 지도 객체 상태 업데이트
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchReports();
  }, [id]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '700px' }}>
      <Z.LeftSection>
        <SideMenu />
      </Z.LeftSection>
      <Z.RightSection>
        <Z.ReportDetailHeader>
          <Z.BackButton onClick={() => handleMenuClick('/adminReport')}>
            <img src={backbutton} alt='뒤로가기' style={{ width: '30px', height: '30px' }} />
          </Z.BackButton>
          <Z.LogoutButton>
            관리자님 환영합니다.
          </Z.LogoutButton>
        </Z.ReportDetailHeader>
        <Z.MainContainer>
          <S.NoScrollContainer>
            <S.Title>
              {report ? report.userName : ""}님의 신고내역
            </S.Title>
            <S.MapContainer>
              <S.MapBox id="map" style={mapStyles}>
              </S.MapBox> {/* Leaflet.js 지도를 표시할 div 추가 */}
              <S.MemberListContainer>
                <S.ReportItem>
                  <S.ReportItemTitle>신고위치</S.ReportItemTitle>
                  <S.ReportItemContent>{report ? report.reportPlaced : ""}</S.ReportItemContent>
                </S.ReportItem>
                <S.ReportItem>
                  <S.ReportItemTitle>위험정도</S.ReportItemTitle>
                  <S.ReportItemContent>{report ? report.reportDegree : ""}</S.ReportItemContent>
                </S.ReportItem>
                <S.ReportItem>
                  <S.ReportItemTitle>신고시간</S.ReportItemTitle>
                  <S.ReportItemContent>{report ? report.reportTime : ""}</S.ReportItemContent>
                </S.ReportItem>
                <S.ReportItem>
                  <S.ReportItemTitle>신고자 이름</S.ReportItemTitle>
                  <S.ReportItemContent>{report ? report.userName : ""}</S.ReportItemContent>
                </S.ReportItem>
                <S.ReportItem>
                  <S.ReportItemTitle>신고유형</S.ReportItemTitle>
                  <S.ReportItemContent>{report ? report.reportCategory : ""}</S.ReportItemContent>
                </S.ReportItem>
                <S.ReportItem>
                  <S.ReportItemTitle>신고 내용</S.ReportItemTitle>
                  <S.ReportItemContent>{report ? report.reportDetails : ""}</S.ReportItemContent>
                </S.ReportItem>
              </S.MemberListContainer>
            </S.MapContainer>
          </S.NoScrollContainer>
        </Z.MainContainer>
      </Z.RightSection>
    </div>
  );
}
