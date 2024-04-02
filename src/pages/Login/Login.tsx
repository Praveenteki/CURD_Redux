import React, { useState } from "react";
import styles from "./Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { loginUser } from "../../redux/auth/action";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../utils/validators";

type Errors = {
  username: string;
  password: string;
};

function Login() {
  const [username, setUsername] = useState("test45@yopmail.com");
  const [password, setPassword] = useState("Test@123");
  const [errors, setErrors] = useState<Errors>({ username: "", password: "" });
  const dispatch = useDispatch<AppDispatch>();
  const { login_loading } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const successHandler = () => {
    navigate("/", { replace: true });
  };

  const loginHandler = (event: React.FormEvent) => {
    event.preventDefault();
    let localErrors: Errors = { username: "", password: "" };
    setErrors(localErrors);
    const isCorrectEmail = validateEmail(username);
    const isCorrectPassword = validatePassword(password);
    if (
      isCorrectEmail &&
      isCorrectPassword &&
      username === "test45@yopmail.com" &&
      password === "Test@123"
    ) {
      if (!login_loading) {
        dispatch(loginUser(username, password, successHandler));
      }
    } else {
      if (!isCorrectEmail) {
        localErrors.username = "Incorrect Email";
      }
      if (!isCorrectPassword) {
        localErrors.password =
          "Passowrd must be 8 characters long, at least 1 capital letter and 1 small letter ";
      }
      if (
        isCorrectEmail &&
        isCorrectPassword &&
        username !== "test45@yopmail.com" &&
        password !== "Test@123"
      ) {
        localErrors.username = "Invalid Email";
        localErrors.password = "Invalid Password";
      }
      setErrors(localErrors);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.loginContainer}>
        <form onSubmit={loginHandler} className={styles.formContainer}>
          <div className={styles.logoContainer}>
            <img
              src="http://www.hindigraphics.in/wp-content/uploads/2019/01/pro.png"
              alt="logo"
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors?.username && <h6>{errors?.username}</h6>}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors?.password && <h6>{errors?.password}</h6>}
          </div>
          <div className={styles.buttonContainer}>
            <input type="submit" className={styles.button} value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
