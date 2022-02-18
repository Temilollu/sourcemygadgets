import { Box, MenuItem, TextField } from "@mui/material";
import styled from "styled-components";
import closeIcon from "../images/close.png";
import { useFormik } from "formik";
import { Button } from "@material-ui/core";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addUserHandler } from "../redux/addUserSlice";
import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddUserForm = ({ setOpen }) => {
  const [openToast, setOpenToast] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenToast(false);
  };

  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setError(false);
  };
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.addUser);
  const validationSchema = yup.object().shape({
    title: yup.string().required("Required"),
    firstName: yup.string().required("Required"),
    email: yup
      .string()
      .email("Invalid Email Address")
      .required("Email is required"),
    lastName: yup.string().required("Required"),
    gender: yup.string().required("Required"),
    dateOfBirth: yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      dateOfBirth: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(addUserHandler(values));
    },
  });
  const inputs = [
    { name: "title", value: formik.values.title, type: "text", label: "Title" },
    {
      name: "firstName",
      value: formik.values.firstName,
      type: "text",
      label: "First name",
    },
    {
      name: "lastName",
      value: formik.values.lastName,
      type: "text",
      label: "Last Name",
    },
    {
      name: "gender",
      value: formik.values.gender,
      type: "select",
      label: "Gender",
    },
    { name: "email", value: formik.values.email, type: "text", label: "Email" },
    {
      name: "dateOfBirth",
      value: formik.values.dateOfBirth,
      type: "date",
      label: "Date of birth",
    },
  ];

  useEffect(() => {
    if (status === "success") {
      formik.resetForm({});
      setOpenToast(true);
    }
    if (status === "failed") {
      console.log("failed");
      setError(true);
    }
  }, [status]);
  return (
    <AddUserForm.Wrapper>
      <Snackbar open={openToast} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          User created successfully
        </Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={6000} onClose={handleErrorClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          An error occurred, please try again
        </Alert>
      </Snackbar>
      <img src={closeIcon} alt="close icon" onClick={() => setOpen(false)} />
      <div className="heading">
        <p className="text">ADD USER</p>
        <p className="sub-text">1/2 Personal Details</p>
      </div>
      <div className="inputs">
        {inputs.map((item) =>
          item.type === "select" ? (
            <CustomTextField
              key={item.name}
              name={item.name}
              type={item.type}
              label={item.label}
              size="small"
              fullWidth
              color="secondary"
              onChange={formik.handleChange}
              autoComplete="off"
              value={item.value}
              // variant="outlined"
              select
              placeholder={item.label}
              onBlur={formik.handleBlur}
              error={
                formik.touched[item.name] && Boolean(formik.errors[item?.name])
              }
              helperText={
                formik.touched[item.name] && formik.errors[item?.name]
              }
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </CustomTextField>
          ) : (
            <CustomTextField
              key={item.name}
              name={item.name}
              type={item.type}
              label={item.label}
              size="small"
              fullWidth
              color="secondary"
              onChange={formik.handleChange}
              autoComplete="off"
              value={item.value}
              variant="outlined"
              placeholder={item.label}
              InputLabelProps={{
                shrink: true,
              }}
              onBlur={formik.handleBlur}
              error={
                formik.touched[item.name] && Boolean(formik.errors[item?.name])
              }
              helperText={
                formik.touched[item.name] && formik.errors[item?.name]
              }
            />
          )
        )}
      </div>
      <Button className="add-btn" onClick={formik.handleSubmit}>
        {status === "loading" ? "loading" : "Add user"}
      </Button>
    </AddUserForm.Wrapper>
  );
};

export default AddUserForm;

AddUserForm.Wrapper = styled(Box)`
  img {
    width: 20px;
    position: absolute;
    top: 15px;
    right: 20px;
    cursor: pointer;
  }
  .heading {
    margin-top: 30px;
    .text {
      font-size: 20px;
      line-height: 18px;
      letter-spacing: 0.04em;
      color: #607485;
      font-family: Libre Franklin;
    }
    .sub-text {
      font-weight: 600;
      font-size: 14px;
      line-height: 29px;
      font-family: Libre Franklin;
      color: #607485;
    }
  }
  .inputs {
    & > * {
      margin: 10px 0;
      background: #fafcfe;
    }
  }
  .add-btn {
    color: #fff;
    background-color: #2898a4;
    height: 40px;
    width: 100%;
    margin-top: 1rem;
    &:hover {
      background-color: #2898a4;
    }
  }
`;

const CustomTextField = styled(TextField)`
  & label.Mui-focused {
    color: black;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #dee6ed;
    }
  }
`;
