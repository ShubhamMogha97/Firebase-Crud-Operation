import { Button, FormGroup, Input, Typography, styled } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { useEffect, useState } from "react";
import { getUser,editUser} from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%, margin 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`

const initialvalue={
    firstName:"",
    lastName:"",
    email:"",
    password:""
}

const EditUser = () => {
  const [user, setUser] = useState(initialvalue);
  let navigate = useNavigate();

  const {id}= useParams()

  useEffect(()=>{
    getUserData();
  },[])

  const getUserData= async()=>{
    let res = await getUser(id) 
    setUser(res.data);
    console.log(res);

  }

  const onValueChnage=(e)=>{
    const{name,value} = e.target
    setUser({...user,[name]:value})
  }

  const editUserDetails = async ()=>{
    await editUser(user,id)
    navigate("/all-user")
  }

  return (
    <Container>
      <FormGroup>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
          <InputLabel htmlFor="my-input">First Name</InputLabel>
          <Input name="firstName" value={user?.firstName} onChange={(e)=>onValueChnage(e)}/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Last Name</InputLabel>
          <Input name="lastName" value={user?.lastName} onChange={(e)=>onValueChnage(e)} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Email</InputLabel>
          <Input name="email" value={user?.email} onChange={(e)=>onValueChnage(e)}/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input name="password" value={user?.password} onChange={(e)=>onValueChnage(e)}/>
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={editUserDetails}>Edit User</Button>
        </FormControl>
      </FormGroup>
    </Container>
  );
};

export default EditUser;
