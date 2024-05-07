import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import * as A from "../../userManagementPage/userManagementItems/MemberListCss";
import * as K from "../../FloatingPopulationPage/FloatingPopulationItems/FloatingPopulationListcss";
import * as Z from "../../mapDataManagementPage/mapDataItems/MapDataListCss";
import * as D from "./PrecipitationListcss";
import emptystar from "../../../assets/emptystar.png";
import fillstar from "../../../assets/fillstar.png";

export default function PrecipitationList() {
    const [precipitations, serPrecipitations] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newPrecipitationsData, setNewPrecipitationsData] = useState({
        date: '',
        rainfallAmount: '',
        region: '',
    });

    const postsPerPage = 10; // 페이지당 나타낼 게시물 수
    const [currentPage, setCurrentPage] = useState(1);
    // 현재 페이지의 첫 번째 회원의 인덱스
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;


    const [searchTerm, setSearchTerm] = useState('');
    const [searchOption, setSearchOption] = useState('user'); // 기본적으로 이름으로 검색

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

    useEffect(() => {
        fetch('http://localhost:60004/precipitation/Data.json')
            .then(response => response.json())
            .then(data => serPrecipitations(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // 검색된 회원 필터링
    const filteredPrecipitations = precipitations.filter(precipitation => {
        // 선택된 옵션에 따라 검색 조건 변경
        switch (searchOption) {
            case 'user':
                return precipitation.user.toLowerCase().includes(searchTerm.toLowerCase());
            case 'rate':
                return precipitation.rate.toLowerCase().includes(searchTerm.toLowerCase());
            case 'content':
                return precipitation.content.toLowerCase().includes(searchTerm.toLowerCase());
            default:
                return true;
        }
    });




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
        fetch('http://localhost:60004/MapData/precipitation/Data.json', {
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
        <D.Container>
            <A.Box>
                <A.Title>
                    {/* 검색 창 */}
                    <A.ReviewSearchBox>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div>
                                <A.ReviewInput
                                    type="text"
                                    placeholder="검색어를 입력하세요"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                />
                            </div>
                            <div>
                                {/* 검색 옵션 드롭다운 */}
                                <select value={searchOption} onChange={handleOptionChange} style={{ borderRadius: '20px', borderColor: '#3296D7', outline:'none' }}>
                                    <option value="user">사용자</option>
                                    <option value="rate">별점</option>
                                    <option value="content">내용</option>
                                </select>
                            </div>
                        </div>
                    </A.ReviewSearchBox>
                </A.Title>
                <A.FieldContainer>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
                        <D.DateField>사용자</D.DateField>
                        <K.UserNameField>별점</K.UserNameField>
                        <K.TitleField>리뷰내용</K.TitleField>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                        <A.PaginationBox>
                            {[...Array(Math.ceil(filteredPrecipitations.length / postsPerPage)).keys()].map((pageNumber) => (
                                <A.PageNumber
                                    key={pageNumber}
                                    onClick={() => paginate(pageNumber + 1)}
                                >
                                    {pageNumber + 1}
                                </A.PageNumber>
                            ))}
                        </A.PaginationBox>
                    </div>
                </A.FieldContainer>
                <A.MemberContainer>
                    {filteredPrecipitations.slice(indexOfFirstPost, indexOfLastPost).map((precipitation, index) => (
                        <D.MemberItem>
                            <K.ReportUser>{precipitation.user}</K.ReportUser>
                            <K.ReportStar>
                                {[...Array(parseInt(precipitation.rate)).keys()].map((_, index) => (
                                    <img src={fillstar} alt="filled star" key={index} style={{ width: '20px', height: '20px' }} />
                                ))}
                                {[...Array(5 - parseInt(precipitation.rate)).keys()].map((_, index) => (
                                    <img src={emptystar} alt="empty star" key={index} style={{ width: '20px', height: '20px' }} />
                                ))}
                            </K.ReportStar>
                            <D.ReportTitle>{precipitation.content}</D.ReportTitle>
                            {/* <button onClick={() => handleDelete(index)}>X</button> */}
                        </D.MemberItem>
                    ))}
                </A.MemberContainer>


                {/* 강수량 데이터 추가 팝업 */}
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
                                    <Z.Input type="text" name="date" placeholder="날짜" value={newPrecipitationsData.date} onChange={handleInputChange} />
                                    <Z.SubTitle>
                                        지역
                                    </Z.SubTitle>
                                    <Z.Input type="text" name="rainfallAmount" placeholder="지역" value={newPrecipitationsData.rainfallAmount} onChange={handleInputChange} />
                                </Z.InputBox>
                                <Z.InputBox>
                                    <Z.SubTitle>
                                        강수량
                                    </Z.SubTitle>
                                    <Z.Input type="text" name="region" placeholder="강수량" value={newPrecipitationsData.region} onChange={handleInputChange} />
                                </Z.InputBox>
                            </div>

                        </Z.Popup>
                    </Modal>
                )}
            </A.Box>
        </D.Container>
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