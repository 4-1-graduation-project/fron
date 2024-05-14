import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import * as S from "../../userManagementPage/userManagementItems/MemberListCss";
import * as A from "../../userReportPage/userReportItems/ReportListCss";
import * as K from "./MapDataListCss";
import Pagination from 'react-js-pagination';
import "./Paging.css";

export default function MapDataList() {
    const [cctvs, setCctvs] = useState([]);
    const [policeOffices, setPoliceOffices] = useState([]);
    const [emergencyBells, setEmergencyBells] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [ispoliceOfficePopupOpen, setIspoliceOfficePopupOpen] = useState(false);
    const [isEmergencyBellPopupOpen, setIsEmergencyBellPopupOpen] = useState(false);
    const [newCctvData, setNewCctvData] = useState({
        safeNum: '',
        safeY: '',
        safeX: '',
        safeAddress: ''
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
    const [searchOption, setSearchOption] = useState('safeAddress'); // 기본적으로 이름으로 검색
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
            case 'safeNum':
                return cctv.safeNum.toLowerCase().includes(searchTerm.toLowerCase());
            case 'safeY':
                // 숫자형 속성이므로 그대로 비교
                return cctv.safeY.includes(searchTerm);
            case 'safeX':
                // 숫자형 속성이므로 그대로 비교
                return cctv.safeX.includes(searchTerm);
            case 'safeAddress':
                return cctv.safeAddress.toLowerCase().includes(searchTerm.toLowerCase());
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
    const [searchTwoOption, setSearchTwoOption] = useState('safeAddress'); // 기본적으로 이름으로 검색
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
            case 'safeNum':
                return policeOffice.safeNum.toLowerCase().includes(searchTwoTerm.toLowerCase());
            case 'safeY':
                // 숫자형 속성이므로 그대로 비교
                return policeOffice.safeY.includes(searchTwoTerm);
            case 'safeX':
                // 숫자형 속성이므로 그대로 비교
                return policeOffice.safeX.includes(searchTwoTerm);
            case 'safeAddress':
                return policeOffice.safeAddress.toLowerCase().includes(searchTwoTerm.toLowerCase());
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
            case 'safeNum':
                return emergencyBell.safeNum.toLowerCase().includes(searchThreeTerm.toLowerCase());
            case 'safeY':
                // 숫자형 속성이므로 그대로 비교
                return emergencyBell.safeY.includes(searchTerm);
            case 'safeX':
                // 숫자형 속성이므로 그대로 비교
                return emergencyBell.safeX.includes(searchTerm);
            case 'safeAddress':
                return emergencyBell.safeAddress.toLowerCase().includes(searchThreeTerm.toLowerCase());
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
        const token = localStorage.getItem('accessToken');
        fetch('http://ceprj.gachon.ac.kr:60004/src/admins/safeThing/cctv', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(response => response.json())
            .then(data => setCctvs(data))
            .catch(error => console.error('Error fetching data:', error));
    };


    //경찰서 데이터 받아오고 업데이트하는 로직
    const fetchPoliceOfficeData = () => {
        const token = localStorage.getItem('accessToken');
        fetch('http://ceprj.gachon.ac.kr:60004/src/admins/safeThing/police', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(response => response.json())
            .then(data => setPoliceOffices(data))
            .catch(error => console.error('Error fetching data:', error));
    };

    //비상벨 데이터 받아오고 업데이트하는 로직
    const fetchEmergencyBellData = () => {
        const token = localStorage.getItem('accessToken');
        fetch('http://ceprj.gachon.ac.kr:60004/src/admins/safeThing/bell', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
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
            safeNum: '',
            safeY: '',
            safeX: '',
            safeAddress: ''
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

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleTwoPageChange = (TwoPageNumber) => {
        setCurrentTwoPage(TwoPageNumber);
    };

    const handleThreePageChange = (ThreePageNumber) => {
        setCurrentThreePage(ThreePageNumber);
    };


    return (
        <S.NoScrollContainer>
            <S.ScrollBox>
                <K.TitleBox>
                    <K.TabBox>
                        {/* 각 탭을 클릭했을 때 changeTab 함수를 호출하여 해당 탭으로 변경 */}
                        <div onClick={() => changeTab('CCTV')} className={selectedTab === 'CCTV' ? 'activeTab' : ''}>CCTV</div>
                        <div onClick={() => changeTab('Police')} className={selectedTab === 'Police' ? 'activeTab' : ''}>경찰서</div>
                        <div onClick={() => changeTab('Emergency')} className={selectedTab === 'Emergency' ? 'activeTab' : ''}>비상벨</div>
                    </K.TabBox>
                    {/* 페이지네이션 */}
                    {selectedTab === 'CCTV' && (
                        <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                            <S.PaginationBox>
                                <Pagination
                                    activePage={currentPage}
                                    itemsCountPerPage={postsPerPage}
                                    totalItemsCount={filteredCctvs.length}
                                    pageRangeDisplayed={5}
                                    onChange={handlePageChange}
                                    itemClass="page-item"
                                    linkClass="page-link"
                                />
                            </S.PaginationBox>
                            {/* <K.AddBox onClick={togglePopup}>CCTV 추가하기</K.AddBox> */}
                        </div>
                    )}
                    {selectedTab === 'Police' && (
                        <Pagination
                            activePage={currentTwoPage}
                            itemsCountPerPage={postsPerTwoPage}
                            totalItemsCount={filteredPoliceOffices.length}
                            pageRangeDisplayed={5}
                            onChange={handleTwoPageChange}
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                    )}
                    {selectedTab === 'Emergency' && (
                        <Pagination
                            activePage={currentThreePage}
                            itemsCountPerPage={postsPerThreePage}
                            totalItemsCount={filteredEmergencyBells.length}
                            pageRangeDisplayed={5}
                            onChange={handleThreePageChange}
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                    )}
                </K.TitleBox>

                {/* CCTV 탭 화면 */}
                {selectedTab === 'CCTV' && (
                    <>
                        <S.MapFieldContainer>
                            <A.DateField>데이터 번호</A.DateField>
                            <A.UserNameField>위도</A.UserNameField>
                            <A.TitleField>경도</A.TitleField>
                            <A.ContentField>안심 주소</A.ContentField>
                            <S.SearchMapBox>
                                <S.ReviewInput
                                    type="text"
                                    placeholder="검색어를 입력하세요"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                />
                                {/* 검색 옵션 드롭다운 */}
                                <select value={searchOption} onChange={handleOptionChange}>
                                    <option value="safeNum">데이터번호</option>
                                    <option value="safeY">위도</option>
                                    <option value="safeX">경도</option>
                                    <option value="safeAddress">주소</option>
                                </select>
                            </S.SearchMapBox>
                        </S.MapFieldContainer>
                        <S.MemberContainer>
                            {filteredCctvs.slice(indexOfFirstPost, indexOfLastPost).map((cctv, index) => (
                                <A.MemberItem key={index}>
                                    <A.ReportDate>{cctv.safeNum}</A.ReportDate>
                                    <A.ReportName>{cctv.safeY}</A.ReportName>
                                    <A.ReportTitle>{cctv.safeX}</A.ReportTitle>
                                    <A.ReportAddress>{cctv.safeAddress}</A.ReportAddress>
                                    <button onClick={() => handleDelete(index)}>X</button>
                                </A.MemberItem>
                            ))}
                        </S.MemberContainer>

                    </>
                )}

                {/* 경찰서 탭 화면 */}
                {selectedTab === 'Police' && (
                    <>
                        <S.MapFieldContainer>
                            <A.DateField>데이터 번호</A.DateField>
                            <A.UserNameField>위도</A.UserNameField>
                            <A.TitleField>경도</A.TitleField>
                            <A.ContentField>안심 주소</A.ContentField>
                            <S.SearchMapBox>
                                <S.ReviewInput
                                    type="text"
                                    placeholder="검색어를 입력하세요"
                                    value={searchTwoTerm}
                                    onChange={handleTwoSearch}
                                />
                                {/* 검색 옵션 드롭다운 */}
                                <select value={searchTwoOption} onChange={handleTwoOptionChange}>
                                    <option value="safeNum">데이터번호</option>
                                    <option value="safeY">위도</option>
                                    <option value="safeX">경도</option>
                                    <option value="safeAddress">주소</option>
                                </select>
                            </S.SearchMapBox>
                        </S.MapFieldContainer>
                        <S.MemberContainer>
                            {filteredPoliceOffices.slice(indexOfFirstTwoPost, indexOfLastTwoPost).map((policeOffice, index) => (
                                <A.MemberItem key={index}>
                                    <A.ReportDate>{policeOffice.safeNum}</A.ReportDate>
                                    <A.ReportName>{policeOffice.safeY}</A.ReportName>
                                    <A.ReportTitle>{policeOffice.safeX}</A.ReportTitle>
                                    <A.ReportAddress>{policeOffice.safeAddress}</A.ReportAddress>
                                    <button onClick={() => handlePoliceOfficeDelete(index)}>X</button>
                                </A.MemberItem>
                            ))}
                        </S.MemberContainer>
                        <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                            <K.AddBox onClick={togglepoliceOfficePopup}>경찰서 추가하기</K.AddBox>
                        </div>
                    </>
                )}

                {/* 비상벨 탭 화면 */}
                {selectedTab === 'Emergency' && (
                    <>
                        <S.MapFieldContainer>
                            <A.DateField>데이터 번호</A.DateField>
                            <A.UserNameField>위도</A.UserNameField>
                            <A.TitleField>경도</A.TitleField>
                            <A.ContentField>안심 주소</A.ContentField>
                            <S.SearchMapBox>
                                <S.ReviewInput
                                    type="text"
                                    placeholder="검색어를 입력하세요"
                                    value={searchThreeTerm}
                                    onChange={handleThreeSearch}
                                />
                                {/* 검색 옵션 드롭다운 */}
                                <select value={searchThreeOption} onChange={handleThreeOptionChange}>
                                    <option value="safeNum">데이터번호</option>
                                    <option value="safeY">위도</option>
                                    <option value="safeX">경도</option>
                                    <option value="safeAddress">주소</option>
                                </select>
                            </S.SearchMapBox>
                        </S.MapFieldContainer>
                        <S.MemberContainer>
                            {filteredEmergencyBells.slice(indexOfFirstThreePost, indexOfLastThreePost).map((emergencyBell, index) => (
                                <A.MemberItem key={index}>
                                    <A.ReportDate>{emergencyBell.safeNum}</A.ReportDate>
                                    <A.ReportName>{emergencyBell.safeY}</A.ReportName>
                                    <A.ReportTitle>{emergencyBell.safeX}</A.ReportTitle>
                                    <A.ReportAddress>{emergencyBell.safeAddress}</A.ReportAddress>
                                    <button onClick={() => handleDeleteEmergencyBell(index)}>X</button>
                                </A.MemberItem>
                            ))}
                        </S.MemberContainer>
                        <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                            <K.AddBox onClick={toggleEmergencyBellPopup}>비상벨 추가하기</K.AddBox>
                        </div>
                    </>
                )}
            </S.ScrollBox>


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
                                <K.Input type="text" name="safeNum" placeholder="자치구" value={newCctvData.safeNum} onChange={handleInputChange} />
                                <K.SubTitle>
                                    위도
                                </K.SubTitle>
                                <K.Input type="text" name="safeY" placeholder="위도" value={newCctvData.safeY} onChange={handleInputChange} />
                            </K.InputBox>
                            <K.InputBox>
                                <K.SubTitle>
                                    안심 주소
                                </K.SubTitle>
                                <K.Input type="text" name="safeAddress" placeholder="안심 주소" value={newCctvData.safeAddress} onChange={handleInputChange} />
                                <K.SubTitle>
                                    경도
                                </K.SubTitle>
                                <K.Input type="text" name="safeX" placeholder="경도" value={newCctvData.safeX} onChange={handleInputChange} />
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
        </S.NoScrollContainer >
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
