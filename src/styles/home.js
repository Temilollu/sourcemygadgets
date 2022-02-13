import styled from "styled-components";
export const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5.40323px;
  padding: ${({ padding }) => (padding ? padding : 0)};
`;

export const UserDetailsFlex = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  & > * {
    flex: 1;
  }
`;
