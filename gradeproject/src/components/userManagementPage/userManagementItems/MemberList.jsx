import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from "./MemberListCss";

export default function MemberList() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/memberList/Data.json')
      .then(response => response.json())
      .then(data => setMembers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <S.Container>
      <S.Box>
        <S.Title>회원 관리</S.Title>
        <S.FieldContainer>
          <S.NoField>No</S.NoField>
          <S.UserNameField>이름</S.UserNameField>
          <S.IdField>아이디</S.IdField>
          <S.AddressField>집주소</S.AddressField>
          <S.GenderField>성별</S.GenderField>
        </S.FieldContainer>
        <S.MemberContainer>
          {members.map((member, index) => (
            <Link
              to={`/adminUser/${member.id}`} // Pass only the member id
              key={index}
              style={{ textDecoration: "none" }}
            >
              <S.MemberItem>
                <S.MemberNo>{index + 1}</S.MemberNo>
                <S.MemberName>{member.name}</S.MemberName>
                <S.MemberId>{member.Id}</S.MemberId>
                <S.MemberAddress>{member.address}</S.MemberAddress>
                <S.MemberGender>{member.gender}</S.MemberGender>
              </S.MemberItem>
            </Link>
          ))}
        </S.MemberContainer>
      </S.Box>
    </S.Container>
  );
}
