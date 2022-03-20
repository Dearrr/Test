import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import { TitleHome,Error } from "./HomeComponent";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export const Home = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verifyPassword: "",
    gender: "",
  });
  const [error, setError] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const [gender, setGender] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const GenderList = ["Male", "Female"];
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(data));
    setSubmit(true);
  };

  useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log(data);
    }
  }, [data]);

  const validate = (values) => {
    const errors = {};
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!values.firstName) {
      errors.firstName = "First Name  is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regexp.test(values.email)) {
      errors.email = "This is not valid email format";
    }
    if (!values.password) {
      errors.password = "password is required";
    }
    if (!values.verifyPassword) {
      errors.verifyPassword = "verify password is required";
    } else if (values.password != values.verifyPassword) {
      errors.verifyPassword = "Password not match";
    }
    if (!values.gender) {
      errors.gender = "gender is required";
    }
    return errors;
  };
  return (
    <Container>
      <TitleHome>Test form and Validation</TitleHome>
      <form onSubmit={handleSubmit}>
        <TextField
          name="firstName"
          label="First Name"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={data.firstName}
        ></TextField>
        <Error>{error.firstName}</Error>
        <TextField
          name="lastName"
          label="Last Name"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={data.lastName}
        ></TextField>
        <Error>{error.lastName}</Error>
        <TextField
          name="email"
          label="Email"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={data.email}
        ></TextField>
        <Error>{error.email}</Error>
        <TextField
          name="password"
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={data.password}
        ></TextField>
        <Error>{error.password}</Error>
        <TextField
          name="verifyPassword"
          label="Verify Password"
          fullWidth
          margin="normal"
          onChange={handleChange}
          type="password"
        ></TextField>
        <Error>{error.verifyPassword}</Error>
        <TextField
          name="gender"
          select
          label="Please select gender"
          value={data.gender}
          onChange={handleChange}
          margin="normal"
          fullWidth
        >
          {GenderList.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Error>{error.gender}</Error>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>

      {Object.keys(error).length === 0 && isSubmit ? (
        <>
          <div>
            <b>result</b>
          </div>
          <div>FirstName : {data.firstName}</div>
          <div>LastName : {data.LastName}</div>
          <div>email : {data.email}</div>
          <div>gender : {data.gender}</div>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};
