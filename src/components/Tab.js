import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DataTable from "../pages/TableComponent";
import { postColumns, userColumns } from "./constants";
import { useEffect } from "react";
import { useState } from "react";
import user from "../images/Ellipse 8.png";
import { CircularProgress } from "@mui/material";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsComponent({
  value,
  setValue,
  users,
  handlePageChange,
  page,
  userStatus,
  posts,
  postStatus,
}) {
  const [userRows, setUserRows] = useState([]);
  const [postRows, setPostRows] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (userStatus === "success" && value == 0) {
      const data = users?.data.map(({ title, firstName, lastName, id }) => ({
        id,
        title,
        image: user,
        lastName,
        firstName,
        userId: id,
      }));
      setUserRows(data);
    }
  }, [userStatus, value]);

  useEffect(() => {
    if (postStatus === "success" && value === 1) {
      const data = posts?.data.map(({ owner, text, likes, id }) => ({
        id,
        title: `${owner?.firstName} ${owner?.lastName}`,
        image: owner?.picture,
        likes: likes,
        title2: text,
        userId: id,
      }));
      setPostRows(data);
    }
  }, [postStatus, value]);

  //   if (userStatus === "loading" || postStatus === "loading") {
  //     return "Loading....";
  //   }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          style={{
            border: "none",
          }}
        >
          <Tab label="All  Users" {...a11yProps(0)} />
          <Tab label="All Posts" {...a11yProps(1)} />
        </Tabs>
      </Box>

      {userStatus === "loading" || postStatus === "loading" ? (
        <CircularProgress
          color="success"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        />
      ) : (
        <>
          <TabPanel value={value} index={0}>
            <DataTable
              data={users}
              columns={userColumns}
              page={page}
              handlePageChange={handlePageChange}
              rows={userRows}
              loading={userStatus === "loading"}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <DataTable
              columns={postColumns}
              rows={postRows}
              page={page}
              handlePageChange={handlePageChange}
              data={posts}
              loading={postStatus === "loading"}
            />
          </TabPanel>
        </>
      )}
    </Box>
  );
}
