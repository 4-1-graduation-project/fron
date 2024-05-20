import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'react-modal';
import Pagination from 'react-js-pagination'; // react-js-pagination 추가
import * as A from "../../userManagementPage/userManagementItems/MemberListCss";
import * as S from "../../userReportPage/userReportItems/ReportListCss";
import * as K from "./FloatingPopulationListcss";
import * as Z from "../../mapDataManagementPage/mapDataItems/MapDataListCss";
import Loading from '../../loading/Loading';

Modal.setAppElement('#root');

export default function FloatingPopulationList() {
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const handleMenuClick = (url, menuName) => {
        navigate(url);
    };

    const [floatingPopulations, setFloatingPopulations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchOption, setSearchOption] = useState('dataGu'); // 기본적으로 자치구로 검색
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newFloatingPopulationData, setNewFloatingPopulationData] = useState({
        dataDate: '',
        dataGu: '',
        dataDong: '',
        dataPeople: '',
        dataArea: ''
    });

    const postsPerPage = 10; // 페이지당 나타낼 게시물 수

    // 현재 페이지의 첫 번째 회원의 인덱스
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    // 페이지 변경
    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber); // 페이지 변경 핸들러

    // 옵션 변경 함수
    const handleOptionChange = (event) => {
        setSearchOption(event.target.value);
    };

    // 검색 함수
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // 검색어가 변경되면 currentPage를 1로 설정하여 첫 번째 페이지로 이동
    };

    useEffect(() => {
        const token = localStorage.getItem('accessToken');

        fetch('http://ceprj.gachon.ac.kr:60004/src/admins/flowPop', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setFloatingPopulations(data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // 검색된 회원 필터링
    const filteredfloatingPopulations = floatingPopulations.filter(floatingPopulation => {
        // 선택된 옵션에 따라 검색 조건 변경
        switch (searchOption) {
            case 'dataDate':
                return floatingPopulation.dataDate.toLowerCase().includes(searchTerm.toLowerCase());
            case 'dataGu':
                return floatingPopulation.dataGu.toLowerCase().includes(searchTerm.toLowerCase());
            case 'dataDong':
                return floatingPopulation.dataDong.toLowerCase().includes(searchTerm.toLowerCase());
            default:
                return true;
        }
    });

    useEffect(() => {
        document.body.style = `overflow: hidden`;
        return () => document.body.style = `overflow: auto`
    }, [])

    //유동인구 데이터 삭제하는 로직
    const handleDelete = (dataNum) => {
        // 헤더에 토큰 추가
        const token = localStorage.getItem('accessToken');
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };

        // API로 데이터 삭제 요청
        fetch(`http://ceprj.gachon.ac.kr:60004/src/admins/flowPop/${dataNum}`, {
            method: 'DELETE',
            headers: headers,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete population data');
                }
                // 삭제가 완료되면 alert로 알림
                alert('데이터가 삭제되었습니다.');
                // 삭제된 데이터를 제외한 목록으로 업데이트
                const updatedFloatingPopulations = floatingPopulations.filter(population => population.dataNum !== dataNum);
                setFloatingPopulations(updatedFloatingPopulations);
            })
            .catch(error => {
                console.error('Error deleting population data:', error);
                // 에러 메시지 표시
                alert('데이터 삭제에 실패했습니다.');
            });
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
        // 헤더에 토큰 추가
        const token = localStorage.getItem('accessToken');
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };

        // API로 데이터 전송
        fetch('http://ceprj.gachon.ac.kr:60004/src/admins/flowPop', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(newFloatingPopulationData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add new population data');
                }
                return response.json();
            })
            .then(data => {
                console.log('New population data added successfully:', data);
                // 데이터 업데이트하기
                const updatedFloatingPopulations = [...floatingPopulations, newFloatingPopulationData];
                setFloatingPopulations(updatedFloatingPopulations);
                // 팝업 닫기
                setIsPopupOpen(false);
                // 인풋창 리셋
                setNewFloatingPopulationData({
                    dataDate: '',
                    dataGu: '',
                    dataDong: '',
                    dataPeople: '',
                    dataArea: ''
                });
                // 결과보여주기
                alert('데이터가 추가되었습니다.');
            })
            .catch(error => {
                console.error('Error adding new population data:', error);
                // 에러 메시지 표시
                alert('데이터 추가에 실패했습니다.');
            });
    };

    return (
        <A.Container>
            <A.Box>
                <A.TitleBox>
                    {/* 검색 창 */}
                    <A.pageBox>
                        <A.SearchMapBox>
                            <A.ReviewInput
                                type="text"
                                placeholder="검색어를 입력하세요"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            {/* 검색 옵션 드롭다운 */}
                            <select value={searchOption} onChange={handleOptionChange}>
                                <option value="dataDate">측정시간</option>
                                <option value="dataGu">자치구</option>
                                <option value="dataDong">행정동</option>
                            </select>
                        </A.SearchMapBox>
                        {/* 페이지네이션 */}
                        <div style={{ display: 'flex', flexDirection: 'row', height: '100%', alignItems: 'center' }}>
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={postsPerPage}
                                totalItemsCount={filteredfloatingPopulations.length}
                                pageRangeDisplayed={5}
                                onChange={handlePageChange}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        </div>
                    </A.pageBox>
                </A.TitleBox>
                <>
                    <A.FieldContainer>
                        <K.DateField>측정시간</K.DateField>
                        <K.UserNameField>자치구</K.UserNameField>
                        <K.TitleField>행정동</K.TitleField>
                        <S.AreaField>지역</S.AreaField>
                        <S.ContentField>방문자수</S.ContentField>
                    </A.FieldContainer>
                    <A.MemberContainer>
                        {filteredfloatingPopulations.slice(indexOfFirstPost, indexOfLastPost).map((floatingPopulation, index) => (
                            <A.MemberItem key={index}>
                                <K.ReportDate>{floatingPopulation.dataDate}</K.ReportDate>
                                <K.ReportName>{floatingPopulation.dataGu}</K.ReportName>
                                <K.ReportTitle>{floatingPopulation.dataDong}</K.ReportTitle>
                                <S.ReportContent>{floatingPopulation.dataArea}</S.ReportContent>
                                <S.ReportContent>{floatingPopulation.dataPeople}</S.ReportContent>
                                <button onClick={() => handleDelete(floatingPopulation.dataNum)}>X</button>
                            </A.MemberItem>
                        ))}

                    </A.MemberContainer>
                    <Z.ButtonContainer>
                        <Z.AddBox onClick={togglePopup}>유동인구 추가하기</Z.AddBox>
                        <Z.AddBox onClick={() => handleMenuClick('/floatingPopulationManagement/register')}>파일 업로드하기</Z.AddBox>
                    </Z.ButtonContainer>
                </>
                {/* 유동인구 데이터 추가 팝업 */}
                {isPopupOpen && (
                    <Modal
                        isOpen={isPopupOpen}
                        onRequestClose={() => setIsPopupOpen(false)}
                        style={customModalStyles}
                    >
                        <Z.Popup>
                            <Z.Title>유동인구 추가하기</Z.Title>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10px', marginLeft: '50px', gap: '10px' }}>
                                <Z.InputBox>
                                    <Z.SubTitle>
                                        측정시간
                                    </Z.SubTitle>
                                    <Z.Input type="text" name="dataDate" placeholder="측정시간" value={newFloatingPopulationData.dataDate} onChange={handleInputChange} />
                                    <Z.SubTitle>
                                        행정동
                                    </Z.SubTitle>
                                    <Z.Input type="text" name="dataDong" placeholder="행정동" value={newFloatingPopulationData.dataDong} onChange={handleInputChange} />
                                </Z.InputBox>
                                <Z.InputBox>
                                    <Z.SubTitle>
                                        자치구
                                    </Z.SubTitle>
                                    <Z.Input type="text" name="dataGu" placeholder="자치구" value={newFloatingPopulationData.dataGu} onChange={handleInputChange} />
                                    <Z.SubTitle>
                                        방문자수
                                    </Z.SubTitle>
                                    <Z.Input type="text" name="dataPeople" placeholder="숫자로 입력하세요" value={newFloatingPopulationData.dataPeople} onChange={handleInputChange} />
                                </Z.InputBox>
                                <Z.MiddleTitle>
                                    <div>지역명</div>
                                    <Z.Input type="text" name="dataArea" placeholder="지역" value={newFloatingPopulationData.dataArea} onChange={handleInputChange} />
                                </Z.MiddleTitle>
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
