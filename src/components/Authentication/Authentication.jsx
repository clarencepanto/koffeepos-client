import "./Authentication.scss";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Card, Label, TextInput } from "flowbite-react";
import { useState } from "react";

function Authentication() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/users/login", {
        username,
        password,
      });

      const { token } = res.data;

      // Save token
      localStorage.setItem("token", token);

      // Decode to get the role
      const decoded = jwtDecode(token);

      // Redirect based on role
      if (decoded.role === "manager") {
        navigate("/pos");
      } else if (decoded.role === "barista") {
        navigate("/pos");
      }
    } catch (error) {
      if (error.response.data.error == "Invalid Password") {
        toast.error("Login Failed! Invalid Password");
      } else if (error.response.data.error == "Invalid Username") {
        toast.error("Login Failed! Check username and password");
      }
    }
  };

  return (
    <div className="auth-container auth ">
      <h1 className="text-4xl  auth__header">Welcome to KOFFEEPOS!</h1>
      <Card className="max-w-100 opacity-85 z-10 auth__card">
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username">Username</Label>
            </div>
            <TextInput
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="barista123"
              className="auth__input text-red-50"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password">Password</Label>
            </div>
            <TextInput
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="auth__input"
              required
            />
          </div>
          <Button className="auth__button" type="submit">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default Authentication;
