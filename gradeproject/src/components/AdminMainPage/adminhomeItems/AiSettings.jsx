import React, { useState, useEffect } from 'react';
import * as J from "../AdminMainCss";
import { useNavigate } from 'react-router-dom';

export default function AiSettings() {
    const [selectedModel, setSelectedModel] = useState("");
    const [usedDataset, setUsedDataset] = useState([]);
    const [lastUpdatedDate, setLastUpdatedDate] = useState("");
    const navigate = useNavigate();

    const handleMenuClick = (url, menuName) => {
        navigate(url);

    };
    useEffect(() => {
        fetch('http://localhost:3000/aiSettings/Data.json')
            .then(response => response.json())
            .then(data => {
                setSelectedModel(data.selectedModel);
                setUsedDataset(data.usedDataset);
                setLastUpdatedDate(data.lastUpdatedDate);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <J.AiSettingContainer>
            <J.SettingBoxHeader>
                <J.SettingBoxTitle>AI 관리</J.SettingBoxTitle>
                <J.SettingBoxSubTitle onClick={() => handleMenuClick('/aiSetting')}>더보기</J.SettingBoxSubTitle>
            </J.SettingBoxHeader>
            <J.TextContainer>
                <J.SelectedTitle>현재 선택된 모델: {selectedModel}</J.SelectedTitle>
                <J.UsedDateSetTitle>사용된 데이터 세트:</J.UsedDateSetTitle>
                <J.AiSettingsList>
                    {usedDataset.map((data, index) => (
                        <J.AiSettingsItems key={index}>{data}</J.AiSettingsItems>
                    ))}
                </J.AiSettingsList>
                <J.UpdatedDateTitle>마지막 업데이트 날짜: {lastUpdatedDate}</J.UpdatedDateTitle>
            </J.TextContainer>
        </J.AiSettingContainer>
    );
}
