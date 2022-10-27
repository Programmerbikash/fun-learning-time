import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const { signIn, loading } = useContext(AuthContext);

  const handleLoginWithEmailAndPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
          console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div onSubmit={handleLoginWithEmailAndPassword} className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  name="email"
                  type="text"
                  className="login__input"
                  placeholder="Please Enter Your Email"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  name="password"
                  type="password"
                  className="login__input"
                  placeholder="Password"
                />
              </div>
              <button className="button login__submit">
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
              <h3 style={{marginTop: '10px', marginLeft: '30px'}} className="py-5">
                Don't have an account? <Link to="/register">Sign up</Link>
              </h3>
            </form>
            <div className="social-login">
              <div className="social-icons">
                <Link
                  href="#"
                  className="social-login__icon fab fa-instagram"
                ></Link>
                <Link
                  href="#"
                  className="social-login__icon fab fa-facebook"
                ></Link>
                <Link
                  href="#"
                  className="social-login__icon fab fa-twitter"
                ></Link>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
