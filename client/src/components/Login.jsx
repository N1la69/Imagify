import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";

const Login = () => {
  const { setShowLogin } = useContext(AppContext);

  const [state, setState] = useState("Login");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        className="relative bg-white p-10 rounded-xl text-slate-500"
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        <p className="text-sm text-center">
          {state === "Login"
            ? "Welcome back! Please sign in to continue."
            : "Create an account to get started."}
        </p>

        {state === "Sign Up" && (
          <div className="border px-5 py-2 flex items-center gap-2 rounded-full mt-5">
            <img src={assets.profile_icon} alt="profile" width={26} />
            <input
              type="text"
              placeholder="Full Name"
              required
              className="outline-none text-sm"
            />
          </div>
        )}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.email_icon} alt="email" />
          <input
            type="email"
            placeholder="Email"
            required
            className="outline-none text-sm"
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.lock_icon} alt="profile" />
          <input
            type="password"
            placeholder="Password"
            required
            className="outline-none text-sm"
          />
        </div>

        {state === "Login" ? (
          <p className="text-sm text-blue-600 my-4 cursor-pointer">
            Forgot Password?
          </p>
        ) : (
          <div className="my-4"></div>
        )}

        <button className="bg-blue-600 w-full text-white py-2 rounded-full">
          {state === "Login" ? "Login" : "Create Account"}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don&apos;t have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}

        <img
          src={assets.cross_icon}
          alt="close"
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => setShowLogin(false)}
        />
      </motion.form>
    </div>
  );
};

export default Login;
