import React from 'react'
import * as A from "./AiSettingListCss";

export default function AiSettingList() {
    return (
        <A.Container>
            <A.Title>AI 관리</A.Title>
            <A.SeletedAiBox>
                <div style={{display:'flex', flexDirection: 'column'}}>
                    <A.SelectedAi>수정될 AI 모델</A.SelectedAi>
                    <div>드롭다운 메뉴</div>
                </div>
                <div style={{display:'flex', flexDirection: 'row', marginTop: '130px', gap: '20px'}}>
                    <A.Button>변경</A.Button>
                    <A.Button>삭제</A.Button>
                </div>
            </A.SeletedAiBox>
        </A.Container>
    );
}
