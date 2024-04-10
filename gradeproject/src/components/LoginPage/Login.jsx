import React from 'react'
import * as S from "../LoginPage/LoginPagecss";
import login from "../../assets/login.png";
import LoginBox from "./LoginBox";
export default function Login() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' , overflow: 'hidden'}}>
            <S.LeftSection>
                <img src={login} alt='로그인배경사진' />
            </S.LeftSection>
            <S.RightSection>
                <S.Container>
                    <S.FirstTitle>
                        당신의<br />귀갓길을<br />안전하게,
                    </S.FirstTitle>
                    <S.SecondTitle>
                        등대지기
                    </S.SecondTitle>
                    <S.LoginContainer>
                        <LoginBox />
                    </S.LoginContainer>
                    <S.DownloadBox>
                        모바일 앱 다운
                    </S.DownloadBox>
                </S.Container>
            </S.RightSection>
        </div>
    )
}
