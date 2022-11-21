import styled from "styled-components";
function AppHeader() {
  return (
    <Header>
      <h3> Soul Master</h3>
    </Header>
  );
}
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  margin-bottom: 200px;
  max-height: 40px;
  border-bottom: none;
`;
export default AppHeader;
