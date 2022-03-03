import React, { useState } from "react";
import Layout from "../components/Layout/Layout";

function Register() {
  const [form, setForm] = useState({ email: "", password: "", confirm: "" });
  return (
    <Layout>
      <div className="login-register">
        <div className="login-register-top"></div>
        <div className="container py-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4">
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
                  <form>
                    <div class="mb-3">
                      <input
                        type="text"
                        name=""
                        id=""
                        class="form-control"
                        placeholder="Email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.currentTarget.value })
                        }
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="password"
                        name=""
                        id=""
                        class="form-control"
                        placeholder="Password"
                        required
                        value={form.password}
                        onChange={(e) =>
                          setForm({ ...form, password: e.currentTarget.value })
                        }
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="password"
                        name=""
                        id=""
                        class="form-control"
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
