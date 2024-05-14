import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './NoticeListCss';
import { useNavigate } from 'react-router-dom';

export default function NoticeList() {
  const navigate = useNavigate();

  const handleMenuClick = (url, menuName) => {
    navigate(url);
  };

  const [lists, setLists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchOption, setSearchOption] = useState('postName'); // 기본적으로 이름으로 검색
  const [currentPage, setCurrentPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [expandedIndex, setExpandedIndex] = useState(null); // 펼쳐진 항목의 인덱스
  const postsPerPage = 8; // 페이지당 나타낼 게시물 수

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    fetch('http://ceprj.gachon.ac.kr:60004/src/admins/notices', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setLists(data))
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

  // 리스트 항목 클릭 시 펼치기/닫기 토글
  const handleListItemClick = (index) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  // 공지사항 삭제 함수
  const handleDeleteNotice = (postNum) => {
    const token = localStorage.getItem('accessToken');
    fetch(`http://ceprj.gachon.ac.kr:60004/src/admins/notice/${postNum}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          // 삭제 성공 시 공지사항 목록을 다시 불러옴
          alert('삭제되었습니다.')
          fetchNotices();
        } else {
          throw new Error('Failed to delete notice');
        }
      })
      .catch(error => console.error('Error deleting notice:', error));
  };

  // 공지사항 목록 다시 불러오기
  const fetchNotices = () => {
    const token = localStorage.getItem('accessToken');
    fetch('http://ceprj.gachon.ac.kr:60004/src/admins/notices', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setLists(data))
      .catch(error => console.error('Error fetching data:', error));
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
        <span style={{ fontWeight: 'bold' }}>총 {lists.length}개</span>의 공지사항이 등록되어 있습니다.
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
            <div key={indexOfFirstPost + index + 1} style={{ textDecoration: "none", height: '100%' }}>
              <S.MemberItem onClick={() => handleListItemClick(indexOfFirstPost + index)}>
                <S.MemberNo>{indexOfFirstPost + index + 1}</S.MemberNo>
                <S.MemberGender>{list.postDate}</S.MemberGender>
                <S.MemberId>{list.postName}</S.MemberId>
              </S.MemberItem>
              {expandedIndex === indexOfFirstPost + index && (
                <S.ContextBox>
                  {list.postContent}
                  <S.DeleteButton onClick={() => handleDeleteNotice(list.postNum)}>X</S.DeleteButton>
                </S.ContextBox>
              )}
            </div>
          ))}
        </S.MemberContainer>
        <div style={{ display: 'flex', flexDirection: 'row', margin: '0 auto', width: '90%' }}>
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
          <S.CreatePostButton onClick={() => handleMenuClick('/noticeCreate')}>
            추가하기
          </S.CreatePostButton>
        </div>
      </S.postContainer>
    </S.MainContainer>
  );
}
