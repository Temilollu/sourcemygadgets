import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PostDetails from "../components/PostDetails";
import Tab from "../components/Tab";
import UserDetails from "../components/UserDetails";
import addUser from "../images/Vector (2).png";
import userImg from "../images/Vector (6).png";
import postImg from "../images/Vector (7).png";
import commentImg from "../images/Vector (8).png";
import { getUsers } from "../redux/usersSlice";
import { getPosts } from "../redux/postsSlice";
import { Card } from "../styles/home";

function Index() {
  const data = [
    { name: "Users", count: 30, image: userImg },
    { name: "Posts", count: 20, image: postImg },
    { name: "Comments", count: 90, image: commentImg },
  ];
  const [value, setValue] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();
  const { users, status } = useSelector((state) => state.users);
  const { posts, status: postStatus } = useSelector((state) => state.posts);

  useEffect(() => {
    if (value === 0) {
      dispatch(getUsers({ page }));
    } else {
      dispatch(getPosts({ page }));
    }
  }, [dispatch, page, value]);

  function handlePageChange(newPage) {
    setPage(newPage + 1);
  }

  useEffect(() => {
    setPage(1);
  }, [value]);

  console.log(posts, postStatus);

  return (
    <Index.Wrapper>
      <div className="left">
        <div className="add-user">
          <img src={addUser} alt="" />
        </div>
      </div>
      <div className="right">
        <Card padding="27px 0 24px 43px">
          <p className="dashboard">Dashboard</p>
        </Card>
        <div className="container">
          {data.map((item) => (
            <Card padding="18px 0 16px 24px " className="dashboard-analytics">
              <div className="image">
                <img src={item.image} alt="" />
              </div>

              <div>
                <p className="name">{item.name}</p>
                <p className="count">{item.count}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="details">
          <div className="table">
            <Tab
              value={value}
              setValue={setValue}
              users={users}
              userStatus={status}
              page={page}
              handlePageChange={handlePageChange}
              postStatus={postStatus}
              posts={posts}
            />
          </div>
          <div className="selected-item">
            {" "}
            {value === 0 ? <UserDetails /> : <PostDetails />}
          </div>
        </div>
      </div>
    </Index.Wrapper>
  );
}

export default Index;

Index.Wrapper = styled.div`
  display: flex;
  .left {
    flex: 1;
    background: #051a2e;
    min-height: 100vh;
    .add-user {
      background: #ffffff;
      box-shadow: 0px 2px 16px rgba(143, 153, 163, 0.1);
      border-radius: 64px;
      width: 48px;
      height: 48px;
      text-align: center;
      margin: 32px auto 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .right {
    flex: 11;
    .dashboard {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #051a2e;
      margin: 0;
    }
    .container {
      display: flex;
      justify-content: space-between;
      gap: 24px;
      margin-top: 35px;
      padding: 0 51px 0 47px;
    }
    .dashboard-analytics {
      .image {
        background: #a2c5ea;
        border-radius: 129.716px;
        width: 48.64px;
        height: 48.64px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 16px;
      }
      flex: 1;
      display: flex;
      align-items: center;
      .name {
        font-weight: 600;
        font-size: 10.1341px;
        line-height: 12px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: #97a7b4;
        margin: 0;
      }
      .count {
        font-style: normal;
        font-weight: 600;
        font-size: 24.3218px;
        line-height: 29px;
        margin: 0;
        color: #051a2e;
      }
    }
  }
  .MuiBox-root {
    padding: 0 0 14px;
    border: none;
  }
  .MuiTab-textColorPrimary {
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-transform: capitalize;
  }
  .details {
    margin-top: 44px;
    padding: 0 51px 0 47px;
    display: flex;
    gap: 75px;
    justify-content: center;
    .table {
      flex: 8.2;
    }
    .selected-item {
      flex: 2.8;
      background: #ffffff;
      border: 0.693467px solid #c0c2c5;
      border-radius: 5.54774px;
      //   min-height: 448.38px;
    }
  }
`;
