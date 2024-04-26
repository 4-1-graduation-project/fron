import { useNavigate } from 'react-router-dom';
import SideMenu from "../../components/adminMainPage/SideMenu";
import backbutton from "../../assets/backbutton.png";
import * as Z from "../adminMainPage/AdminMainCss";
import EvaluationIndicatorsList from './evaluationIndicatorsItems/EvaluationIndicatorsList';

export default function EvaluationIndicators() {
  const navigate = useNavigate();

  const handleMenuClick = (url, menuName) => {
    navigate(url);

  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
      <Z.LeftSection>
        <SideMenu />
      </Z.LeftSection>
      <Z.RightSection>
        <Z.Header>
          <Z.BackButton onClick={() => handleMenuClick('/adminMain')}>
            <img src={backbutton} alt='뒤로가기' style={{ width: '50px', height: '50px' }} />
          </Z.BackButton>
          <Z.LogoutButton>
            로그아웃
          </Z.LogoutButton>
        </Z.Header>
        <Z.MainContainer>
          <EvaluationIndicatorsList />
        </Z.MainContainer>
      </Z.RightSection>
    </div>
  )
}
