import LoginContainer from "@/containers/login/LoginContainer";
import LoginIntro from "@/components/login/LoginIntro";
import LoginForm from "@/components/login/LoginForm";
import { AppProps } from "next/app";

const PageLoginContent = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <LoginIntro />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

const PageLogin = () => {
  return (
    <LoginContainer.Provider>
      <PageLoginContent />
    </LoginContainer.Provider>
  );
};

PageLogin.getLayout = (page: AppProps) => page;

export default PageLogin;
