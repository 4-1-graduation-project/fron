import React, { useState, useEffect } from 'react';
import * as X from "../AdminMainCss";
import styled from 'styled-components';

export default function UserRate() {
    const [reportData, setReportData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/userRate/Data.json')
            .then(response => response.json())
            .then(data => setReportData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <X.UserRateContainer>
            <X.ReportBoxHeader>
                <X.ReportBoxTitle>사용자 평가</X.ReportBoxTitle>
            </X.ReportBoxHeader>
            <X.ReportList>
                {reportData.map((report, index) => (
                    <X.ReportListItem key={index}>
                        <X.RateTitle>{report.comment}</X.RateTitle>
                        <X.RateAuthor>{report.author}</X.RateAuthor>
                    </X.ReportListItem>
                ))}
            </X.ReportList>
        </X.UserRateContainer>
    );
}
