import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as A from "../../userManagementPage/userManagementItems/MemberListCss";
import * as S from "./ReportListCss";

export default function MemberList() {
  const [reports, setReports] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchOption, setSearchOption] = useState('author'); // 기본적으로 이름으로 검색

  const postsPerPage = 10; // 페이지당 나타낼 게시물 수

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        //http://ceprj.gachon.ac.kr:60004/src/admins/reports
        const response = await fetch('http://localhost:60004/userReport/Data.json', {
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

  // 현재 페이지의 첫 번째 회원의 인덱스
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;


  // 페이지 변경
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => document.body.style = `overflow: auto`
  }, [])

  // 옵션 변경 함수
  const handleOptionChange = (event) => {
    setSearchOption(event.target.value);
  };

  // 검색 함수
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // 검색된 회원 필터링
  const filteredreports = reports.filter(report => {
    // 선택된 옵션에 따라 검색 조건 변경
    switch (searchOption) {
      case 'title':
        return report.title.toLowerCase().includes(searchTerm.toLowerCase());
      case 'author':
        return report.author.toLowerCase().includes(searchTerm.toLowerCase());
      case 'date':
        // 수정된 부분: member.date 대신 member.date.toLowerCase() 호출
        return report.date.toLowerCase().includes(searchTerm.toLowerCase());
      case 'content':
        return report.content.toLowerCase().includes(searchTerm.toLowerCase());
      default:
        return true;
    }
  });

  return (
    <A.Container>
      <A.Box>
        <A.Title>
          <div>신고 관리</div>
          {/* 검색 창 */}
          <A.SearchBox>
            <A.Input
              type="text"
              placeholder="검색어를 입력하세요"
              value={searchTerm}
              onChange={handleSearch}
            />
            {/* 검색 옵션 드롭다운 */}
            <select value={searchOption} onChange={handleOptionChange}>
              <option value="title">제목</option>
              <option value="author">회원 이름</option>
              <option value="date">날짜</option>
              <option value="content">내용</option>
            </select>
          </A.SearchBox>
        </A.Title>

        <A.FieldContainer>
          <S.DateField>문의날짜</S.DateField>
          <S.UserNameField>회원 이름</S.UserNameField>
          <S.TitleField>장소</S.TitleField>
          <S.ContentField>문의 내용</S.ContentField>
        </A.FieldContainer>
        <A.MemberContainer>
          {filteredreports.slice(indexOfFirstPost, indexOfLastPost).map((report, index) => (
            <Link
              to={`/adminReport/${index + 1}`} // Pass the report index
              key={indexOfFirstPost + index + 1}
              style={{ textDecoration: "none", height: '50px' }}
            >
              <A.MemberItem>
                <S.ReportDate>{report.date}</S.ReportDate>
                <S.ReportName>{report.author}</S.ReportName>
                <S.ReportTitle>{report.title}</S.ReportTitle>
                <S.ReportContent>{report.content}</S.ReportContent>
                {/* 
                <S.ReportDate>{report.reportTime}</S.ReportDate>
                <S.ReportName>{report.userName}</S.ReportName>
                <S.ReportTitle>{report.placed}</S.ReportTitle>
                <S.ReportContent>{report.details}</S.ReportContent>
                */}
              </A.MemberItem>
            </Link>
          ))}
        </A.MemberContainer>
        {/* 페이지네이션 */}
        <A.PaginationBox>
          {[...Array(Math.ceil(filteredreports.length / postsPerPage)).keys()].map((pageNumber) => (
            <A.PageNumber
              key={pageNumber}
              onClick={() => paginate(pageNumber + 1)}
            >
              {pageNumber + 1}
            </A.PageNumber>
          ))}
        </A.PaginationBox>
      </A.Box>
    </A.Container>
  );
}
