import styled from "styled-components";
import { UserDetailsFlex } from "../styles/home";
import userImg from "../images/unsplash_1K7yDWuamRA (1).png";
const UserDetails = () => {
  return (
    <UserDetails.Wrapper>
      <UserDetailsFlex>
        <img src={userImg} alt="" />
        <div>
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
        </div>
      </UserDetailsFlex>
      <UserDetailsFlex className="container-user border">
        <div className="details-profile">
          <p className="key">GENDER</p>
          <p className="value">Female</p>
        </div>
        <div className="details-profile">
          <p className="key">DATE OF BIRTH</p>
          <p className="value">30 - Apr - 1996</p>
        </div>
      </UserDetailsFlex>

      <UserDetailsFlex className="">
        <div>
          <div className="details-profile">
            <p className="key">STREET</p>
            <p className="value">9614, SÃ¸ndermarksvej</p>
          </div>
          <div className="details-profile">
            <p className="key">year enroled </p>
            <p className="value">-9:00</p>
          </div>
        </div>
        <div className="details-profile">
          <p className="key">CITY</p>
          <p className="value">Kongsvinger</p>
        </div>
      </UserDetailsFlex>
      <UserDetailsFlex className="address">
        <div>
          <div className="details-profile">
            <p className="key">REGISTERED</p>
            <p className="value">21 - Jun - 2021 </p>
          </div>
          <div className="details-profile">
            <p className="key">POSTS </p>
            <p className="value">21</p>
          </div>
        </div>
        <div>
          <div className="details-profile">
            <p className="key">LAST UPDATED</p>
            <p className="value">21 - Jun - 2021 </p>
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
