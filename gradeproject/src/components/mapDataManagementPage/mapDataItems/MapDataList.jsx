import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import * as S from "../../userManagementPage/userManagementItems/MemberListCss";
import * as A from "../../userReportPage/userReportItems/ReportListCss";
import * as K from "./MapDataListCss";

export default function MapDataList() {
    const [cctvs, setCctvs] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newCctvData, setNewCctvData] = useState({
        borough: '',
        latitude: '',
        longitude: '',
        address: ''
    });

    useEffect(() => {
        document.body.style = `overflow: hidden`;
        return () => document.body.style = `overflow: auto`
    }, [])


    useEffect(() => {
        fetchCctvData();
    }, []);

    const fetchCctvData = () => {
        fetch('http://localhost:3000/MapData/cctv/Data.json')
            .then(response => response.json())
            .then(data => setCctvs(data))
            .catch(error => console.error('Error fetching data:', error));
    };

    const handleDelete = (index) => {
        const updatedCctvs = [...cctvs];
        updatedCctvs.splice(index, 1);
        setCctvs(updatedCctvs);
    };

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCctvData({
            ...newCctvData,
            [name]: value
        });
    };

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

    const saveCctvData = (data) => {
        // Convert data to JSON string
        const jsonData = JSON.stringify(data);

        // Send the JSON data to the server to save
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

    return (
        <S.Container>
            <S.Box>
                <S.Title>지도 데이터 관리</S.Title>
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
            </S.Box>

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
