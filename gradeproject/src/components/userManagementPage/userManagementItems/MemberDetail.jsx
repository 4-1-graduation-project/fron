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
    document.body.style = `overflow: hidden`;
    return () => document.body.style = `overflow: auto`
  }, [])


  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    fetch(`http://ceprj.gachon.ac.kr:60004/src/admins/users/${id}`, {
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
        setMember(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);


  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Z.LeftSection>
        <SideMenu />
      </Z.LeftSection>
      <Z.RightSection>
        <Z.Header>
          <Z.BackButton>
            <img src={backbutton} alt='뒤로가기' style={{width: '50px', height:'50px'}}/>
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
                <S.FirstRow>
                  <S.NoBox>No</S.NoBox>
                  <S.No>{member ? member.userNum : ""}</S.No>
                  <S.AddressBox>집주소</S.AddressBox>
                  <S.Address>{member ? member.userAddress : ""}</S.Address>
                </S.FirstRow>
                <S.FirstRow>
                  <S.NameBox>회원이름</S.NameBox>
                  <S.Name>{member ? member.userName : ""}</S.Name>
                  <S.GenderBox>성별</S.GenderBox>
                  <S.Gender>{member ? member.userSex : ""}</S.Gender>
                </S.FirstRow>
                <S.FirstRow>
                  <S.IdBox>아이디</S.IdBox>
                  <S.Id>{member ? member.userId : ""}</S.Id>
                  <S.BirthBox>생년월일</S.BirthBox>
                  <S.Id>{member ? member.userBirth : ""}</S.Id>
                </S.FirstRow>
              </S.MemberListContainer>
            </S.Box>
          </S.Container>
        </Z.MainContainer>
      </Z.RightSection>
    </div>
  );
}
