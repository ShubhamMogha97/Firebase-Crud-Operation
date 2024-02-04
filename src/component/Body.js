import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../service/firebase";
import AllStudents from "./AllStudents";

// import MyForm from "./Myform";

const db = getDatabase(app)
const putData =()=>{
set(ref(db,'users/Shubham'),{
    username: "Shubham Mogha",
    email: "Shubham.mogha97@gmail.com",
    profile : "Software Engineer"
})
}

const Body = () => {
  return (
    <div>
      <h3>Student Registration Form</h3>
      <AllStudents/>
      {/* <button onClick={putData}>Click on</button> */}
    </div>
  );
};

export default Body;
