import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from "./MemberListCss";

export default function MemberList() {
  const [members, setMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const postsPerPage = 10; // 페이지당 나타낼 게시물 수

  useEffect(() => {
    fetch('http://localhost:3000/memberList/Data.json')
      .then(response => response.json())
      .then(data => setMembers(data))
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

  // 검색된 회원 필터링
  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => document.body.style = `overflow: auto`
  }, [])


  return (
    <S.Container>
      <S.Box>
        <S.Title>
          <div>회원 관리</div>
          <S.SearchBox>
            <input
              type="text"
              placeholder="이름으로 검색"
              value={searchTerm}
              onChange={handleSearch}
            />
          </S.SearchBox>
        </S.Title>
        <S.FieldContainer>
          <S.NoField>No</S.NoField>
          <S.UserNameField>이름</S.UserNameField>
          <S.IdField>아이디</S.IdField>
          <S.AddressField>집주소</S.AddressField>
          <S.GenderField>성별</S.GenderField>
        </S.FieldContainer>
        <S.MemberContainer>
          {filteredMembers.slice(indexOfFirstPost, indexOfLastPost).map((member, index) => (
            <Link
              to={`/adminUser/${member.id}`} // 회원 ID만 전달
              key={indexOfFirstPost + index + 1}
              style={{ textDecoration: "none" }}
            >
              <S.MemberItem>
                <S.MemberNo>{indexOfFirstPost + index + 1}</S.MemberNo>
                <S.MemberName>{member.name}</S.MemberName>
                <S.MemberId>{member.Id}</S.MemberId>
                <S.MemberAddress>{member.address}</S.MemberAddress>
                <S.MemberGender>{member.gender}</S.MemberGender>
              </S.MemberItem>
            </Link>
          ))}
        </S.MemberContainer>
        {/* 페이지네이션 */}
        <S.PaginationBox>
          {[...Array(Math.ceil(members.length / postsPerPage)).keys()].map((pageNumber) => (
            <S.PageNumber
              key={pageNumber}
              onClick={() => paginate(pageNumber + 1)}
            >
              {pageNumber + 1}
            </S.PageNumber>
          ))}
        </S.PaginationBox>
      </S.Box>
    </S.Container>
  );
}
