import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import * as S from "../../userManagementPage/userManagementItems/MemberListCss";
import * as A from "../../userReportPage/userReportItems/ReportListCss";
import * as K from "./MapDataListCss";

export default function MapDataList() {
    const [cctvs, setCctvs] = useState([]);
    const [policeOffices, setPoliceOffices] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [ispoliceOfficePopupOpen, setIspoliceOfficePopupOpen] = useState(false);
    const [newCctvData, setNewCctvData] = useState({
        borough: '',
        latitude: '',
        longitude: '',
        address: ''
    });

    const [newpoliceOfficesData, setNewpoliceOfficesData] = useState({
        policeOffice: '',
        OfficialSignature: '',
        policeaddress: '',
    });

    const [selectedTab, setSelectedTab] = useState('CCTV'); // 기본값은 CCTV로 설정

    // 탭을 변경하는 함수
    const changeTab = (tab) => {
        setSelectedTab(tab);
    };

    useEffect(() => {
        document.body.style = `overflow: hidden`;
        return () => document.body.style = `overflow: auto`
    }, [])


    useEffect(() => {
        fetchCctvData();
        fetchPoliceOfficeData();
    }, []);

    //CCTV 데이터 받아오고 업데이트하는 로직
    const fetchCctvData = () => {
        fetch('http://localhost:3000/MapData/cctv/Data.json')
            .then(response => response.json())
            .then(data => setCctvs(data))
            .catch(error => console.error('Error fetching data:', error));
    };


    //경찰서 데이터 받아오고 업데이트하는 로직
    const fetchPoliceOfficeData = () => {
        fetch('http://localhost:3000/MapData/policeoffice/Data.json')
            .then(response => response.json())
            .then(data => setPoliceOffices(data))
            .catch(error => console.error('Error fetching data:', error));
    };

    //CCTV데이터 삭제하는 로직
    const handleDelete = (index) => {
        const updatedCctvs = [...cctvs];
        updatedCctvs.splice(index, 1);
        alert('데이터가 삭제되었습니다.')
        setCctvs(updatedCctvs);
    };

    //경찰서 데이터 삭제하는 로직
    const handlePoliceOfficeDelete = (index) => {
        const updatedpoliceOffices = [...policeOffices];
        updatedpoliceOffices.splice(index, 1);
        alert('데이터가 삭제되었습니다.')
        setPoliceOffices(updatedpoliceOffices);
    };

    //토글 여는 로직
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    //경찰서 추가 팝업 여는 로직
    const togglepoliceOfficePopup = () => {
        setIspoliceOfficePopupOpen(!ispoliceOfficePopupOpen);
    };

    //CCTV 데이터 input창 핸들러
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCctvData({
            ...newCctvData,
            [name]: value
        });
    };

    //경찰서 데이터 input창 핸들러
    const handlePoliceofficeInputChange = (e) => {
        const { name, value } = e.target;
        setNewpoliceOfficesData({
            ...newpoliceOfficesData,
            [name]: value
        });
    };

    //CCTV 추가하는 로직
    const addCctv = () => {
        const updatedCctvs = [...cctvs, newCctvData];
        setCctvs(updatedCctvs);
        // 데이터 업데이트하기
        saveCctvData(updatedCctvs);
        // 팝업 닫기
        setIsPopupOpen(false);
        // 인풋창 리셋
        setNewCctvData({
            borough: '',
            latitude: '',
            longitude: '',
            address: ''
        });
        // 결과보여주기
        alert('데이터가 추가되었습니다.');
    };

    //경찰서 추가하는 로직
    const addPoliceOffice = () => {
        const updatedPoliceOffices = [...policeOffices, newpoliceOfficesData];
        setPoliceOffices(updatedPoliceOffices);
        // 데이터 업데이트하기
        savePoliceData(updatedPoliceOffices);
        // 팝업 닫기
        setIspoliceOfficePopupOpen(false);
        // 인풋창 리셋
        setNewpoliceOfficesData({
            policeOffice: '',
            OfficialSignature: '',
            policeaddress: '',
        });
        // 결과보여주기
        alert('데이터가 추가되었습니다.');
    };

    //CCTV 데이터 저장하는 로직
    const saveCctvData = (data) => {
        // 데이터를 json꼴로 바꿔줌
        const jsonData = JSON.stringify(data);

        //어디로 추가할것인지 적는 로직
        fetch('http://localhost:3000/MapData/cctv/Data.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to save data');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data saved successfully:', data);
            })
            .catch(error => {
                console.error('Error saving data:', error);
            });
    };

    //경찰서 데이터 저장하는 로직
    const savePoliceData = (data) => {
        // 데이터를 json꼴로 바꿔줌
        const jsonData = JSON.stringify(data);

        //어디로 추가할것인지 적는 로직
        fetch('http://localhost:3000/MapData/policeoffice/Data.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to save data');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data saved successfully:', data);
            })
            .catch(error => {
                console.error('Error saving data:', error);
            });
    };
    return (
        <S.Container>
            <S.Box>
                <K.TitleBox>
                    <div>
                        지도 데이터 관리
                    </div>
                    <K.TabBox>
                        {/* 각 탭을 클릭했을 때 changeTab 함수를 호출하여 해당 탭으로 변경 */}
                        <div onClick={() => changeTab('CCTV')}>CCTV</div>
                        <div onClick={() => changeTab('Police')}>경찰서</div>
                        <div onClick={() => changeTab('Emergency')}>비상벨</div>
                    </K.TabBox>
                </K.TitleBox>

                {/* CCTV 탭 화면 */}
                {selectedTab === 'CCTV' && (
                    <>
                        <S.FieldContainer>
                            <A.DateField>자치구</A.DateField>
                            <A.UserNameField>위도</A.UserNameField>
                            <A.TitleField>경도</A.TitleField>
                            <A.ContentField>안심 주소</A.ContentField>
                        </S.FieldContainer>
                        <S.MemberContainer>
                            {cctvs.map((cctv, index) => (
                                <A.MemberItem key={index}>
                                    <A.ReportDate>{cctv.borough}</A.ReportDate>
                                    <A.ReportName>{cctv.latitude}</A.ReportName>
                                    <A.ReportTitle>{cctv.longitude}</A.ReportTitle>
                                    <A.ReportContent>{cctv.address}</A.ReportContent>
                                    <button onClick={() => handleDelete(index)}>X</button>
                                </A.MemberItem>
                            ))}
                        </S.MemberContainer>
                        <K.AddBox onClick={togglePopup}>CCTV 추가하기</K.AddBox>
                    </>
                )}

                {/* 경찰서 탭 화면 */}
                {selectedTab === 'Police' && (
                    <>
                        <S.FieldContainer>
                            <A.DateField>경찰서</A.DateField>
                            <A.UserNameField>관서명</A.UserNameField>
                            <A.TitleField>주소</A.TitleField>
                        </S.FieldContainer>
                        <S.MemberContainer>
                            {policeOffices.map((policeOffice, index) => (
                                <A.MemberItem key={index}>
                                    <A.ReportDate>{policeOffice.policeOffice}</A.ReportDate>
                                    <A.ReportName>{policeOffice.OfficialSignature}</A.ReportName>
                                    <A.ReportTitle>{policeOffice.policeaddress}</A.ReportTitle>
                                    <button onClick={() => handlePoliceOfficeDelete(index)}>X</button>
                                </A.MemberItem>
                            ))}
                        </S.MemberContainer>
                        <K.AddBox onClick={togglepoliceOfficePopup}>경찰서 추가하기</K.AddBox>
                    </>
                )}
            </S.Box>


            {/* CCTV 데이터 추가 팝업 */}
            {isPopupOpen && (
                <Modal
                    isOpen={isPopupOpen}
                    onRequestClose={() => setIsPopupOpen(false)}
                    style={customModalStyles}
                >
                    <K.Popup>
                        <K.Title>CCTV 추가하기</K.Title>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '40px' }}>
                            <K.InputBox>
                                <K.SubTitle>
                                    자치구
                                </K.SubTitle>
                                <K.Input type="text" name="borough" placeholder="자치구" value={newCctvData.borough} onChange={handleInputChange} />
                                <K.SubTitle>
                                    위도
                                </K.SubTitle>
                                <K.Input type="text" name="latitude" placeholder="위도" value={newCctvData.latitude} onChange={handleInputChange} />
                            </K.InputBox>
                            <K.InputBox>
                                <K.SubTitle>
                                    안심 주소
                                </K.SubTitle>
                                <K.Input type="text" name="address" placeholder="안심 주소" value={newCctvData.address} onChange={handleInputChange} />
                                <K.SubTitle>
                                    경도
                                </K.SubTitle>
                                <K.Input type="text" name="longitude" placeholder="경도" value={newCctvData.longitude} onChange={handleInputChange} />
                            </K.InputBox>
                        </div>
                        <K.ButtonBox>
                            <K.Button onClick={addCctv}>추가</K.Button>
                        </K.ButtonBox>
                    </K.Popup>
                </Modal>
            )}

            {/* 경찰서 데이터 추가 팝업 */}
            {ispoliceOfficePopupOpen && (
                <Modal
                    isOpen={ispoliceOfficePopupOpen}
                    onRequestClose={() => setIspoliceOfficePopupOpen(false)}
                    style={customModalStyles}
                >
                    <K.Popup>
                        <K.Title>경찰서 추가하기</K.Title>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '40px' }}>
                            <K.InputBox>
                                <K.SubTitle>
                                    경찰서
                                </K.SubTitle>
                                <K.Input type="text" name="policeOffice" placeholder="자치구" value={newpoliceOfficesData.policeOffice} onChange={handlePoliceofficeInputChange} />
                                <K.SubTitle>
                                    관서명
                                </K.SubTitle>
                                <K.Input type="text" name="OfficialSignature" placeholder="위도" value={newpoliceOfficesData.OfficialSignature} onChange={handlePoliceofficeInputChange} />
                            </K.InputBox>
                            <K.InputBox>
                                <K.SubTitle>
                                    주소
                                </K.SubTitle>
                                <K.Input type="text" name="policeaddress" placeholder="안심 주소" value={newpoliceOfficesData.policeaddress} onChange={handlePoliceofficeInputChange} />
                            </K.InputBox>
                        </div>
                        <K.ButtonBox>
                            <K.Button onClick={addPoliceOffice}>추가</K.Button>
                        </K.ButtonBox>
                    </K.Popup>
                </Modal>
            )}
        </S.Container >
    );
}

const customModalStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
        height: '100%',
        zIndex: '130',
        position: 'fixed',
        top: '0',
        left: '0',
        overflow: 'hidden'
    },
    content: {
        width: '40%',
        height: '40%',
        zIndex: '150',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
        backgroundColor: 'white',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '0px'
    },
};
