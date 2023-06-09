import React, { useState } from "react";
import { useLogin } from "../../api/auth/auth";
import { setToken } from "../../utils/token";

const LoginForm: React.FC = () => {
  const { mutateAsync: actionLogin } = useLogin();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with the username and password, such as send them to a server for authentication
    const res = await actionLogin({
      userName: username,
      passWord: password,
    });
    if (res?.token) setToken(res.token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
