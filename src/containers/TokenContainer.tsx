import { useState } from "react";
import { createContainer } from "unstated-next";

const TokenContainerHook = () => {
  const [accessToken, setAccessToken] = useState<string | undefined>();

  return { accessToken, setAccessToken };
};

export default createContainer(TokenContainerHook);
