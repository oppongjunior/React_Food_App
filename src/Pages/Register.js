import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
function Register() {
  const [form, setForm] = useState({ email: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.confirm !== form.password) {
      toast.error("password must match");
      return;
    }

    try {
      setLoading(true);
      const result = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      console.log(result);
      setLoading(false);
      toast.success("registered successfully!");
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("failed to register");
    }
  };

  if (localStorage.getItem("currentUser")) {
    return <Navigate to="/" />;
  }

  if (loading) {
    return (
      <div className="container py-5">
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
                Create Account
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
                  <div className="mb-3">
                    <input
                      type="password"
                      name=""
                      id=""
                      className="form-control"
                      placeholder="Confirm"
                      required
                      value={form.confirm}
                      onChange={(e) =>
                        setForm({ ...form, confirm: e.currentTarget.value })
                      }
                    />
                  </div>
                  <div className="text-center">
                    <button className="btn btn-outline-dark">REGISTER</button>
                  </div>
                  <p className="card-text mt-4">
                    Have an account already?{" "}
                    <Link
                      to="/login"
                      className="text-primary text-decoration-none"
                    >
                      Login
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

export default Register;
