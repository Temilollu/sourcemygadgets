import styled from "styled-components";
import postImg from "../images/unsplash_1K7yDWuamRA.png";
import ownerImg from "../images/Rectangle 26.png";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePost } from "../redux/singlePostSlice";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import EmptyDetails from "./EmptyDetails";
import emptyPostImg from "../images/Vector.png";
const PostDetails = ({ id }) => {
  const dispatch = useDispatch();
  const { singlePost, status } = useSelector((state) => state.singlePost);

  useEffect(() => {
    if (id) {
      dispatch(getSinglePost(id));
    }
  }, [id, dispatch]);

  if (status === "loading") {
    return (
      <CircularProgress
        color="success"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      />
    );
  }

  if (status === "failed") {
    return <h2>Error while fetching data</h2>;
  }

  if (!id) {
    return (
      <EmptyDetails
        image={emptyPostImg}
        description={
          "View a selected post’s full details here by clicking on the post"
        }
      />
    );
  }

  return (
    <PostDetails.Wrapper>
      <img src={singlePost?.image || postImg} alt="" className="postImg" />
      <p className="heading-text">{singlePost?.text}</p>
      <p className="likes"> ❤️ {singlePost?.likes} likes</p>
      <h4>Tags</h4>
      <div className="tags">
        {singlePost.tags?.map((item) => (
          <p className="tag" key={item}>
            {item}
          </p>
        ))}
      </div>
      <h2>OWNER</h2>
      <div className="owner-details">
        <img src={singlePost?.owner?.picture || ownerImg} alt="" />{" "}
        <span>
          {" "}
          {singlePost?.owner?.firstName} {singlePost?.owner?.lastName}
        </span>
      </div>

      <div className="details-profile">
        <p className="key">FULL Name</p>
        <p className="value">
          {singlePost?.owner?.title} {singlePost?.owner?.firstName}{" "}
          {singlePost?.owner?.lastName}
        </p>
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
  .postImg {
    width: 100%;
    height: 178px;
  }
`;
