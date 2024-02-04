import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Container,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  Card,
  CardHeader,
} from "@mui/material";
// import { db } from './firebaseConfig';
import "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../service/firebase";
import { collection, addDoc } from "firebase/firestore"; 

const formValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is Required"),
  lastName: Yup.string().required("Last Name is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  phoneNo: Yup.string().required("Phone No is Required"),
  course: Yup.string().required("Course is Required"),
  year: Yup.string().required("Year is Required"),
  address: Yup.string().required("Address is Required"),
  city: Yup.string().required("City is Required"),
  state: Yup.string().required("State is Required"),
  pinCode: Yup.string().required("Pin Code Required"),
  country: Yup.string().required("Country is Required"),
});

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNo: "",
  course: "",
  year: "",
  address: "",
  city: "",
  state: "",
  pinCode: "",
  country: "",
};

// const useStyles = makeStyles((theme) => ({
//   card: {
//     backgroundColor: "#f0f0f0",
//     borderRadius: "10px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   },
//   cardHeader: {
//     backgroundColor: "#f0f0f0",
//     borderBottom: "1px solid #ccc",
//   },
// }));

const AddStudent = () => {
  const handleSubmit = async (values, { resetForm }) => {
    // e.preventDefault();
    try {
      await addDoc(collection(db, "Students"), values);
      resetForm();
      
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    toast("Student Added Successfully");
  };

  // const classes = useStyles();
  return (
    <Container>
      <Card>
        <CardHeader title="STUDENT REGISTER FORM"></CardHeader>
      </Card>
      <Formik
        initialValues={initialState}
        validationSchema={formValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  error={touched.firstName && Boolean(errors.firstName)}
                >
                  <TextField
                    label="First Name *"
                    variant="outlined"
                    fullWidth
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    margin="dense"
                    sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
                  />
                  {touched.firstName && errors.firstName && (
                  <FormHelperText>{errors.firstName}</FormHelperText>
                )}
                </FormControl>
                
              </Grid>

              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  error={touched.lastName && Boolean(errors.lastName)}
                >
                  <TextField
                    label="Last Name *"
                    variant="outlined"
                    fullWidth
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    margin="dense"
                    sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
                  />
                  {touched.lastName && errors.lastName && (
                  <FormHelperText>{errors.lastName}</FormHelperText>
                )}
                </FormControl>
                
              </Grid>

              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  error={touched.email && Boolean(errors.email)}
                >
                  <TextField
                    label="Email *"
                    variant="outlined"
                    fullWidth
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    margin="dense"
                    sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
                  />
                  {touched.email && errors.email && (
                  <FormHelperText>{errors.email}</FormHelperText>
                )}
                </FormControl>
                
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  error={touched.phoneNo && Boolean(errors.phoneNo)}
                  sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
                >
                  <TextField
                    label="Phone No *"
                    variant="outlined"
                    fullWidth
                    name="phoneNo"
                    value={values.phoneNo}
                    onChange={handleChange}
                    margin="dense"
                    inputProps={{
                      type: "number",
                      pattern: "[0-9]*",
                    }}
                  />
                  {touched.phoneNo && errors.phoneNo && (
                  <FormHelperText>{errors.phoneNo}</FormHelperText>
                )}
                </FormControl>
                
              </Grid>
              <Grid item xs={12} md={6} mt={2}>
                <FormControl
                  fullWidth
                  error={touched.course && Boolean(errors.course)}
                  sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
                >
                  <InputLabel id="demo-simple-select-label">
                    Course *{" "}
                  </InputLabel>
                  <Select
                    label="Course *"
                    variant="outlined"
                    fullWidth
                    id="course"
                    name="course"
                    value={values?.course}
                    onChange={handleChange}
                    margin="dense"
                  >
                    <MenuItem value="B.Tech">B.Tech</MenuItem>
                    <MenuItem value="M.B.A">M.B.A</MenuItem>
                    <MenuItem value="M.C.A">M.C.A</MenuItem>
                    <MenuItem value="B.Sc">B.Sc</MenuItem>
                    <MenuItem value="B.B.A">B.B.A</MenuItem>
                    <MenuItem value="B.C.A">B.C.A</MenuItem>
                    <MenuItem value="L.L.B">L.L.B</MenuItem>
                  </Select>
                </FormControl>
                {touched.course && errors.course && (
                  <FormHelperText error>{errors.course}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} md={6} mt={2}>
                <FormControl
                  fullWidth  error={touched.course && Boolean(errors.course)}
                  sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
                >
                  <InputLabel id="demo-simple-select-label">Year *</InputLabel>
                  <Select
                    label="Year *"
                    variant="outlined"
                    id="year"
                    value={values?.year}
                    fullWidth
                    name="year"
                    margin="dense"
                    onChange={handleChange}
                  >
                    <MenuItem value="I">I</MenuItem>
                    <MenuItem value="II">II</MenuItem>
                    <MenuItem value="III">III</MenuItem>
                    <MenuItem value="IV">IV</MenuItem>
                  </Select>
                </FormControl>
                {touched.year && errors.year && (
                  <FormHelperText error>{errors.year}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={6} mt={2}>
                <FormControl fullWidth error={touched.address && Boolean(errors.address)} >
                  <TextField
                    label="Address *"
                    variant="outlined"
                    fullWidth
                    value={values?.address}
                    name="address"
                    margin="dense"
                    onChange={handleChange}
                    sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
                  />
                  {touched.address && errors.address && (
                  <FormHelperText>{errors.address}</FormHelperText>
                )}
                </FormControl>
              </Grid>
              <Grid item xs={6} mt={2}>
                <FormControl fullWidth  error={touched.city && Boolean(errors.city)}>
                  <TextField
                    label="City *"
                    variant="outlined"
                    fullWidth
                    value={values?.city}
                    name="city"
                    onChange={handleChange}
                    sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
                    margin="dense"
                  />
                    {touched.city && errors.city && (
                  <FormHelperText>{errors.city}</FormHelperText>
                )}
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <FormControl fullWidth error={touched.state && Boolean(errors.state)} >
                  <TextField
                    label="State/ Province *"
                    variant="outlined"
                    fullWidth
                    value={values.state}
                    name="state"
                    onChange={handleChange}
                    margin="dense"
                    
                    sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
                  />
                  {touched.state && errors.state && (
                  <FormHelperText>{errors.state}</FormHelperText>
                )}
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <FormControl fullWidth  error={touched.pinCode && Boolean(errors.pinCode)}>
                  <TextField
                    label="Pin Code *"
                    variant="outlined"
                    fullWidth
                    value={values.pinCode}
                    name="pinCode"
                    onChange={handleChange}
                    margin="dense"
                    sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
                  />
                  {touched.pinCode && errors.pinCode && (
                  <FormHelperText>{errors.pinCode}</FormHelperText>
                )}
                </FormControl>

              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth error={touched.country && Boolean(errors.country)}>
                  <TextField
                    label="Country *"
                    variant="outlined"
                    fullWidth
                    name="country"
                    value={values?.country}
                    margin="dense"
                    onChange={handleChange}
                    sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
                  />
                  {touched.country && errors.country && (
                  <FormHelperText>{errors.country}</FormHelperText>
                )}
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </FormControl>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddStudent;
