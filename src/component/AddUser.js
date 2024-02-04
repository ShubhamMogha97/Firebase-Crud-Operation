import { Button, FormGroup, Input, Typography, styled } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%, margin 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
const initialvalue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const AddUser = () => {
  const [user, setUser] = useState(initialvalue);
  let navigate = useNavigate();

  const onValueChnage = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all-user");
  };

  return (
    <Container>
      <FormGroup>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
          <InputLabel htmlFor="my-input">First Name</InputLabel>
          <Input
            name="firstName"
            value={user?.initialvalue?.firstName}
            onChange={(e) => onValueChnage(e)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Last Name</InputLabel>
          <Input
            name="lastName"
            value={user?.initialvalue?.lastName}
            onChange={(e) => onValueChnage(e)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Email</InputLabel>
          <Input
            name="email"
            value={user?.initialvalue?.email}
            onChange={(e) => onValueChnage(e)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input
            name="password"
            value={user?.initialvalue?.password}
            onChange={(e) => onValueChnage(e)}
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={addUserDetails}>
            Submit
          </Button>
        </FormControl>
      </FormGroup>
    </Container>
  );
};

export default AddUser;
