import styled from "styled-components";
import likeIcon from "../images/Vector (9).png";
export const userColumns = [
  {
    field: "image",
    headerName: "",
    width: 70,
    renderCell: (params) => <img src={params.value} alt="" />,
    sortable: false,
  },
  { field: "title", headerName: "title", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "userId",
    headerName: "ID",
    type: "number",
    width: 250,
  },
];

export const postColumns = [
  {
    field: "image",
    headerName: "",
    width: 70,
    renderCell: (params) => (
      <>
        <Image src={params.value} alt="" />
      </>
    ),
    sortable: false,
  },
  { field: "title", headerName: "OWNER", width: 130 },
  { field: "title2", headerName: "TITLE", width: 170 },
  {
    field: "likes",
    headerName: "Likes",
    width: 130,
    renderCell: (params) => (
      <>
        <img src={likeIcon} alt="" />
        <LikeText>{params.value}</LikeText>
      </>
    ),
  },
  {
    field: "userId",
    headerName: "PUBLISH DATE",
    type: "number",
    width: 250,
  },
];

const Image = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 17px;
`;

const LikeText = styled.p`
  margin-left: 7px;
`;
