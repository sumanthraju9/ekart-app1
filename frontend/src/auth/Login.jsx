import { useState } from "react";
import { useAuthStore } from "./authStore";
import { Link } from "react-router-dom";


const Login = () => {
  const login = useAuthStore((s) => s.login);
  const [form, setForm] = useState({ email: "", password: "" });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const res = await login(form.email, form.password);
    if (res.success) window.location.href = "/";
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Welcome to Ekart</h1>
        <p style={{ textAlign: "center", marginBottom: "20px", fontSize: "15px" }}>
          Please sign in to continue shopping
        </p>

        <form onSubmit={submit}>
          <input name="email" placeholder="Email" onChange={change} type="email" />
          <input name="password" placeholder="Password" type="password" onChange={change} />

          <button className="auth-btn" type="submit">Login</button>
        </form>

        <p className="auth-link">
          New to Ekart? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
