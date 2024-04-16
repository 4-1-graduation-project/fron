import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as A from "../../userManagementPage/userManagementItems/MemberListCss";
import * as S from "./ReportListCss";
export default function MemberList() {
  const [reports, setreports] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/userReport/Data.json')
      .then(response => response.json())
      .then(data => setreports(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <A.Container>
      <A.Box>
        <A.Title>신고 관리</A.Title>
        <A.FieldContainer>
          <S.DateField>문의날짜</S.DateField>
          <S.UserNameField>회원 이름</S.UserNameField>
          <S.TitleField>문의제목 </S.TitleField>
          <S.ContentField>문의 내용</S.ContentField>
        </A.FieldContainer>
        <A.MemberContainer>
          {reports.map((report, index) => (
            <Link
              to={`/adminUser/${report.id}`} // Pass only the member id
              key={index}
              style={{ textDecoration: "none" }}
            >
              <A.MemberItem>
                <S.ReportDate>{report.date}</S.ReportDate>
                <S.ReportName>{report.author}</S.ReportName>
                <S.ReportTitle>{report.title}</S.ReportTitle>
                <S.ReportContent>{report.content}</S.ReportContent>
              </A.MemberItem>
            </Link>
          ))}
        </A.MemberContainer>
      </A.Box>
    </A.Container>
  );
}
