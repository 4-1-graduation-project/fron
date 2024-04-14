import React from 'react'
import * as M from "../AdminMainCss";


export default function DataManagement() {
    return (
        <M.DataManagementContainer>
            <M.SettingBoxHeader>
                <M.SettingBoxTitle>데이터 관리</M.SettingBoxTitle>
                <M.SettingBoxSubTitle>더보기</M.SettingBoxSubTitle>
            </M.SettingBoxHeader>
            <M.TextContainer>
                <M.SelectedTitle>강수량 데이터 : 2건</M.SelectedTitle>
                <M.UsedDateSetTitle>유동인구 데이터 : 3건</M.UsedDateSetTitle>
                <M.UpdatedDateTitle>총 데이터: 5건</M.UpdatedDateTitle>
                <M.AiSettingsList>
                </M.AiSettingsList>
            </M.TextContainer>
        </M.DataManagementContainer>
    )
}

