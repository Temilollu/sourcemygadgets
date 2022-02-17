import { Box, TextField } from "@mui/material";
import styled from "styled-components";
import closeIcon from "../images/close.png";
import { useFormik } from "formik";
const AddUserForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      dateOfBirth: "",
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
      value: formik.values.title,
      type: "select",
      label: "Gender",
    },
    { name: "email", value: formik.values.email, type: "text", label: "Email" },
    {
      name: "dateOfBirth",
      value: formik.values.dateOfBirth,
      type: "date",
      label: "Select date",
    },
  ];
  return (
    <AddUserForm.Wrapper>
      {" "}
      <img src={closeIcon} alt="close icon" />
      <div className="heading">
        <p className="text">ADD USER</p>
        <p className="sub-text">1/2 Personal Details</p>
      </div>
      <div className="inputs">
        {inputs.map((item) => (
          <TextField
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
            select={item.type === "select"}
          />
        ))}
      </div>
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
`;
