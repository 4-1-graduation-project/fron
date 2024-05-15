import React, { useState, useEffect } from 'react';
import * as A from "./AiSettingListCss";
import HyperParameter from "../../../assets/HyperParameter.png";
import reLearning from "../../../assets/reLearning.png";

export default function AiSettingList() {
    const [selectedModel, setSelectedModel] = useState('');
    const [modelList, setModelList] = useState([]);

    useEffect(() => {
        // AI 모델 리스트를 가져오는 함수 호출
        fetchModelList();
    }, []);

    // AI 모델 리스트를 가져오는 함수
    const fetchModelList = () => {
        // 헤더에 토큰 추가
        const token = localStorage.getItem('accessToken');
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };

        // API로부터 AI 모델 리스트 요청
        fetch('http://ceprj.gachon.ac.kr:60004/src/admins/models', {
            headers: headers,
        })
        .then(response => response.json())
        .then(data => {
            // 받아온 데이터 중 active가 true인 모델을 찾아 선택된 모델로 설정
            const activeModel = data.find(model => model.active);
            if (activeModel) {
                setSelectedModel(activeModel.modelName);
            }
            setModelList(data); // 받아온 데이터를 상태에 저장
        })
        .catch(error => console.error('Error fetching model list:', error));
    };

    // Define a function to handle the change in selected AI model
    const handleModelChange = (event) => {
        setSelectedModel(event.target.value);
    };

    // Define a function to handle model change
    const handleChangeModel = () => {
        // 선택된 모델의 modelNum 가져오기
        const selectedModelNum = modelList.find(model => model.modelName === selectedModel)?.modelNum;
        if (selectedModelNum) {
            // API 호출하여 해당 모델의 active 값을 true로 변경
            const token = localStorage.getItem('accessToken');
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            };
            fetch(`http://ceprj.gachon.ac.kr:60004/src/admin/select/${selectedModelNum}`, {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify({ active: true })
            })
            .then(response => response.json())
            .then(data => {
                // 페이지를 새로고침하여 변경된 모델을 적용
                alert('모델이 변경되었습니다.');
                window.location.reload();

            })
            .catch(error => console.error('Error updating model:', error));
        }
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
                            {/* AI 모델 리스트를 드롭다운에 반영 */}
                            {modelList.map(model => (
                                <option key={model.modelNum} value={model.modelName}>{model.modelName}</option>
                            ))}
                        </select>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginLeft: '50px' }}>
                            <A.Button onClick={handleChangeModel}>변경</A.Button>
                            <A.Button>삭제</A.Button>
                        </div>
                    </div>
                </div>
            </A.SeletedAiBox>
            <A.InputGrid>
                {/* 입력 필드들 */}
            </A.InputGrid>
            <A.ButtonBox>
                <img src={HyperParameter} alt='수정' style={{ width: '180px', height: '140px' }} />
                <img src={reLearning} alt='재학습' style={{ width: '180px', height: '140px' }} />
            </A.ButtonBox>
        </A.Container>
    );
}
