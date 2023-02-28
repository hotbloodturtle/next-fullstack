import LoginContainer from "@/containers/login/LoginContainer";

const LoginForm = () => {
  const { email, password, setEmail, setPassword, onLogin } =
    LoginContainer.useContainer();
  return (
    <div className="py-24 px-10">
      <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin();
        }}
      >
        <div className="mb-4">
          <div className={`form-control w-full mt-4`}>
            <label className="label">
              <span className={"label-text text-base-content "}>Email Id</span>
            </label>
            <input
              type={"text"}
              value={email}
              placeholder={""}
              onChange={(e) => setEmail(e.target.value)}
              className="input  input-bordered w-full "
            />
          </div>
          <div className={`form-control w-full mt-4`}>
            <label className="label">
              <span className={"label-text text-base-content "}>Password</span>
            </label>
            <input
              type={"password"}
              value={password}
              placeholder={""}
              onChange={(e) => setPassword(e.target.value)}
              className="input  input-bordered w-full "
            />
          </div>
        </div>

        <div className="text-right text-primary">
          <a href="/forgot-password">
            <span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
              Forgot Password?
            </span>
          </a>
        </div>

        <button type="submit" className={"btn mt-2 w-full btn-primary"}>
          Login
        </button>

        <div className="text-center mt-4">
          Do not have an account yet?{" "}
          <a href="/register">
            <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
              Register
            </span>
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
