import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './InputBoxCss';

export default function InputBox() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleMenuClick = (url, menuName) => {
        navigate(url);
    };
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleCreatePost = () => {
        // API 연동 부분
        const url = 'http://ceprj.gachon.ac.kr:60004/src/admins/notice';
        const accessToken = localStorage.getItem('accessToken');

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                postName: title,
                postContent: content
            })
        })
            .then(response => {
                if (response.ok) {
                    alert('공지사항이 성공적으로 등록되었습니다.');
                    handleMenuClick('/notice');
                    // 성공 처리 로직 추가
                } else {
                    console.error('공지사항 등록에 실패했습니다.');
                    // 실패 처리 로직 추가
                }
            })
            .catch(error => {
                console.error('API 호출 중 오류 발생:', error);
                // 오류 처리 로직 추가
            });
    };

    return (
        <S.MainContainer>
            <S.MainTitle>
                공지사항을 적으면 어플 사용자들에게 <br />안내사항을 전달할 수 있습니다.
            </S.MainTitle>
            <S.InputBox>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '70px', marginTop: '50px' }}>
                    <S.Title>제목</S.Title>
                    <S.Input
                        placeholder='제목을 입력해주세요.'
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <S.ContentContainer>
                    <S.ContentTitle>본문</S.ContentTitle>
                    <S.Input
                        placeholder='본문을 입력해주세요.'
                        value={content}
                        onChange={handleContentChange}
                    />
                </S.ContentContainer>
            </S.InputBox>
            <S.CreatePostButton hasContent={title || content} onClick={handleCreatePost}>
                등록하기
            </S.CreatePostButton>
        </S.MainContainer>
    );
}
