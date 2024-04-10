import React from 'react'
import * as T from "./AdminMainCss";


export default function SideMenu() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <T.Title>등대지기</T.Title>
            <T.MenuBox>
                <T.Menu>회원 관리</T.Menu>
                <T.Menu>신고 관리</T.Menu>
                <T.Menu>제도 데이터 관리</T.Menu>
                <T.Menu>유동인구 데이터 관리</T.Menu>
                <T.Menu>강수량 데이터 관리</T.Menu>
                <T.Menu>AI 관리</T.Menu>
                <T.Menu>AI 평가 지표 관리</T.Menu>
            </T.MenuBox>
        </div>
    )
}
