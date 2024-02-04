import { useForm } from "react-hook-form";

const MyFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data---------------", data);
  };

  console.log({ ...register("email") });
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email</label>
          <input type="text" name="email" {...register("email",{required:true})} />
        </div>
        {errors.email && errors.email.type === "required" && (
            <p className="errorMsg"  style={{color:"red"}}>Email is required.</p>
          )}
        <div className="form-control">
          <label>Password</label>
          <input type="password" name="password" {...register("password",{required:true})} />
          <p className="errorMsg" style={{color:"red"}}>Password is required.</p>
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
export default MyFormHook;
