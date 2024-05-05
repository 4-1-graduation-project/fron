import React, { useState, useEffect } from 'react';
import * as X from "../AdminMainCss";
import styled from 'styled-components';
import star from "../../../assets/star.png";
import { useNavigate } from 'react-router-dom';

export default function UserRate() {
    const navigate = useNavigate();

    const handleMenuClick = (url, menuName) => {
        navigate(url);

    };
    const [reportData, setReportData] = useState([]);

    {/* 
    useEffect(() => {
        fetch('http://localhost:3000/userRate/Data.json')
            .then(response => response.json())
            .then(data => setReportData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    */}
    
    return (
        <X.UserRateContainer>
            <X.ReportBoxHeader>
                <X.ReportBoxTitle>사용자 평가</X.ReportBoxTitle>
                <X.SettingBoxSubTitle onClick={() => handleMenuClick('/precipitationManagement')}>더보기</X.SettingBoxSubTitle>
            </X.ReportBoxHeader>
            <X.ReportList>
                <X.ReportItemSide>
                    <X.ReportNumber>
                        1
                    </X.ReportNumber>
                    <X.ReportText>
                        매우 좋음
                    </X.ReportText>
                    <X.StarBox>
                        <img src={star} alt='별' style={{ width: '20px', height: '20px' }} />
                        <img src={star} alt='별' style={{ width: '20px', height: '20px' }} />
                        <img src={star} alt='별' style={{ width: '20px', height: '20px' }} />
                        <img src={star} alt='별' style={{ width: '20px', height: '20px' }} />
                        <img src={star} alt='별' style={{ width: '20px', height: '20px' }} />
                    </X.StarBox>
                </X.ReportItemSide>
                <X.ReportItem>
                    <X.ReportNumber>
                        3
                    </X.ReportNumber>
                    <X.ReportText>
                        좋음
                    </X.ReportText>
                    <X.StarBox>
                        <img src={star} alt='별' style={{ width: '20px', height: '20px' }} />
                        <img src={star} alt='별' style={{ width: '20px', height: '20px' }} />
                        <img src={star} alt='별' style={{ width: '20px', height: '20px' }} />
                        <img src={star} alt='별' style={{ width: '20px', height: '20px' }} />
                    </X.StarBox>
                </X.ReportItem>
                <X.ReportItemSide>
                    <X.ReportNumber>
                        5
                    </X.ReportNumber>
                    <X.ReportText>
                        보통
                    </X.ReportText>
                    <X.StarBox>
                        <img src={star} alt='별' style={{ width: '20px', height: '20px' }} />
                        <img src={star} alt='별' style={{ width: '20px', height: '20px' }} />
                        <img src={star} alt='별' style={{ width: '20px', height: '20px' }} />
                    </X.StarBox>
                </X.ReportItemSide>
                <X.ReportItem>
                    <X.ReportNumber>
                        2
                    </X.ReportNumber>
                    <X.ReportText>
                        나쁨
                    </X.ReportText>
                    <X.StarBox>
                        <img src={star} alt='별' style={{ width: '20px', height: '20px' }} />
                        <img src={star} alt='별' style={{ width: '20px', height: '20px' }} />
                    </X.StarBox>
                </X.ReportItem>
                <X.ReportItemSide>
                    <X.ReportNumber>
                        1
                    </X.ReportNumber>
                    <X.ReportText>
                        매우 나쁨
                    </X.ReportText>
                    <X.StarBox>
                        <img src={star} alt='별' style={{ width: '20px', height: '20px' }} />
                    </X.StarBox>
                </X.ReportItemSide>
            </X.ReportList>
        </X.UserRateContainer>
    );
}
