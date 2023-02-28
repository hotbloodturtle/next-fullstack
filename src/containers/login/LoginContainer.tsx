import { createContainer } from "unstated-next";
import { useState } from "react";
import TokenContainer from "@/containers/TokenContainer";
import { useRouter } from "next/navigation";

const LoginContainerHook = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAccessToken } = TokenContainer.useContainer();
  const { push } = useRouter();

  const onLogin = async () => {
    const result = await fetch("/api/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await result.json();
    setAccessToken(data?.accessToken);
    push("/");
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    onLogin,
  };
};

export default createContainer(LoginContainerHook);
