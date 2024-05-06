import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Z from "../../../components/adminMainPage/AdminMainCss";
import SideMenu from '../../../components/adminMainPage/SideMenu';
import backbutton from "../../../assets/backbutton.png";
import * as S from "./MemberListCss";

export default function MemberDetail({ member }) {



  return (
    <S.DropDownContainer>
      <S.Box>
        <S.MemberListContainer>
          <div style={{ display: 'flex', flexDirection: 'row', width:'70%' }}>
            <S.FirstRow>
              <S.NoBox>No</S.NoBox>
              <S.No>{member ? member.userCall : ""}</S.No>
            </S.FirstRow>
            <S.FirstRow>
              <S.AddressBox>집주소</S.AddressBox>
              <S.Address>{member ? member.userAddress : ""}</S.Address>
            </S.FirstRow>
            <S.FirstRow>
              <S.NameBox>회원이름</S.NameBox>
              <S.Name>{member ? member.userName : ""}</S.Name>
            </S.FirstRow>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row'  , width:'70%' }}>
            <S.FirstRow>
              <S.GenderBox>성별</S.GenderBox>
              <S.Gender>{member ? member.userSex : ""}</S.Gender>
            </S.FirstRow>
            <S.FirstRow>
              <S.IdBox>아이디</S.IdBox>
              <S.Id>{member ? member.userId : ""}</S.Id>
            </S.FirstRow>
            <S.FirstRow>
              <S.BirthBox>생년월일</S.BirthBox>
              <S.Id>{member ? member.userBirth : ""}</S.Id>
            </S.FirstRow>
          </div>
        </S.MemberListContainer>
      </S.Box>
    </S.DropDownContainer>
  );
}
