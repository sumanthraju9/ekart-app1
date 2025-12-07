import { useState } from "react";
import { useAuthStore } from "./authStore";
import { Link } from "react-router-dom";


const Signup = () => {
  const signup = useAuthStore((s) => s.signup);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const res = await signup(form.name, form.email, form.password);
    if (res.success) window.location.href = "/login";
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Join Ekart</h1>
        <p style={{ textAlign: "center", marginBottom: "20px", fontSize: "15px" }}>
          Create your account to start exploring great deals
        </p>

        <form onSubmit={submit}>
          <input name="name" placeholder="Full Name" onChange={change} />
          <input name="email" placeholder="Email" type="email" onChange={change} />
          <input name="password" placeholder="Password" type="password" onChange={change} />

          <button className="auth-btn" type="submit">Sign Up</button>
        </form>

        <p className="auth-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
