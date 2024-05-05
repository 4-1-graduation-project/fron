import React, { useState, useEffect } from 'react';
import * as G from "../AdminMainCss";
import { useNavigate } from 'react-router-dom';
import BarChart from "./BarChart";

export default function UserReport() {
  const [reportData, setReportData] = useState([]);
  const navigate = useNavigate();

  const handleMenuClick = (url, menuName) => {
    navigate(url);

  };

  {/* 
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        //http://ceprj.gachon.ac.kr:60004/src/admins/reports
        const response = await fetch('http://ceprj.gachon.ac.kr:60004/src/admins/reports', {
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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchReports();
  }, []);
*/}
  return (
    <G.Container>
      <G.ReportBoxHeader>
        <G.ReportBoxTitle>사용자 신고</G.ReportBoxTitle>
        <G.ReportBoxSubTitle onClick={() => handleMenuClick('/adminReport')}>더보기</G.ReportBoxSubTitle>
      </G.ReportBoxHeader>
      <G.ReportList>
        <BarChart />
      </G.ReportList>
    </G.Container>
  );
}