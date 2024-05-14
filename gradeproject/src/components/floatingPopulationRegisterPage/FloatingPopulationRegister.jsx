import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Z from "../adminMainPage/AdminMainCss";
import SideMenu from "../../components/adminMainPage/SideMenu";
import backbutton from "../../assets/backbutton.png";
import * as A from "../../components/mapDataManagementPage/mapDataItems/MapDataListCss";
import excel from "../../assets/excel.png";

export default function FloatingPopulationRegister() {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('파일을 업로드해주세요.');
    const [fileUploaded, setFileUploaded] = useState(true);

    const handleMenuClick = (url, menuName) => {
        navigate(url);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setUploadStatus('');
        setFileUploaded(false);
    };

    const handleFileCancel = () => {
        setSelectedFile(null);
        setUploadStatus('파일을 업로드해주세요.');
        setFileUploaded(true);
    };

    const handleFileUpload = () => {
        const formData = new FormData();
        formData.append('file', selectedFile);
        // FormData 내용 확인
        for (let pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        const token = localStorage.getItem('accessToken');
        fetch('http://ceprj.gachon.ac.kr:60004/src/admins/flowPop/uploadExcelFile', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    alert('파일이 업로드되었습니다.');
                    // 업로드 성공 시 추가 작업 수행
                } else {
                    throw new Error('파일 업로드 실패');
                }
            })
            .catch(error => console.error('Error uploading file:', error));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '700px' }}>
            <Z.LeftSection>
                <SideMenu />
            </Z.LeftSection>
            <Z.RightSection>
                <Z.FileHeader>
                    <Z.BackButton onClick={() => handleMenuClick('/floatingPopulationManagement')}>
                        <img src={backbutton} alt='뒤로가기' style={{ width: '30px', height: '30px' }} />
                    </Z.BackButton>
                    <Z.LogoutButton>
                        관리자님 환영합니다.
                    </Z.LogoutButton>
                </Z.FileHeader>
                <Z.FileContainer>
                    <Z.RegisterTitle>
                        <Z.Title2>
                            파일등록
                        </Z.Title2>
                        {/* 파일 선택 버튼 */}
                        <A.RegisterBox>
                            <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                            <button onClick={() => document.querySelector('input[type="file"]').click()} style={{ backgroundColor: 'transparent', color: 'black', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
                                파일 업로드
                            </button>
                        </A.RegisterBox>
                    </Z.RegisterTitle>
                    {/* 업로드된 파일 정보 표시 */}
                    <Z.FileBox>
                        {fileUploaded && (
                            <div className="square shadow-6" style={{ display: 'flex', flexDirection: 'column', height: '300px', width: '500px' }} >
                                <img src={excel} alt='액셀' style={{ width: '200px', height: '200px' }} />
                                <p>{uploadStatus}</p>
                            </div>
                        )}
                        {selectedFile && (
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <p>파일명: {selectedFile.name}</p>
                                <p>파일 크기: {selectedFile.size} bytes</p>
                                <p>파일 타입: {selectedFile.type}</p>
                                <button onClick={handleFileCancel}>파일 취소</button>
                            </div>
                        )}
                    </Z.FileBox>
                    <Z.SendButtonBox onClick={handleFileUpload}>
                        파일 전송
                    </Z.SendButtonBox>
                </Z.FileContainer>
            </Z.RightSection>
        </div>
    );
}
