import { Box, MenuItem, TextField } from "@mui/material";
import styled from "styled-components";
import closeIcon from "../images/close.png";
import { useFormik } from "formik";
import { Button } from "@material-ui/core";
import * as yup from "yup";
const AddUserForm = ({ setOpen }) => {
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
      console.log(values);
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
  return (
    <AddUserForm.Wrapper>
      {" "}
      <img src={closeIcon} alt="close icon" onClick={() => setOpen(false)} />
      <div className="heading">
        <p className="text">ADD USER</p>
        <p className="sub-text">1/2 Personal Details</p>
      </div>
      <div className="inputs">
        {inputs.map((item) =>
          item.type === "select" ? (
            <WhiteBorderTextField
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
            </WhiteBorderTextField>
          ) : (
            <WhiteBorderTextField
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
      <Button onClick={formik.handleSubmit}>Save</Button>
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
`;

const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: black;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #dee6ed;
    }
  }
`;
