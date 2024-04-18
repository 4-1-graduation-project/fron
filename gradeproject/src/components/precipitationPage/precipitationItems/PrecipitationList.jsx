import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import * as A from "../../userManagementPage/userManagementItems/MemberListCss";
import * as K from "../../FloatingPopulationPage/FloatingPopulationItems/FloatingPopulationListcss";
import * as Z from "../../mapDataManagementPage/mapDataItems/MapDataListCss";
import * as D from "./PrecipitationListcss";

export default function PrecipitationList() {
    const [precipitations, serPrecipitations] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newPrecipitationsData, setNewPrecipitationsData] = useState({
        date: '',
        rainfallAmount: '',
        region: '',
    });

    useEffect(() => {
        fetch('http://localhost:3000/precipitation/Data.json')
            .then(response => response.json())
            .then(data => serPrecipitations(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    //강수량 데이터 삭제하는 로직
    const handleDelete = (index) => {
        const updatedPrecipitations = [...precipitations];
        updatedPrecipitations.splice(index, 1);
        alert('데이터가 삭제되었습니다.')
        serPrecipitations(updatedPrecipitations);
    };

    //강수량 추가 팝업 여는 로직
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    //강수량 데이터 input창 핸들러
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPrecipitationsData({
            ...newPrecipitationsData,
            [name]: value
        });
    };

    //강수량 추가하는 로직
    const addPrecipitation = () => {
        const updatedPrecipitations = [...precipitations, newPrecipitationsData];
        serPrecipitations(updatedPrecipitations);
        // 데이터 업데이트하기
        savePrecipitationData(updatedPrecipitations);
        // 팝업 닫기
        setIsPopupOpen(false);
        // 인풋창 리셋
        setNewPrecipitationsData({
            date: '',
            rainfallAmount: '',
            region: '',
        });
        // 결과보여주기
        alert('데이터가 추가되었습니다.');
    };

    //강수량 저장하는 로직
    const savePrecipitationData = (data) => {
        // 데이터를 json꼴로 바꿔줌
        const jsonData = JSON.stringify(data);

        //어디로 추가할것인지 적는 로직
        fetch('http://localhost:3000/MapData/precipitation/Data.json', {
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
        <A.Container>
            <A.Box>
                <A.Title>강수량 데이터 관리</A.Title>
                <A.FieldContainer>
                    <D.DateField>날짜</D.DateField>
                    <K.UserNameField>강수량(mm)</K.UserNameField>
                    <K.TitleField>지역</K.TitleField>
                </A.FieldContainer>
                <A.MemberContainer>
                    {precipitations.map((precipitation, index) => (
                        <A.MemberItem>
                            <K.ReportDate>{precipitation.date}</K.ReportDate>
                            <K.ReportName>{precipitation.rainfallAmount}</K.ReportName>
                            <D.ReportTitle>{precipitation.region}</D.ReportTitle>
                            <button onClick={() => handleDelete(index)}>X</button>
                        </A.MemberItem>
                    ))}
                </A.MemberContainer>
                <Z.AddBox onClick={togglePopup}>강수량 추가하기</Z.AddBox>

                {/* CCTV 데이터 추가 팝업 */}
                {isPopupOpen && (
                    <Modal
                        isOpen={isPopupOpen}
                        onRequestClose={() => setIsPopupOpen(false)}
                        style={customModalStyles}
                    >
                        <Z.Popup>
                            <Z.Title>강수량 추가하기</Z.Title>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '40px' }}>
                                <Z.InputBox>
                                    <Z.SubTitle>
                                        날짜
                                    </Z.SubTitle>
                                    <Z.Input type="text" name="date" placeholder="측정시간" value={newPrecipitationsData.date} onChange={handleInputChange} />
                                    <Z.SubTitle>
                                        지역
                                    </Z.SubTitle>
                                    <Z.Input type="text" name="rainfallAmount" placeholder="행정동" value={newPrecipitationsData.rainfallAmount} onChange={handleInputChange} />
                                </Z.InputBox>
                                <Z.InputBox>
                                    <Z.SubTitle>
                                        강수량
                                    </Z.SubTitle>
                                    <Z.Input type="text" name="region" placeholder="자치구" value={newPrecipitationsData.region} onChange={handleInputChange} />
                                </Z.InputBox>
                            </div>
                            <Z.ButtonBox>
                                <Z.Button onClick={addPrecipitation}>추가</Z.Button>
                            </Z.ButtonBox>
                        </Z.Popup>
                    </Modal>
                )}
            </A.Box>
        </A.Container>
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