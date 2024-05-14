import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import * as A from "../../userManagementPage/userManagementItems/MemberListCss";
import * as K from "../../FloatingPopulationPage/FloatingPopulationItems/FloatingPopulationListcss";
import * as Z from "../../mapDataManagementPage/mapDataItems/MapDataListCss";
import * as D from "./PrecipitationListcss";
import emptystar from "../../../assets/emptystar.png";
import fillstar from "../../../assets/fillstar.png";

export default function PrecipitationList() {
    const [precipitations, setPrecipitations] = useState([]);

    const postsPerPage = 10; // 페이지당 나타낼 게시물 수
    const [currentPage, setCurrentPage] = useState(1);
    // 현재 페이지의 첫 번째 회원의 인덱스
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;


    const [searchTerm, setSearchTerm] = useState('');
    const [searchOption, setSearchOption] = useState('userName'); // 기본적으로 이름으로 검색

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
        const token = localStorage.getItem('accessToken');
        fetch('http://ceprj.gachon.ac.kr:60004/src/admins/feedbacks', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(response => response.json())
            .then(data => setPrecipitations(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // 검색된 회원 필터링
    const filteredPrecipitations = precipitations.filter(precipitation => {
        // 선택된 옵션에 따라 검색 조건 변경
        switch (searchOption) {
            case 'userName':
                return precipitation.userName.toLowerCase().includes(searchTerm.toLowerCase());
            case 'feedGrade':
                return precipitation.feedGrade.toLowerCase().includes(searchTerm.toLowerCase());
            case 'feedContent':
                return precipitation.feedContent.toLowerCase().includes(searchTerm.toLowerCase());
            default:
                return true;
        }
    });

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
                                <select value={searchOption} onChange={handleOptionChange} style={{ borderRadius: '20px', borderColor: '#3296D7', outline: 'none' }}>
                                    <option value="userName">사용자</option>
                                    <option value="feedGrade">별점</option>
                                    <option value="feedContent">내용</option>
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
                            <K.ReportUser>{precipitation.userName}</K.ReportUser>
                            <K.ReportStar>
                                {[...Array(parseInt(precipitation.feedGrade)).keys()].map((_, index) => (
                                    <img src={fillstar} alt="filled star" key={index} style={{ width: '20px', height: '20px' }} />
                                ))}
                                {[...Array(5 - parseInt(precipitation.feedGrade)).keys()].map((_, index) => (
                                    <img src={emptystar} alt="empty star" key={index} style={{ width: '20px', height: '20px' }} />
                                ))}
                            </K.ReportStar>
                            <D.ReportTitle>{precipitation.feedContent}</D.ReportTitle>
                            {/* <button onClick={() => handleDelete(index)}>X</button> */}
                        </D.MemberItem>
                    ))}
                </A.MemberContainer>
            </A.Box>
        </D.Container>
    );
}
