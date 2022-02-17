import styled from "styled-components";

const EmptyDetails = ({ image, description }) => {
  return (
    <EmptyDetails.Wrapper>
      <img src={image} alt="" />
      <p>{description}</p>
    </EmptyDetails.Wrapper>
  );
};

export default EmptyDetails;

EmptyDetails.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  img {
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 9.22222px;
    line-height: 15px;
    color: #051a2e;
    margin: 1rem 0;
    text-align: center;
    padding: 0 1rem;
  }
`;
