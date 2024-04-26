import React, { useState, useEffect } from 'react';
import * as S from "./EvaluationIndicatorsCss";
import * as A from "../../aiSettingPage/aiSettingItems/AiSettingListCss";

import Rate1 from "../../../assets/Rate1.png";
import Rate2 from "../../../assets/Rate2.png";
import Rate3 from "../../../assets/Rate3.png";

export default function EvaluationIndicatorsList() {
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedIndicator, setSelectedIndicator] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        document.body.style = `overflow: hidden`;
        return () => document.body.style = `overflow: auto`
    }, [])

    // Handle change in selected AI model
    const handleModelChange = (event) => {
        setSelectedModel(event.target.value);
        setSelectedImage(null); // Reset selected image when model changes
    };

    // Handle change in selected AI model indicator
    const handleIndicatorChange = (event) => {
        setSelectedIndicator(event.target.value);
        // Set selected image based on model and indicator
        setSelectedImage(getSelectedImage(selectedModel, event.target.value));
    };

    // Function to get the corresponding image based on model and indicator
    const getSelectedImage = (model, indicator) => {
        switch (model) {
            case 'model1':
                return getSelectedImageForModel1(indicator);
            case 'model2':
                return indicator === 'Loss' ? Rate2 : null;
            case 'model3':
                return indicator === 'accuracy' ? Rate3 : null;
            default:
                return null;
        }
    };

    // Function to get the corresponding image for Model 1 based on indicator
    const getSelectedImageForModel1 = (indicator) => {
        switch (indicator) {
            case 'ROC_AUC':
                return Rate1;
            case 'Loss':
                return Rate2; // You can set different images for different indicators
            case 'accuracy':
                return Rate3; // You can set different images for different indicators
            default:
                return null;
        }
    };

    return (
        <S.Container>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '50px' }}>
                <S.SelectedAi>수정될 AI 모델</S.SelectedAi>
                <div style={{ display: 'flex', flexDirection: 'row', width: '800px', gpa: '50px' }}>
                    {/* AI 모델 선택 드롭다운 메뉴 */}
                    <select value={selectedModel} onChange={handleModelChange} style={{ width: '70%', borderRadius: '50px' }}>
                        <option value="">Select an AI model</option>
                        <option value="model1">Model 1</option>
                        <option value="model2">Model 2</option>
                        <option value="model3">Model 3</option>
                    </select>
                </div>
            </div>
            <S.SelectedRate>
                <div style={{ width: '300px', gpa: '50px', margin: '50px' }}>
                    {/* AI 모델 성능 지표 선택 드롭다운 메뉴 */}
                    <select value={selectedIndicator} onChange={handleIndicatorChange} style={{ width: '70%', borderRadius: '50px' }}>
                        <option value="">Select an AI model indicator</option>
                        <option value="ROC_AUC">ROC_AUC</option>
                        <option value="Loss">Loss</option>
                        <option value="accuracy">accuracy</option>
                    </select>
                </div>
                {/* 이미지 표시 */}
                {selectedImage && (
                    <img src={selectedImage} alt="Selected Indicator" style={{ margin: '50px' , width: '100%', height: '100%'}} />
                )}
            </S.SelectedRate>

        </S.Container>
    )
}