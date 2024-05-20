import React, { useState, useEffect } from 'react';
import * as J from "../AdminMainCss";
import { useNavigate } from 'react-router-dom';
import Rate1 from "../../../assets/Rate1.png";
import Rate2 from "../../../assets/Rate2.png";
import Rate3 from "../../../assets/Rate3.png";
import left from "../../../assets/left.png";
import right from "../../../assets/right.png";


export default function AiSettings() {
    const [selectedModel, setSelectedModel] = useState("");
    const [usedDataset, setUsedDataset] = useState([]);
    const [lastUpdatedDate, setLastUpdatedDate] = useState("");
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

    const [currentIndex, setCurrentIndex] = useState(0); // 현재 슬라이드 인덱스
    const images = [Rate1, Rate2, Rate3]; // 이미지 배열

    // 다음 슬라이드로 이동하는 함수
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    // 이전 슬라이드로 이동하는 함수
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const imagesData = [
        { image: Rate1, title: "MSE" },
        { image: Rate2, title: "R-squared" },
        { image: Rate3, title: "RMSE" },
    ];

    {/* 
    useEffect(() => {
        fetch('http://localhost:60004/aiSettings/Data.json')
            .then(response => response.json())
            .then(data => {
                setSelectedModel(data.selectedModel);
                setUsedDataset(data.usedDataset);
                setLastUpdatedDate(data.lastUpdatedDate);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    */}

    return (
        <J.AiSettingContainer>
            <J.SettingBoxHeader>
                <J.SettingBoxTitle>AI 관리</J.SettingBoxTitle>
                <J.SettingBoxSubTitle onClick={() => handleMenuClick('/aiSetting')}>더보기</J.SettingBoxSubTitle>
            </J.SettingBoxHeader>
            <J.TextBox>
                현재 사용중인 모델 : {report.modelName}
            </J.TextBox>
            <J.SlideBox>
                <J.SlideButton onClick={prevSlide}>
                    <img src={left} alt='왼쪽' style={{ width: '10px', height: '18px' }} />
                </J.SlideButton>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <J.SlideImage src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
                    <J.SlideTitle>{imagesData[currentIndex].title}</J.SlideTitle>
                </div>
                <J.SlideButton onClick={nextSlide}>
                    <img src={right} alt='오른쪽' style={{ width: '10px', height: '18px' }} />
                </J.SlideButton>
            </J.SlideBox>
        </J.AiSettingContainer>
    );
}
