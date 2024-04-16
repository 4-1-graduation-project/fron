import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Z from "../../../components/adminMainPage/AdminMainCss";
import SideMenu from '../../../components/adminMainPage/SideMenu';
import backbutton from "../../../assets/backbutton.png";
import * as S from "./MemberListCss";

export default function MemberDetail() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/memberList/Data.json/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setMember(data))
      .catch(error => {
        console.error('Error fetching member data:', error);//API없어서 에러나는듯 함
        setMember(null); // Reset member state to null
      });
  }, [id]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Z.LeftSection>
        <SideMenu />
      </Z.LeftSection>
      <Z.RightSection>
        <Z.Header>
          <Z.BackButton>
            <img src={backbutton} alt='뒤로가기' />
          </Z.BackButton>
          <Z.LogoutButton>
            로그아웃
          </Z.LogoutButton>
        </Z.Header>
        <Z.MainContainer>
          <S.Container>
            <S.Box>
              <S.Title>회원 상세 관리</S.Title>
              <S.MemberListContainer>
                {/* Display member details */}
                <S.FirstRow>
                  <S.NoBox>No</S.NoBox>
                  <S.No>{member ? member.id : ""}</S.No>
                  <S.AddressBox>집주소</S.AddressBox>
                  <S.Address>{member ? member.address : ""}</S.Address>
                </S.FirstRow>
                <S.FirstRow>
                  <S.NameBox>회원이름</S.NameBox>
                  <S.Name>{member ? member.name : ""}</S.Name>
                  <S.GenderBox>성별</S.GenderBox>
                  <S.Gender>{member ? member.gender : ""}</S.Gender>
                </S.FirstRow>
                <S.FirstRow>
                  <S.IdBox>아이디</S.IdBox>
                  <S.Id>{member ? member.Id : ""}</S.Id>
                  {/* Display other member details */}
                </S.FirstRow>
              </S.MemberListContainer>
            </S.Box>
          </S.Container>
        </Z.MainContainer>
      </Z.RightSection>
    </div>
  );
}
