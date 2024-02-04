import {
  AppBar,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tab = styled(Typography)`
  font-size: 20px;
  margin-right: 20px;
  color:inherit;
  text-decoration:none
`;
const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
      <Link to="/">
          {" "}
          <Tab>Code for interView</Tab>
        </Link>
        <Link to="/all-students">
          {" "}
          <Tab>All Students</Tab>
        </Link>
        <Link to="/add-student">
          {" "}
          <Tab>Add Student</Tab>
        </Link>
        
        {/* <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button> */}
      </Toolbar>
    </Header>
  );
};

export default NavBar;
