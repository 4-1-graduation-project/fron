import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import * as S from "../../userManagementPage/userManagementItems/MemberListCss";
import * as A from "../../userReportPage/userReportItems/ReportListCss";
import * as K from "./MapDataListCss";

export default function MapDataList() {
    const [cctvs, setCctvs] = useState([]);
    const [policeOffices, setPoliceOffices] = useState([]);
    const [emergencyBells, setEmergencyBells] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [ispoliceOfficePopupOpen, setIspoliceOfficePopupOpen] = useState(false);
    const [isEmergencyBellPopupOpen, setIsEmergencyBellPopupOpen] = useState(false);
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
    const [newEmergencyBellData, setNewEmergencyBellData] = useState({
        installationLocation: '',
        locationAddress: ''
    });
    const [selectedTab, setSelectedTab] = useState('CCTV'); // 기본값은 CCTV로 설정

    //====================CCTV 검색 로직 =================================
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10; // 페이지당 나타낼 게시물 수

    // 현재 페이지의 첫 번째 회원의 인덱스
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const [searchTerm, setSearchTerm] = useState('');
    const [searchOption, setSearchOption] = useState('borough'); // 기본적으로 이름으로 검색
    // 검색 함수
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // 검색어가 변경되면 currentPage를 1로 설정하여 첫 번째 페이지로 이동
    };


    // 옵션 변경 함수
    const handleOptionChange = (event) => {
        setSearchOption(event.target.value);
    };

    // 검색된 회원 필터링
    const filteredCctvs = cctvs.filter(cctv => {
        // 선택된 옵션에 따라 검색 조건 변경
        switch (searchOption) {
            case 'borough':
                return cctv.borough.toLowerCase().includes(searchTerm.toLowerCase());
            case 'latitude':
                // 숫자형 속성이므로 그대로 비교
                return cctv.latitude.includes(searchTerm);
            case 'longitude':
                // 숫자형 속성이므로 그대로 비교
                return cctv.longitude.includes(searchTerm);
            case 'address':
                return cctv.address.toLowerCase().includes(searchTerm.toLowerCase());
            default:
                return true;
        }
    });

    // 페이지 변경
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        setSearchTerm(''); // 페이지 변경 시 검색어 초기화
    };


    //===============================================================================

    //====================경찰서 검색 로직 ============================================
    const [currentTwoPage, setCurrentTwoPage] = useState(1);
    const postsPerTwoPage = 10; // 페이지당 나타낼 게시물 수

    // 현재 페이지의 첫 번째 회원의 인덱스
    const indexOfLastTwoPost = currentTwoPage * postsPerTwoPage;
    const indexOfFirstTwoPost = indexOfLastTwoPost - postsPerTwoPage;


    const [searchTwoTerm, setSearchTwoTerm] = useState('');
    const [searchTwoOption, setSearchTwoOption] = useState('policeOffice'); // 기본적으로 이름으로 검색
    // 검색 함수
    const handleTwoSearch = (event) => {
        setSearchTwoTerm(event.target.value);
        setCurrentTwoPage(1); // 검색어가 변경되면 currentPage를 1로 설정하여 첫 번째 페이지로 이동
    };


    // 옵션 변경 함수
    const handleTwoOptionChange = (event) => {
        setSearchTwoOption(event.target.value);
    };

    // 검색된 회원 필터링
    const filteredPoliceOffices = policeOffices.filter(policeOffice => {
        // 선택된 옵션에 따라 검색 조건 변경
        switch (searchTwoOption) {
            case 'policeOffice':
                return policeOffice.policeOffice.toLowerCase().includes(searchTwoTerm.toLowerCase());
            case 'OfficialSignature':
                return policeOffice.OfficialSignature.toLowerCase().includes(searchTwoTerm.toLowerCase());
            case 'policeaddress':
                return policeOffice.policeaddress.toLowerCase().includes(searchTwoTerm.toLowerCase());
            default:
                return true;
        }
    });

    // 페이지 변경
    const TwoPaginate = (TwoPageNumber) => {
        setCurrentTwoPage(TwoPageNumber);
        setSearchTwoTerm(''); // 페이지 변경 시 검색어 초기화
    };


    //===============================================================================

    //==================== 비상벨 검색 로직 ============================================

    const [currentThreePage, setCurrentThreePage] = useState(1);
    const postsPerThreePage = 10; // 페이지당 나타낼 게시물 수

    // 현재 페이지의 첫 번째 회원의 인덱스
    const indexOfLastThreePost = currentThreePage * postsPerThreePage;
    const indexOfFirstThreePost = indexOfLastThreePost - postsPerThreePage;


    const [searchThreeTerm, setSearchThreeTerm] = useState('');
    const [searchThreeOption, setSearchThreeOption] = useState('installation_location'); // 기본적으로 이름으로 검색
    // 검색 함수
    const handleThreeSearch = (event) => {
        setSearchThreeTerm(event.target.value);
        setCurrentThreePage(1); // 검색어가 변경되면 currentPage를 1로 설정하여 첫 번째 페이지로 이동
    };


    // 옵션 변경 함수
    const handleThreeOptionChange = (event) => {
        setSearchThreeOption(event.target.value);
    };

    // 검색된 회원 필터링
    const filteredEmergencyBells = emergencyBells.filter(emergencyBell => {
        // 선택된 옵션에 따라 검색 조건 변경
        switch (searchThreeOption) {
            case 'installation_location':
                return emergencyBell.installation_location.toLowerCase().includes(searchThreeTerm.toLowerCase());
            case 'location_address':
                return emergencyBell.location_address.toLowerCase().includes(searchThreeTerm.toLowerCase());
            default:
                return true;
        }
    });

    // 페이지 변경
    const ThreePaginate = (ThreePageNumber) => {
        setCurrentThreePage(ThreePageNumber);
        setSearchThreeTerm(''); // 페이지 변경 시 검색어 초기화
    };
    //============================ ===================================================
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
        fetchEmergencyBellData();
    }, []);

    //CCTV 데이터 받아오고 업데이트하는 로직
    const fetchCctvData = () => {
        fetch('http://localhost:60004/MapData/cctv/Data.json')
            .then(response => response.json())
            .then(data => setCctvs(data))
            .catch(error => console.error('Error fetching data:', error));
    };


    //경찰서 데이터 받아오고 업데이트하는 로직
    const fetchPoliceOfficeData = () => {
        fetch('http://localhost:60004/MapData/policeoffice/Data.json')
            .then(response => response.json())
            .then(data => setPoliceOffices(data))
            .catch(error => console.error('Error fetching data:', error));
    };

    //비상벨 데이터 받아오고 업데이트하는 로직
    const fetchEmergencyBellData = () => {
        fetch('http://localhost:60004/MapData/emergencybell/Data.json')
            .then(response => response.json())
            .then(data => setEmergencyBells(data))
            .catch(error => console.error('Error fetching emergency bell data:', error));
    };

    // CCTV데이터 삭제하는 로직
    const handleDelete = (index) => {
        const updatedCctvs = [...cctvs];
        updatedCctvs.splice(index, 1);
        alert('데이터가 삭제되었습니다.');
        setCctvs(updatedCctvs);
        // 데이터 업데이트하기
        saveCctvData(updatedCctvs);
        // 수정된 데이터를 다시 가져오기
        fetchCctvData();
    };
    //경찰서 데이터 삭제하는 로직
    const handlePoliceOfficeDelete = (index) => {
        const updatedpoliceOffices = [...policeOffices];
        updatedpoliceOffices.splice(index, 1);
        alert('데이터가 삭제되었습니다.')
        setPoliceOffices(updatedpoliceOffices);
        fetchPoliceOfficeData();
    };

    //비상벨 데이터 삭제하는 로직
    const handleDeleteEmergencyBell = (index) => {
        const updatedEmergencyBells = [...emergencyBells];
        updatedEmergencyBells.splice(index, 1);
        alert('데이터가 삭제되었습니다.')
        setEmergencyBells(updatedEmergencyBells);
        fetchEmergencyBellData();
    };

    //CCTV 추가 팝업 여는 로직
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    //경찰서 추가 팝업 여는 로직
    const togglepoliceOfficePopup = () => {
        setIspoliceOfficePopupOpen(!ispoliceOfficePopupOpen);
    };

    //비상벨 추가 팝업 여는 로직
    const toggleEmergencyBellPopup = () => {
        setIsEmergencyBellPopupOpen(!isEmergencyBellPopupOpen);
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

    //비상벨 데이터 input창 핸들러
    const handleEmergencyBellInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmergencyBellData({
            ...newEmergencyBellData,
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

    //비상벨 추가하는 로직
    const addEmergencyBells = () => {
        const updatedEmergencyBells = [...emergencyBells, newEmergencyBellData];
        setEmergencyBells(updatedEmergencyBells);
        // 데이터 업데이트하기
        saveEmergencyBellData(updatedEmergencyBells);
        // 팝업 닫기
        setIsEmergencyBellPopupOpen(false);
        // 인풋창 리셋
        setNewEmergencyBellData({
            installationLocation: '',
            locationAddress: ''
        });
        // 결과보여주기
        alert('데이터가 추가되었습니다.');
    };


    //CCTV 데이터 저장하는 로직
    const saveCctvData = (data) => {
        // 데이터를 json꼴로 바꿔줌
        const jsonData = JSON.stringify(data);

        //어디로 추가할것인지 적는 로직
        fetch('http://localhost:60004/MapData/cctv/Data.json', {
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
                fetchCctvData();
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
        fetch('http://localhost:60004/MapData/policeoffice/Data.json', {
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
                fetchPoliceOfficeData();
            })
            .catch(error => {
                console.error('Error saving data:', error);
            });
    };

    // 비상벨 데이터 저장하는 로직
    const saveEmergencyBellData = (data) => {
        const jsonData = JSON.stringify(data);
        fetch('http://localhost:60004/MapData/emergencybell/Data.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to save emergency bell data');
                }
                return response.json();
            })
            .then(data => {
                console.log('Emergency bell data saved successfully:', data);
                fetchEmergencyBellData();
            })
            .catch(error => {
                console.error('Error saving emergency bell data:', error);
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
                        <div onClick={() => changeTab('CCTV')} className={selectedTab === 'CCTV' ? 'activeTab' : ''}>CCTV</div>
                        <div onClick={() => changeTab('Police')} className={selectedTab === 'Police' ? 'activeTab' : ''}>경찰서</div>
                        <div onClick={() => changeTab('Emergency')} className={selectedTab === 'Emergency' ? 'activeTab' : ''}>비상벨</div>
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
                            <S.SearchMapBox>
                                <S.Input
                                    type="text"
                                    placeholder="검색어를 입력하세요"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                />
                                {/* 검색 옵션 드롭다운 */}
                                <select value={searchOption} onChange={handleOptionChange}>
                                    <option value="name">자치구</option>
                                    <option value="gender">안심주소</option>
                                </select>
                            </S.SearchMapBox>
                        </S.FieldContainer>
                        <S.MemberContainer>
                            {filteredCctvs.slice(indexOfFirstPost, indexOfLastPost).map((cctv, index) => (
                                <A.MemberItem key={index}>
                                    <A.ReportDate>{cctv.borough}</A.ReportDate>
                                    <A.ReportName>{cctv.latitude}</A.ReportName>
                                    <A.ReportTitle>{cctv.longitude}</A.ReportTitle>
                                    <A.ReportContent>{cctv.address}</A.ReportContent>
                                    <button onClick={() => handleDelete(index)}>X</button>
                                </A.MemberItem>
                            ))}
                        </S.MemberContainer>
                        {/* 페이지네이션 */}
                        <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                            <S.PaginationBox>
                                {[...Array(Math.ceil(filteredCctvs.length / postsPerPage)).keys()].map((pageNumber) => (
                                    <S.PageNumber
                                        key={pageNumber}
                                        onClick={() => paginate(pageNumber + 1)}
                                    >
                                        {pageNumber + 1}
                                    </S.PageNumber>
                                ))}
                            </S.PaginationBox>
                            <K.AddBox onClick={togglePopup}>CCTV 추가하기</K.AddBox>
                        </div>
                    </>
                )}

                {/* 경찰서 탭 화면 */}
                {selectedTab === 'Police' && (
                    <>
                        <S.FieldContainer>
                            <A.DateField>경찰서</A.DateField>
                            <A.UserNameField>관서명</A.UserNameField>
                            <A.TitleTwoField>주소</A.TitleTwoField>
                            <S.SearchMapBox>
                                <S.Input
                                    type="text"
                                    placeholder="검색어를 입력하세요"
                                    value={searchTwoTerm}
                                    onChange={handleTwoSearch}
                                />
                                {/* 검색 옵션 드롭다운 */}
                                <select value={searchTwoOption} onChange={handleTwoOptionChange}>
                                    <option value="policeOffice">경찰서</option>
                                    <option value="OfficialSignature">관서명</option>
                                    <option value="policeaddress">주소</option>
                                </select>
                            </S.SearchMapBox>
                        </S.FieldContainer>
                        <S.MemberContainer>
                            {filteredPoliceOffices.slice(indexOfFirstTwoPost, indexOfLastTwoPost).map((policeOffice, index) => (
                                <A.MemberItem key={index}>
                                    <A.ReportDate>{policeOffice.policeOffice}</A.ReportDate>
                                    <A.ReportName>{policeOffice.OfficialSignature}</A.ReportName>
                                    <A.PoliceTitle>{policeOffice.policeaddress}</A.PoliceTitle>
                                    <button onClick={() => handlePoliceOfficeDelete(index)}>X</button>
                                </A.MemberItem>
                            ))}
                        </S.MemberContainer>
                        <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                            <S.PaginationBox>
                                {[...Array(Math.ceil(filteredPoliceOffices.length / postsPerTwoPage)).keys()].map((TwoPageNumber) => (
                                    <S.PageNumber
                                        key={TwoPageNumber}
                                        onClick={() => TwoPaginate(TwoPageNumber + 1)}
                                    >
                                        {TwoPageNumber + 1}
                                    </S.PageNumber>
                                ))}
                            </S.PaginationBox>
                            <K.AddBox onClick={togglepoliceOfficePopup}>경찰서 추가하기</K.AddBox>
                        </div>
                    </>
                )}

                {/* 비상벨 탭 화면 */}
                {selectedTab === 'Emergency' && (
                    <>
                        <S.FieldContainer>
                            <A.LocationField>설치위치</A.LocationField>
                            <A.sojeaField>소재지지지번주소</A.sojeaField>
                            <S.SearchMapBox>
                                <S.Input
                                    type="text"
                                    placeholder="검색어를 입력하세요"
                                    value={searchThreeTerm}
                                    onChange={handleThreeSearch}
                                />
                                {/* 검색 옵션 드롭다운 */}
                                <select value={searchThreeOption} onChange={handleThreeOptionChange}>
                                    <option value="installation_location">설치위치</option>
                                    <option value="location_address">소재지지번주소</option>
                                </select>
                            </S.SearchMapBox>
                        </S.FieldContainer>
                        <S.MemberContainer>
                            {filteredEmergencyBells.slice(indexOfFirstThreePost, indexOfLastThreePost).map((emergencyBell, index) => (
                                <A.MemberItem key={index}>
                                    <A.emergencyBellLocation>{emergencyBell.installation_location}</A.emergencyBellLocation>
                                    <A.emergencyBelladdress>{emergencyBell.location_address}</A.emergencyBelladdress>
                                    <button onClick={() => handleDeleteEmergencyBell(index)}>X</button>
                                </A.MemberItem>
                            ))}
                        </S.MemberContainer>
                        <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                            <S.PaginationBox>
                                {[...Array(Math.ceil(filteredEmergencyBells.length / postsPerThreePage)).keys()].map((ThreePageNumber) => (
                                    <S.PageNumber
                                        key={ThreePageNumber}
                                        onClick={() => ThreePaginate(ThreePageNumber + 1)}
                                    >
                                        {ThreePageNumber + 1}
                                    </S.PageNumber>
                                ))}
                            </S.PaginationBox>
                            <K.AddBox onClick={toggleEmergencyBellPopup}>비상벨 추가하기</K.AddBox>
                        </div>
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

            {/* 비상벨 데이터 추가 팝업 */}
            {isEmergencyBellPopupOpen && (
                <Modal
                    isOpen={isEmergencyBellPopupOpen}
                    onRequestClose={() => setIsEmergencyBellPopupOpen(false)}
                    style={customModalStyles}
                >
                    <K.Popup>
                        <K.Title>비상벨 추가하기</K.Title>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '40px' }}>
                            <K.InputBox>
                                <K.SubTitle>
                                    설치위치
                                </K.SubTitle>
                                <K.Input type="text" name="installation_location" placeholder="설치위치" value={newEmergencyBellData.installation_location} onChange={handleEmergencyBellInputChange} />
                                <K.SubTitle>
                                    소재지번주소
                                </K.SubTitle>
                                <K.Input type="text" name="location_address" placeholder="소재지지번주소" value={newEmergencyBellData.location_address} onChange={handleEmergencyBellInputChange} />
                            </K.InputBox>
                        </div>
                        <K.ButtonBox>
                            <K.Button onClick={addEmergencyBells}>추가</K.Button>
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
