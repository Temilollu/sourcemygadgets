import styled from "styled-components";
import postImg from "../images/unsplash_1K7yDWuamRA.png";
import ownerImg from "../images/Rectangle 26.png";
const PostDetails = () => {
  return (
    <PostDetails.Wrapper>
      <img src={postImg} alt="" className="postImg" />
      <p className="heading-text">adult Labrador retriever</p>
      <p className="likes"> ❤️ 96 likes</p>
      <h4>Tags</h4>
      <div className="tags">
        <p className="tag">Animal</p>
        <p className="tag">dog</p>
        <p className="tag">golden retriever</p>
      </div>
      <h2>OWNER</h2>
      <div className="owner-details">
        <img src={ownerImg} alt="" /> <span>Edita Lane</span>
      </div>
      <div className="details-profile">
        <p className="key">FULL Name</p>
        <p className="value">Mrs. Edita Lane</p>
      </div>
      <div className="details-profile">
        <p className="key">email address</p>
        <p className="value">editalane@gmail.com</p>
      </div>
      <div className="details-profile">
        <p className="key">Phone Number</p>
        <p className="value">92694011</p>
      </div>
    </PostDetails.Wrapper>
  );
};

export default PostDetails;

PostDetails.Wrapper = styled.div`
  padding: 12px;
  .heading-text {
    font-weight: normal;
    font-size: 9.70854px;
    line-height: 12px;
    color: #051a2e;
  }
  h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 6.93467px;
    line-height: 8px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #afc2d4;
    margin: 14px 0 8px;
  }
  .tags {
    display: flex;
    gap: 11px;
    margin-bottom: 15px;
  }
  .tag {
    background: #fafcfe;
    border: 0.693467px solid #4799eb;
    box-sizing: border-box;
    border-radius: 11.0955px;
    font-weight: 600;
    font-size: 6.93467px;
    line-height: 8px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #607485;
    padding: 5px;
  }
  h2 {
    border-top: 0.693467px solid #edf2f7;
    border-bottom: 0.693467px solid #edf2f7;
    font-weight: normal;
    font-size: 9.70854px;
    line-height: 12px;
    color: #6f6d6d;
    padding: 5px;
  }
  .owner-details {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 10px 0;
    span {
      font-weight: normal;
      font-size: 6.93467px;
      line-height: 8px;
      color: #051a2e;
    }
  }
  .details-profile {
    margin: 11px 0;
    .key {
      font-weight: 600;
      font-size: 6.93467px;
      line-height: 8px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #afc2d4;
      margin-bottom: 5px;
    }
    .value {
      font-weight: normal;
      font-size: 9.70854px;
      line-height: 12px;
      color: #051a2e;
    }
  }
  .likes {
    font-weight: normal;
    font-size: 9.70854px;
    line-height: 12px;
    color: #dd3c3c;
    margin: 10px 0;
  }
`;
