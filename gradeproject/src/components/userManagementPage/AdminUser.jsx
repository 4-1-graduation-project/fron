import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

const AdminBox = styled.div`
  height: 100%; /* 추후 메뉴판 길이에 맞게 수정 */
  display: flex;
  flex-direction: column;
  position: relative;
`;
export default function AdminUser() {
    return (
        <AdminBox>
            <Outlet />
        </AdminBox>
    );
}
