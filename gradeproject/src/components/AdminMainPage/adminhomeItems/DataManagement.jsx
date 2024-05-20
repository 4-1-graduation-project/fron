import React, { useState, useEffect } from 'react';
import * as M from "../AdminMainCss";
import { useNavigate } from 'react-router-dom';
import { styled } from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import LineGraph from "./LineGraph";

ChartJS.register(ArcElement, Tooltip, Legend);

const Main = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;


export default function DataManagement() {
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

    const Data = {
        labels: ["회원 데이터", "신고 데이터", "지도 데이터"],
        datasets: [
            {
                data: [report.userNum || 0, report.reportNum || 0, report.safeNum || 0],
                backgroundColor: ["#ffeb9b", "#b5f2ff", "#c5f2ba"],
                borderColor: ["#ffeb9b", "#b5f2ff", "#c5f2ba"],
            },
        ],
    };


    const Options = {};
    const navigate = useNavigate();

    const handleMenuClick = (url, menuName) => {
        navigate(url);

    };



    return (
        <M.DataManagementContainer>
            <M.SettingBoxHeader>
                <M.SettingBoxTitle>데이터 관리</M.SettingBoxTitle>
                <M.SettingBoxSubTitle onClick={() => handleMenuClick('/floatingPopulationManagement')}>더보기</M.SettingBoxSubTitle>
            </M.SettingBoxHeader>
            <M.TextContainer>
                <Main>
                    <Doughnut data={Data} options={Options}></Doughnut>
                </Main>
                <LineGraph />
            </M.TextContainer>
        </M.DataManagementContainer>
    )
}

