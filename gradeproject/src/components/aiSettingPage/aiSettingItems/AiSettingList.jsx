import React, { useState, useEffect } from 'react';
import * as A from "./AiSettingListCss";
import HyperParameter from "../../../assets/HyperParameter.png";
import reLearning from "../../../assets/reLearning.png";

export default function AiSettingList() {
    const [selectedModel, setSelectedModel] = useState('');

    useEffect(() => {
        document.body.style = `overflow: hidden`;
        return () => document.body.style = `overflow: auto`
    }, [])

    // Define a function to handle the change in selected AI model
    const handleModelChange = (event) => {
        setSelectedModel(event.target.value);
    };
    return (
        <A.Container>
            <A.Title>AI 관리</A.Title>
            <A.SeletedAiBox>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <A.SelectedAi>수정될 AI 모델</A.SelectedAi>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '800px', gpa: '50px' }}>
                        {/* 드롭다운 메뉴 */}
                        <select value={selectedModel} onChange={handleModelChange} style={{ width: ' 90%', borderRadius: '50px' }}>
                            <option value="">Select an AI model</option>
                            {/* Replace the placeholders with actual AI model names */}
                            <option value="model1">Model 1</option>
                            <option value="model2">Model 2</option>
                            <option value="model3">Model 3</option>
                        </select>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginLeft: '50px' }}>
                            <A.Button>변경</A.Button>
                            <A.Button>삭제</A.Button>
                        </div>
                    </div>
                </div>

            </A.SeletedAiBox>
            <A.InputGrid>
                <div>
                    <A.InputLabel>학습률</A.InputLabel>
                    <input type="text" />
                </div>
                <div>
                    <A.InputLabel>드롭아웃</A.InputLabel>
                    <input type="text" />
                </div>
                <div>
                    <A.InputLabel>에포크 수(훈련 반복 횟수)</A.InputLabel>
                    <input type="text" />
                </div>
                <div>
                    <A.InputLabel>가중치 초기화</A.InputLabel>
                    <input type="text" />
                </div>
                <div>
                    <A.InputLabel>미니배치 크기</A.InputLabel>
                    <input type="text" />
                </div>
                <div>
                    <A.InputLabel>최적화 알고리즘</A.InputLabel>
                    <input type="text" />
                </div>
                <div>
                    <A.InputLabel>손실함수</A.InputLabel>
                    <input type="text" />
                </div>
                <div>
                    <A.InputLabel>드롭아웃</A.InputLabel>
                    <input type="text" />
                </div>
                <div>
                    <A.InputLabel>배치 정규화</A.InputLabel>
                    <input type="text" />
                </div>
            </A.InputGrid>
            <A.ButtonBox>
                <img src={HyperParameter} alt='수정' style={{ width: '180px', height: '140px' }} />
                <img src={reLearning} alt='재학습' style={{ width: '180px', height: '140px' }} />
            </A.ButtonBox>
        </A.Container>
    );
}
