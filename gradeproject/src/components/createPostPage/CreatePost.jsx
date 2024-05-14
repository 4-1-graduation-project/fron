import * as A from "../adminMainPage/AdminMainCss";
import SideMenu from "../adminMainPage/SideMenu";
import { useNavigate } from 'react-router-dom';
import backbutton from "../../assets/backbutton.png";
import InputBox from './InputBox';

export default function CreatePost() {
  const navigate = useNavigate();

  const handleMenuClick = (url, menuName) => {
    navigate(url);

  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '700px' }}>
      <A.LeftSection>
        <SideMenu />
      </A.LeftSection>
      <A.RightSection>
        <A.ReportDetailHeader>
          <A.BackButton onClick={() => handleMenuClick('/notice')}>
            <img src={backbutton} alt='뒤로가기' style={{ width: '30px', height: '30px' }} />
          </A.BackButton>
          <A.LogoutButton>
            관리자님 환영합니다.
          </A.LogoutButton>
        </A.ReportDetailHeader>
        <A.MainContainer>
          <InputBox />
        </A.MainContainer>
      </A.RightSection>
    </div>
  )
}
