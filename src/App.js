import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Body from "./component/Body";
import NavBar from "./component/Navbar";
import EditUser from "./component/EditUser";
import AddStudent from "./component/AddStudent";
import AllStudents from "./component/AllStudents";

const App = () => {
  return (
    <div>
    <ToastContainer />
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/add-student" element={<AddStudent />} />
        {/* <Route path="/students" element={<AllUser />} /> */}
        <Route path="/all-students" element={<AllStudents />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
