import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as K from "../LoginPage/LoginPagecss";
import axios from 'axios';

export default function LoginBox() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const apiUrl = 'http://ceprj.gachon.ac.kr:60004/src/admins/login'; // API 엔드포인트
    const requestData = {
      adminId: username, // 입력된 아이디 값
      adminPw: password  // 입력된 비밀번호 값
    };

    if (username !== 'admin1' || password !== '1234') {
      // 아이디 또는 비밀번호가 일치하지 않을 때 에러 표시
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
      return;
    }

    axios.post(apiUrl, requestData)
      .then(response => {
        // 로그인 성공 시
        if (response.status === 200) {
          const { accessToken } = response.data;

          // accessToken을 로컬 스토리지에 저장
          localStorage.setItem('accessToken', accessToken);

          // 로그인 성공 후 이동할 페이지로 이동
          navigate('/adminMain');
        } else {
          // 로그인 실패 시
          alert('서버에서 로그인에 실패했습니다.');
        }
      })
      .catch(error => {
        // API 호출 실패 시
        console.error('API 호출 에러:', error);
        alert('서버와의 통신 중 오류가 발생했습니다.');
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '30px' }} onKeyPress={handleKeyPress}>
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
        유동인구 표시 지도 제공<br />
        인구 밀집도 정보 제공
      </K.IntroduceBox>
      <K.LoginButtonBox onClick={handleLogin}>
        로그인
      </K.LoginButtonBox>
    </form>
  )
}
