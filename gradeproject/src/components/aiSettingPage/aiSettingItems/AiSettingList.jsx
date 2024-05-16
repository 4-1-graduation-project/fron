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

    // Define a function to handle model deletion
    const handleDeleteModel = () => {
        // 선택된 모델의 modelNum 가져오기
        const selectedModelNum = modelList.find(model => model.modelName === selectedModel)?.modelNum;
        if (selectedModelNum) {
            // API 호출하여 해당 모델 삭제
            const token = localStorage.getItem('accessToken');
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            };
            fetch(`http://ceprj.gachon.ac.kr:60004/src/admins/model/${selectedModelNum}`, {
                method: 'DELETE',
                headers: headers,
            })
                .then(response => {
                    if (response.ok) {
                        // 삭제 성공 시 페이지 새로고침
                        alert('모델이 삭제되었습니다.');
                        window.location.reload();
                    } else {
                        // 삭제 실패 시 에러 처리
                        throw new Error('Failed to delete model');
                    }
                })
                .catch(error => console.error('Error deleting model:', error));
        }
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

    // batchSize와 epoch 값을 상태로 관리
    const [batchSize, setBatchSize] = useState('');
    const [epoch, setEpoch] = useState('');

    // 모델이 활성화된 상태에서 batchSize와 epoch 값을 가져오는 함수
    const getActiveModelParams = () => {
        // 선택된 모델 중 active가 true인 모델 찾기
        const activeModel = modelList.find(model => model.active);
        // active가 true인 모델이 있을 경우 해당 모델의 batchSize와 epoch 값을 반환
        if (activeModel) {
            return {
                batchSize: activeModel.batchSize,
                epoch: activeModel.epoch
            };
        }
        // active가 true인 모델이 없을 경우 기본값 반환
        return {
            batchSize: '',
            epoch: ''
        };
    };


    // useEffect를 사용하여 모델이 바뀔 때마다 batchSize와 epoch 값을 설정
    useEffect(() => {
        const { batchSize, epoch } = getActiveModelParams();
        // 선택된 모델의 batchSize와 epoch 값을 설정
        setBatchSize(batchSize);
        setEpoch(epoch);
    }, [selectedModel, modelList]);

    return (
        <A.Container>
            <A.Title>AI 관리</A.Title>
            <A.SeletedAiBox>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <A.SelectedAi>현재 선택된 모델 : {selectedModel}</A.SelectedAi>
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
                            <A.Button onClick={handleDeleteModel}>삭제</A.Button>
                        </div>
                    </div>
                </div>
            </A.SeletedAiBox>
            <A.InputGrid>
                <A.InputBox>
                    <A.InputLabel>
                        에포크 수(훈련 반복 횟수)
                    </A.InputLabel>
                    <input value={epoch} onChange={(e) => setEpoch(e.target.value)} />
                </A.InputBox>
                <A.InputBox>
                    <A.InputLabel>
                        미니배치 크기
                    </A.InputLabel>
                    <input value={batchSize} onChange={(e) => setBatchSize(e.target.value)} />
                </A.InputBox>
            </A.InputGrid>
            <A.ButtonBox>
                <img src={HyperParameter} alt='수정' style={{ width: '180px', height: '140px' }} />
                <img src={reLearning} alt='재학습' style={{ width: '180px', height: '140px' }} />
            </A.ButtonBox>
        </A.Container>
    );
}
