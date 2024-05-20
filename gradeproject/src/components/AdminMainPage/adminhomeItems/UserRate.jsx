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
    const report = reportData[0] || {};
    useEffect(() => {
        const fetchReports = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                //
                const response = await fetch('http://ceprj.gachon.ac.kr:60004/src/admins/main', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch reports');
                }
                const data = await response.json();
                setReportData(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchReports();
    }, []);

    return (
        <X.UserRateContainer>
            <X.ReportBoxHeader>
                <X.ReportBoxTitle>사용자 평가</X.ReportBoxTitle>
                <X.SettingBoxSubTitle onClick={() => handleMenuClick('/precipitationManagement')}>더보기</X.SettingBoxSubTitle>
            </X.ReportBoxHeader>
            <X.ReportList>
                <X.ReportItemSide>
                    <X.ReportNumber>
                        {report.grade5Count}
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
                        {report.grade4Count}
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
                        {report.grade3Count}
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
                        {report.grade2Count}
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
                        {report.grade1Count}
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
