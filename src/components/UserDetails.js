import styled from "styled-components";
import { UserDetailsFlex } from "../styles/home";
import userImg from "../images/unsplash_1K7yDWuamRA (1).png";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser } from "../redux/singleUserSlice";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import EmptyDetails from "./EmptyDetails";
import emptyUserImg from "../images/user.png";
const UserDetails = ({ id }) => {
  const dispatch = useDispatch();
  const { singleUser, status } = useSelector((state) => state.singleUser);

  useEffect(() => {
    if (id) {
      dispatch(getSingleUser(id));
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
        image={emptyUserImg}
        description={
          "View a selected user's full details here by clicking on the user"
        }
      />
    );
  }

  return (
    <UserDetails.Wrapper>
      <UserDetailsFlex>
        <img src={singleUser.picture || userImg} alt="" />
        <div>
          <div className="details-profile">
            <p className="key">FULL Name</p>
            <p className="value">
              {singleUser?.title} {singleUser?.firstName} {singleUser?.lastName}
            </p>
          </div>
          <div className="details-profile">
            <p className="key">email address</p>
            <p className="value">{singleUser?.email}</p>
          </div>
          <div className="details-profile">
            <p className="key">Phone Number</p>
            <p className="value">{singleUser?.phone}</p>
          </div>
        </div>
      </UserDetailsFlex>
      <UserDetailsFlex className="container-user border">
        <div className="details-profile">
          <p className="key">GENDER</p>
          <p className="value">{singleUser?.gender}</p>
        </div>
        <div className="details-profile">
          <p className="key">DATE OF BIRTH</p>
          <p className="value">{singleUser?.dateOfBirth}</p>
        </div>
      </UserDetailsFlex>

      <UserDetailsFlex className="">
        <div>
          <div className="details-profile">
            <p className="key">STREET</p>
            <p className="value">{singleUser?.location?.street}</p>
          </div>
          <div className="details-profile">
            <p className="key">year enroled </p>
            <p className="value">-9:00</p>
          </div>
        </div>
        <div className="details-profile">
          <p className="key">CITY</p>
          <p className="value">{singleUser?.location?.city}</p>
        </div>
      </UserDetailsFlex>
      <UserDetailsFlex className="address">
        <div>
          <div className="details-profile">
            <p className="key">REGISTERED</p>
            <p className="value">{singleUser?.registerDate}</p>
          </div>
          <div className="details-profile">
            <p className="key">POSTS </p>
            <p className="value">21</p>
          </div>
        </div>
        <div>
          <div className="details-profile">
            <p className="key">LAST UPDATED</p>
            <p className="value">{singleUser?.updatedDate} </p>
          </div>
          <div className="details-profile">
            <p className="key">COMMENTS</p>
            <p className="value">43</p>
          </div>
        </div>
      </UserDetailsFlex>
    </UserDetails.Wrapper>
  );
};

export default UserDetails;

UserDetails.Wrapper = styled.div`
  padding: 22px;
  .details-profile {
    margin: 11px 0;
  }
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
  .container-user {
    margin: 16px 0;

    padding: 16px 0;
  }
  .border {
    border-bottom: 0.692903px solid #edf2f7;
  }
  .address {
    border-top: 0.692903px solid #edf2f7;
  }
`;
