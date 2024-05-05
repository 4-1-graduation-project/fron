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
    <S.DropDownContainer>
      <S.Box>
        <S.MemberListContainer>
          <div style={{ display: 'flex', flexDirection: 'row', width:'70%' }}>
            <S.FirstRow>
              <S.NoBox>No</S.NoBox>
              <S.No>{member ? member.userNum : ""}1</S.No>
            </S.FirstRow>
            <S.FirstRow>
              <S.AddressBox>집주소</S.AddressBox>
              <S.Address>{member ? member.userAddress : ""}가평군 고상리</S.Address>
            </S.FirstRow>
            <S.FirstRow>
              <S.NameBox>회원이름</S.NameBox>
              <S.Name>{member ? member.userName : ""}김성섭</S.Name>
            </S.FirstRow>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row'  , width:'70%' }}>
            <S.FirstRow>
              <S.GenderBox>성별</S.GenderBox>
              <S.Gender>{member ? member.userSex : ""}남자</S.Gender>
            </S.FirstRow>
            <S.FirstRow>
              <S.IdBox>아이디</S.IdBox>
              <S.Id>{member ? member.userId : ""}wdd789q</S.Id>
            </S.FirstRow>
            <S.FirstRow>
              <S.BirthBox>생년월일</S.BirthBox>
              <S.Id>{member ? member.userBirth : ""}2001-01-15</S.Id>
            </S.FirstRow>
          </div>
        </S.MemberListContainer>
      </S.Box>
    </S.DropDownContainer>
  );
}
