
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,

  styled
} from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers,deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const StyleTable = styled(Table)`
  width: 100%;
`;

const AllUser = () => {
  const [user, setUserData] = useState([]);
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let res = await getUsers();
    setUserData(res.data);
  };

  const deleteUserData= async (id)=>{
     await deleteUser(id);
     getUserData();
  }

  return (
    <div>
      <h3>All User</h3>
      <StyleTable>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone No</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  style={{ marginRight: "8px" }}
                  component={Link}
                  to={`/edit-user/${user.id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginRight: "8px" }}
                  onClick={()=>{deleteUserData(user.id)}}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyleTable>
    </div>
  );
};
export default AllUser;
