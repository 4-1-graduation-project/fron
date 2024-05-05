import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from "./MemberListCss";
import MemberDetail from "./MemberDetail"; // 회원 상세 정보 컴포넌트
import { useParams } from "react-router";

export default function MemberList() {
  const [members, setMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchOption, setSearchOption] = useState('name'); // 기본적으로 이름으로 검색
  const [selectedMember, setSelectedMember] = useState(null); // 선택된 회원

  const postsPerPage = 10; // 페이지당 나타낼 게시물 수

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    //http://ceprj.gachon.ac.kr:60004/src/admins/users
    fetch('http://localhost:60004/memberList/Data.json', {
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
        setMembers(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // 현재 페이지의 첫 번째 회원의 인덱스
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // 페이지 변경
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // 검색 함수
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // 옵션 변경 함수
  const handleOptionChange = (event) => {
    setSearchOption(event.target.value);
  };

  // 회원 클릭 시 선택된 회원 설정
  const handleMemberClick = (member) => {
    setSelectedMember(selectedMember === member ? null : member);
  };

  // 검색된 회원 필터링
  const filteredMembers = members.filter(member => {
    // 선택된 옵션에 따라 검색 조건 변경
    switch (searchOption) {
      case 'userName':
        return member.userName.toLowerCase().includes(searchTerm.toLowerCase());
      case 'userId':
        return member.userId.toLowerCase().includes(searchTerm.toLowerCase());
      case 'userAddress':
        return member.userAddress.toLowerCase().includes(searchTerm.toLowerCase());
      case 'userSex':
        return member.userSex.toLowerCase().includes(searchTerm.toLowerCase());
      default:
        return true;
    }
  });

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => document.body.style = `overflow: auto`
  }, [])

  return (
    <S.Container>
      <S.Box>
        <S.Title>
          {/* 검색 창 */}
          <S.SearchBox>
            <S.memberInput
              type="text"
              placeholder="검색어를 입력하세요"
              value={searchTerm}
              onChange={handleSearch}
            />
            {/* 검색 옵션 드롭다운 */}
            <select value={searchOption} onChange={handleOptionChange} style={{ borderRadius: '20px', borderColor: '#3296D7', height: '100%', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
              <option value="userName">이름</option>
              <option value="userId">아이디</option>
              <option value="userAddress">주소</option>
              <option value="userSex">성별</option>
            </select>
            {/* 페이지네이션 */}
            <S.PaginationBox>
              {[...Array(Math.ceil(filteredMembers.length / postsPerPage)).keys()].map((pageNumber) => (
                <S.PageNumber
                  key={pageNumber}
                  onClick={() => paginate(pageNumber + 1)}
                >
                  {pageNumber + 1}
                </S.PageNumber>
              ))}
            </S.PaginationBox>
          </S.SearchBox>
        </S.Title>
        <S.FieldContainer>
          <S.NoField>No</S.NoField>
          <S.UserNameField>이름</S.UserNameField>
          <S.IdField>아이디</S.IdField>
          <S.GenderField>성별</S.GenderField>
          <S.AddressField>집주소</S.AddressField>
        </S.FieldContainer>
        <S.MemberContainer>
          {filteredMembers.slice(indexOfFirstPost, indexOfLastPost).map((member, index) => (
            <div key={indexOfFirstPost + index + 1} style={{ textDecoration: "none" }}>
              <S.MemberItem onClick={() => handleMemberClick(member)}>
                <S.MemberNo>{indexOfFirstPost + index + 1}</S.MemberNo>
                <S.MemberName>{member.name}</S.MemberName>
                <S.MemberId>{member.Id}</S.MemberId>
                <S.MemberGender>{member.gender}</S.MemberGender>
                <S.MemberAddress>{member.address}</S.MemberAddress>
              </S.MemberItem>
              {/* 드롭다운 메뉴 */}
              {selectedMember === member && (
                <MemberDetail member={selectedMember} onClose={() => setSelectedMember(null)} />
              )}
            </div>
          ))}
        </S.MemberContainer>

      </S.Box>
    </S.Container>
  );
}
