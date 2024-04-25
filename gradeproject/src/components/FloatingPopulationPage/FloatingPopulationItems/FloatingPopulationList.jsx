import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import * as A from "../../userManagementPage/userManagementItems/MemberListCss";
import * as S from "../../userReportPage/userReportItems/ReportListCss";
import * as K from "./FloatingPopulationListcss";
import * as Z from "../../mapDataManagementPage/mapDataItems/MapDataListCss";

export default function FloatingPopulationList() {
    const [floatingPopulations, setFloatingPopulations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchOption, setSearchOption] = useState('autonomousDistrict'); // 기본적으로 이름으로 검색
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newFloatingPopulationData, setNewFloatingPopulationData] = useState({
        measurementTime: '',
        autonomousDistrict: '',
        administrativeDistrict: '',
        numberOfVisitors: ''
    });

    const postsPerPage = 10; // 페이지당 나타낼 게시물 수

    // 현재 페이지의 첫 번째 회원의 인덱스
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;


    // 페이지 변경
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // 옵션 변경 함수
    const handleOptionChange = (event) => {
        setSearchOption(event.target.value);
    };

    // 검색 함수
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // 검색어가 변경되면 currentPage를 1로 설정하여 첫 번째 페이지로 이동
    };

    // 검색된 회원 필터링
    const filteredfloatingPopulations = floatingPopulations.filter(floatingPopulation => {
        // 선택된 옵션에 따라 검색 조건 변경
        switch (searchOption) {
            case 'measurementTime':
                return floatingPopulation.measurementTime.toLowerCase().includes(searchTerm.toLowerCase());
            case 'autonomousDistrict':
                return floatingPopulation.autonomousDistrict.toLowerCase().includes(searchTerm.toLowerCase());
            case 'administrativeDistrict':
                return floatingPopulation.administrativeDistrict.toLowerCase().includes(searchTerm.toLowerCase());
            default:
                return true;
        }
    });

    useEffect(() => {
        fetch('http://localhost:60004/floatingPopulation/Data.json')
            .then(response => response.json())
            .then(data => setFloatingPopulations(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        document.body.style = `overflow: hidden`;
        return () => document.body.style = `overflow: auto`
    }, [])

    //유동인구 데이터 삭제하는 로직
    const handleDelete = (index) => {
        const updatedFloatingPopulations = [...floatingPopulations];
        updatedFloatingPopulations.splice(index, 1);
        alert('데이터가 삭제되었습니다.')
        setFloatingPopulations(updatedFloatingPopulations);
    };

    //유동인구 추가 팝업 여는 로직
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };


    //유동인구 데이터 input창 핸들러
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewFloatingPopulationData({
            ...newFloatingPopulationData,
            [name]: value
        });
    };

    //유동인구 추가하는 로직
    const addFloatingPopulation = () => {
        const updatedFloatingPopulations = [...floatingPopulations, newFloatingPopulationData];
        setFloatingPopulations(updatedFloatingPopulations);
        // 데이터 업데이트하기
        saveFloatingPopulationData(updatedFloatingPopulations);
        // 팝업 닫기
        setIsPopupOpen(false);
        // 인풋창 리셋
        setNewFloatingPopulationData({
            measurementTime: '',
            autonomousDistrict: '',
            administrativeDistrict: '',
            numberOfVisitors: ''
        });
        // 결과보여주기
        alert('데이터가 추가되었습니다.');
    };

    //유동인구 저장하는 로직
    const saveFloatingPopulationData = (data) => {
        // 데이터를 json꼴로 바꿔줌
        const jsonData = JSON.stringify(data);

        //어디로 추가할것인지 적는 로직
        fetch('http://localhost:60004/MapData/floatingPopulation/Data.json', {
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
                <A.Title>
                    <div>유동인구 데이터 관리</div>
                    {/* 검색 창 */}
                    <A.SearchBox>
                        <A.Input
                            type="text"
                            placeholder="검색어를 입력하세요"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        {/* 검색 옵션 드롭다운 */}
                        <select value={searchOption} onChange={handleOptionChange}>
                            <option value="measurementTime">측정시간</option>
                            <option value="autonomousDistrict">자치구</option>
                            <option value="administrativeDistrict">행정동</option>

                        </select>
                    </A.SearchBox>
                </A.Title>
                <A.FieldContainer>
                    <K.DateField>측정시간</K.DateField>
                    <K.UserNameField>자치구</K.UserNameField>
                    <K.TitleField>행정동</K.TitleField>
                    <S.ContentField>방문자수</S.ContentField>
                </A.FieldContainer>
                <A.MemberContainer>
                    {filteredfloatingPopulations.slice(indexOfFirstPost, indexOfLastPost).map((floatingPopulation, index) => (
                        <A.MemberItem>
                            <K.ReportDate>{floatingPopulation.measurementTime}</K.ReportDate>
                            <K.ReportName>{floatingPopulation.autonomousDistrict}</K.ReportName>
                            <K.ReportTitle>{floatingPopulation.administrativeDistrict}</K.ReportTitle>
                            <S.ReportContent>{floatingPopulation.numberOfVisitors}</S.ReportContent>
                            <button onClick={() => handleDelete(index)}>X</button>
                        </A.MemberItem>
                    ))}
                </A.MemberContainer>
                {/* 페이지네이션 */}
                <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                    <A.PaginationBox>
                        {[...Array(Math.ceil(filteredfloatingPopulations.length / postsPerPage)).keys()].map((pageNumber) => (
                            <A.PageNumber
                                key={pageNumber}
                                onClick={() => paginate(pageNumber + 1)}
                            >
                                {pageNumber + 1}
                            </A.PageNumber>
                        ))}
                    </A.PaginationBox>
                    <Z.AddBox onClick={togglePopup}>유동인구 추가하기</Z.AddBox>
                </div>

                {/* CCTV 데이터 추가 팝업 */}
                {isPopupOpen && (
                    <Modal
                        isOpen={isPopupOpen}
                        onRequestClose={() => setIsPopupOpen(false)}
                        style={customModalStyles}
                    >
                        <Z.Popup>
                            <Z.Title>유동인구 추가하기</Z.Title>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '40px' }}>
                                <Z.InputBox>
                                    <Z.SubTitle>
                                        측정시간
                                    </Z.SubTitle>
                                    <Z.Input type="text" name="measurementTime" placeholder="측정시간" value={newFloatingPopulationData.measurementTime} onChange={handleInputChange} />
                                    <Z.SubTitle>
                                        행정동
                                    </Z.SubTitle>
                                    <Z.Input type="text" name="autonomousDistrict" placeholder="행정동" value={newFloatingPopulationData.autonomousDistrict} onChange={handleInputChange} />
                                </Z.InputBox>
                                <Z.InputBox>
                                    <Z.SubTitle>
                                        자치구
                                    </Z.SubTitle>
                                    <Z.Input type="text" name="administrativeDistrict" placeholder="자치구" value={newFloatingPopulationData.administrativeDistrict} onChange={handleInputChange} />
                                    <Z.SubTitle>
                                        방문자수
                                    </Z.SubTitle>
                                    <Z.Input type="text" name="numberOfVisitors" placeholder="방문자수" value={newFloatingPopulationData.numberOfVisitors} onChange={handleInputChange} />
                                </Z.InputBox>
                            </div>
                            <Z.ButtonBox>
                                <Z.Button onClick={addFloatingPopulation}>추가</Z.Button>
                            </Z.ButtonBox>
                        </Z.Popup>
                    </Modal>
                )}
            </A.Box>
        </A.Container >
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