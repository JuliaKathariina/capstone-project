import styled from "styled-components";

export default function Form({ children, type = "text", ...props }) {
  return (
    <StyledForm type={type} {...props}>
      {children}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  padding: 10px;
  margin: 10px;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0px 10px 13px;
`;
