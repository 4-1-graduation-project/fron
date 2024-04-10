import React, { useState, useEffect } from 'react';
import * as G from "../AdminMainCss";

export default function UserReport() {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/userReport/Data.json')
      .then(response => response.json())
      .then(data => setReportData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <G.Container>
      <G.ReportBoxHeader>
        <G.ReportBoxTitle>사용자 신고</G.ReportBoxTitle>
        <G.ReportBoxSubTitle>더보기</G.ReportBoxSubTitle>
      </G.ReportBoxHeader>
      <G.ReportList>
        {reportData.map((report, index) => (
          <G.ReportListItem key={index}>
            <G.ReportTitle>{report.title}</G.ReportTitle>
            <G.ReportAuthor>{report.author}</G.ReportAuthor>
            <G.ReportDate>{report.date}</G.ReportDate>
          </G.ReportListItem>
        ))}
      </G.ReportList>
    </G.Container>
  );
}