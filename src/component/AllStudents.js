import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../service/firebase";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmationModal from "./ConfirmationModal";

const StyleTable = styled(Table)`
  width: 100%;
  margin-top: 15px;
`;

const StyledEditIcon = styled(EditIcon)({
  fontSize: 24,
  color: "blue",
  cursor: "pointer",
  "&:hover": {
    color: "darkblue",
  },
});

const StyledDeleteIcon = styled(DeleteIcon)({
  fontSize: 24,
  color: "red",
  cursor: "pointer",
  "&:hover": {
    color: "darkred",
  },
});
const AllStudents = () => {
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  console.log("students------", students);
  useEffect(() => {
    fetchStudentData();
  }, []);

  const fetchStudentData = async () => {
    const querySnapshot = await getDocs(collection(db, "Students"));
    const fetchedStudents = [];
    querySnapshot.forEach((doc) => {
      fetchedStudents.push({ id: doc.id, ...doc.data() });
    });
    setStudents(fetchedStudents);
  };

  return (
    <Container>
      <Box marginTop={3}>
        <Card>
          <CardHeader title="All STUDENTS"></CardHeader>
        </Card>
      </Box>
      <StyleTable>
        <TableHead>
          <TableRow>
            {[
              "First Name",
              "Last Name",
              "Email",
              "Phone No",
              "Course",
              "Year",
              "City",
              "Action",
            ].map((header, index) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.firstName}</TableCell>
              <TableCell>{student.lastName}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.phoneNo}</TableCell>
              <TableCell>{student.course}</TableCell>
              <TableCell>{student.year}</TableCell>
              <TableCell>{student.city}</TableCell>
              <TableCell>
                <StyledEditIcon />
                <StyledDeleteIcon onClick={() => setIsModalOpen(true)}/>
                <ConfirmationModal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyleTable>
    </Container>
  );
};

export default AllStudents;
