import React from 'react'
import * as K from "../LoginPage/LoginPagecss";

export default function LoginBox() {
  return (
    <div style={{display:'flex', flexDirection: 'column', gap: '30px'}}>
        <K.IDInputBox>
            <K.IdTitle>ID</K.IdTitle>
            <K.IdInput placeholder='아이디' />
        </K.IDInputBox>
        <K.PwdInputBox>
            <K.PwdTitle>PW</K.PwdTitle>
            <K.PwdInput placeholder='비밀번호'/>
        </K.PwdInputBox>
        <K.IntroduceBox>
            유동인구 표시 지도 제공<br/>
            인구 밀집도 정보 제공
        </K.IntroduceBox>
        <K.LoginButtonBox>
            로그인
        </K.LoginButtonBox>
    </div>
  )
}
