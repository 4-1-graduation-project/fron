import React, { useState, useEffect } from 'react';
import * as S from './NoticeListCss';
import { Title } from './../../userReportPage/userReportItems/ReportListCss';

export default function NoticeList() {
  const [lists, setLists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchOption, setSearchOption] = useState('postName'); // 기본적으로 이름으로 검색
  const [currentPage, setCurrentPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const postsPerPage = 8; // 페이지당 나타낼 게시물 수

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    fetch('http://localhost:60004/notice/Data.json', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        setLists(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // 검색 함수
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // 옵션 변경 함수
  const handleOptionChange = (event) => {
    setSearchOption(event.target.value);
    setSearchTerm(''); // 검색 옵션 변경 시 검색어 초기화
  };

  // 현재 페이지의 첫 번째 회원의 인덱스
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // 페이지 변경
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setActivePage(pageNumber); // 클릭한 페이지를 활성화 상태로 설정
  };

  // 검색된 회원 필터링
  const filteredLists = lists.filter(list => {
    // 선택된 옵션에 따라 검색 조건 변경
    switch (searchOption) {
      case 'postName':
        return list.postName.toLowerCase().includes(searchTerm.toLowerCase());
      case 'postDate':
        return list.postDate.toLowerCase().includes(searchTerm.toLowerCase());
      default:
        return true;
    }
  });

  return (
    <S.MainContainer>
      <S.MainTitle>
        공지사항
      </S.MainTitle>
      <S.SubTitle>
        <span style={{ fontWeight: 'bold' }}>총 {lists.length}개</span>의 공지사항이 등록되어있습니다.
      </S.SubTitle>
      <S.SearchBox>
        <div style={{ width: '250px', marginLeft: 'auto' }}>
          {/* 검색 옵션 드롭다운 */}
          <S.Select value={searchOption} onChange={handleOptionChange} >
            <option value="postName">제목</option>
            <option value="postDate">날짜</option>
          </S.Select>
        </div>
        <div style={{ width: '400px', display: 'flex', justifyContent: 'left' }}>
          <S.SearchInput
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </S.SearchBox>
      <S.postContainer>
        <S.MemberContainer>
          {filteredLists.slice(indexOfFirstPost, indexOfLastPost).map((list, index) => (
            <div key={indexOfFirstPost + index + 1} style={{ textDecoration: "none" }}>
              <S.MemberItem>
                <S.MemberNo>{indexOfFirstPost + index + 1}</S.MemberNo>
                <S.MemberGender>{list.postDate}</S.MemberGender>
                <S.MemberId>{list.postName}</S.MemberId>
              </S.MemberItem>
            </div>
          ))}
        </S.MemberContainer>
        <div style={{display: 'flex', flexDirection: 'row', margin:'0 auto', width:'90%'}}>
          <S.PaginationBox>
            {[...Array(Math.ceil(filteredLists.length / postsPerPage)).keys()].map((pageNumber) => (
              <S.PageNumber
                key={pageNumber}
                onClick={() => paginate(pageNumber + 1)}
                active={pageNumber + 1 === activePage}
              >
                {pageNumber + 1}
              </S.PageNumber>
            ))}
          </S.PaginationBox>
          <S.CreatePostButton>
            추가하기
          </S.CreatePostButton>
        </div>
      </S.postContainer>
    </S.MainContainer>
  )
}
