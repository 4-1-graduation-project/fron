import React from 'react'
import * as S from './DetailBoxCss';

export default function DetailBox({ list }) {
  return (
    <S.ContainerBox>
        <div>{list.postName}</div>
    </S.ContainerBox>
  )
}
