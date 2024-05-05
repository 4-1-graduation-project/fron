import React , { useEffect } from 'react'
import * as S from "../LoginPage/LoginPagecss";
import login from "../../assets/login.png";
import LoginBox from "./LoginBox";
import apkdownload from "../../assets/apkdownload.jpg";

export default function Login() {
    useEffect(() => {
        document.body.style = `overflow: hidden`;
        return () => document.body.style = `overflow: auto`
    }, [])
    return (
        <div style={{ display: 'flex', flexDirection: 'row' , overflow: 'hidden'}}>
            <S.LeftSection>
                <img src={login} alt='로그인배경사진' style={{width: '100%', height: '100%'}}/>
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
                        <img src={apkdownload} alt='다운' style={{width: '100%', height: '40%'}} />
                    </S.DownloadBox>
                </S.Container>
            </S.RightSection>
        </div>
    )
}
