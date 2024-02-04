import { useState } from "react";
const MyForm = () => {
  const [formdata, setFormdata] = useState({
    first: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const {name,value} = e.target
    console.log("e------",e)
    setFormdata((prevdata)=>({...prevdata,[name]:value}))
    console.log(e);
  };
  const submitData = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>Form in React JS</h2>
      <form onSubmit={submitData}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formdata.first}
          onChange={(e)=>handleChange(e)}
        />
        <br />
        <label>Last Name:</label>
        <input type="text" name="lastName" value={formdata.lastName} onChange={(e)=>handleChange(e)} />
        <br />
        <label>Email :</label>
        <input type="text" name="email" value={formdata.email} onChange={ handleChange} /> <br />
        <label>password:</label>
        <input
          type="password"
          name="password"
          value={formdata.password}
          onChange={handleChange}
        />{" "}
        <br />
        <button type="submit" name="password">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
