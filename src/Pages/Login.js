import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const auth = getAuth();



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      localStorage.setItem("currentUser", JSON.stringify(result));
      setLoading(false);
      toast.success("Login Successfully!");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("failed to login");
    }
  };

  if(localStorage.getItem("currentUser")){
    return <Navigate to="/" />
  }

  if (loading) {
    return (
      <div className="container">
        <div className="d-flex justify-content-center py-5">
          <div className="spinner-border loader" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="login-register">
      <div className="login-register-top"></div>
      <div className="container py-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <lottie-player
              src="https://assets4.lottiefiles.com/packages/lf20_q5pk6p1k.json"
              background="transparent"
              speed="1"
              style={{ width: "100%" }}
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="col-md-4">
            <div className="card mb-3 form-shadow">
              <div className="card-header text-center bg-dark text-light bg-gradient text-uppercase">
                Login
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      placeholder="Email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.currentTarget.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      name=""
                      id=""
                      className="form-control"
                      placeholder="Password"
                      required
                      value={form.password}
                      onChange={(e) =>
                        setForm({ ...form, password: e.currentTarget.value })
                      }
                    />
                  </div>
                  <div className="text-center">
                    <button className="btn btn-outline-dark">LOGIN</button>
                  </div>
                  <p className="card-text mt-4">
                    Do not have an account?{" "}
                    <Link
                      to="/register"
                      className="text-primary text-decoration-none"
                    >
                      Create one
                    </Link>{" "}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
