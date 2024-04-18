import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as K from "../LoginPage/LoginPagecss";

export default function LoginBox() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const validUsername = 'qwe';
    const validPassword = 'qwe';

    if (username === validUsername && password === validPassword) {
      navigate('/adminMain');
      setLoggedIn(true);
    } else {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <form style={{display:'flex', flexDirection: 'column', gap: '30px'}} onKeyPress={handleKeyPress}>
        <K.IDInputBox>
            <K.IdTitle>ID</K.IdTitle>
            <K.IdInput 
              placeholder='아이디' 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
        </K.IDInputBox>
        <K.PwdInputBox>
            <K.PwdTitle>PW</K.PwdTitle>
            <K.PwdInput 
              placeholder='비밀번호'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        </K.PwdInputBox>
        <K.IntroduceBox>
            유동인구 표시 지도 제공<br/>
            인구 밀집도 정보 제공
        </K.IntroduceBox>
        <K.LoginButtonBox onClick={handleLogin}>
            로그인
        </K.LoginButtonBox>
    </form>
  )
}
