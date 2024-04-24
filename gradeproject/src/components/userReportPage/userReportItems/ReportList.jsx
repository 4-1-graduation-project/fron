import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as A from "../../userManagementPage/userManagementItems/MemberListCss";
import * as S from "./ReportListCss";

export default function MemberList() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await fetch('http://ceprj.gachon.ac.kr:60004/src/admins/reports', {
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
        setReports(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchReports();
  }, []);
  
  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => document.body.style = `overflow: auto`
  }, [])


  return (
    <A.Container>
      <A.Box>
        <A.Title>신고 관리</A.Title>
        <A.FieldContainer>
          <S.DateField>문의날짜</S.DateField>
          <S.UserNameField>회원 이름</S.UserNameField>
          <S.TitleField>장소</S.TitleField>
          <S.ContentField>문의 내용</S.ContentField>
        </A.FieldContainer>
        <A.MemberContainer>
          {reports.map((report, index) => (
            <Link
              to={`/adminReport/${index + 1}`} // Pass the report index
              key={index}
              style={{ textDecoration: "none", height: '50px' }}
            >
              <A.MemberItem>
                <S.ReportDate>{report.reportTime}</S.ReportDate>
                <S.ReportName>{report.userName}</S.ReportName>
                <S.ReportTitle>{report.placed}</S.ReportTitle>
                <S.ReportContent>{report.details}</S.ReportContent>
              </A.MemberItem>
            </Link>
          ))}
        </A.MemberContainer>
      </A.Box>
    </A.Container>
  );
}
