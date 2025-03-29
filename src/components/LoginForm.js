import React, { useState, useEffect, useContext } from "react";
import DisplayStatus from "./DisplayStatus";
import AuthContext from "./AuthMessage";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);
  const { setAuth } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password || password.length < 8) {
      setStatus({ type: "error", message: "Invalid input!" });
      return;
    }

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      const user = users.find(
        (u) => u.username === username && u.email === password
      );

      if (user) {
        setStatus({ type: "success", message: "Login successful!" });
        setAuth({ username });
        setTimeout(() => {
          window.location.href = "/courses";
        }, 2000);
      } else {
        setStatus({ type: "error", message: "Invalid credentials" });
      }
    } catch {
      setStatus({ type: "error", message: "API error!" });
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password (min 8 chars)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      <a href="#">Forgot Password?</a>
      {status && <DisplayStatus type={status.type} message={status.message} />}
    </form>
  );
};

export default LoginForm;
