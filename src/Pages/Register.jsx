import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaLock, FaEnvelope, FaLockOpen, FaFacebook } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { sendEmailVerification } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { createUser, googleSignIn, facebookSignIn } = useContext(AuthContext);
  const [show, setShow] = useState(true);
  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    // console.log(email, password, confirmPassword);
    ////apply condition for password validation
    // 1> pass == confirm pass
    if (password !== confirmPassword) {
      return toast.error("Password and confirm password must be same");
    }
    // 2 > check password is at least 8 characters
    if (!/.{8,}/.test(password)) {
      return toast.error("Password must be at least 8 characters");
    }
    createUser(email, password)
      .then((res) => {
        toast.success("Your account has created successfully");
        sendVerificationMail(res.user);
      })
      .catch((err) => toast.error(err.message.split("/")[1]));
  };
  const sendVerificationMail = (user) => {
    sendEmailVerification(user).then(() =>
      toast.success("A verification email has sent")
    );
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        toast.success("Your account has created successfully");
        sendEmailVerification(res.user);
      })
      .catch((error) => toast.error(error.message.split("/")[1]));
  };
  const handleFacebookSignIn = () => {};
  return (
    <div className="md:w-4/5  mx-auto my-4 border text-center">
      <div className="md:flex items-center gap-4">
        <div className="shadow-lg md:p-12 border p-4 md:w-1/2 mx-auto my-8">
          <h3 className="text-xl font-semibold mb-4">
            Create your free account now!
          </h3>
          <form onSubmit={handleCreateUser} action="">
            <div className="relative">
              <span className="absolute bottom-6 ml-5">
                <FaEnvelope />
              </span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input px-12 w-full my-2 bg-gray-100"
              />
            </div>

            <div className="relative">
              <span
                onClick={() => setShow(!show)}
                className="absolute bottom-6 ml-5"
              >
                {show ? <FaLock /> : <FaLockOpen />}
              </span>
              <input
                type={show ? "password" : "text"}
                name="password"
                placeholder="Enter your password"
                className="input px-12 w-full my-2 bg-gray-100"
              />
            </div>

            <div className="relative">
              <span
                onClick={() => setShow(!show)}
                className="absolute bottom-6 ml-5"
              >
                {show ? <FaLock /> : <FaLockOpen />}
              </span>
              <input
                type={show ? "password" : "text"}
                name="confirmPassword"
                placeholder="Enter your confirm password"
                className="input px-12 w-full my-2 bg-gray-100"
              />
            </div>
            <div className="">
              <p className="my-4">
                <small>
                  Already have an account ?{" "}
                  <Link to="/login" className=" btn-link">
                    Log in
                  </Link>
                </small>
              </p>
              <input
                type="submit"
                className="w-full btn btn-outline"
                value="Register"
              />
            </div>
          </form>
        </div>
        <div className=" text-center  mx-4">
          <h1 className="text-xl font-semibold my-4">Register with</h1>
          <div>
            <button
              onClick={handleGoogleSignIn}
              className="btn-outline border px-8 w-2/3 rounded  py-3"
            >
              <span className="flex items-center gap-2">
                <span className="text-blue-600 text-xl">
                  {" "}
                  <FaGoogle />{" "}
                </span>{" "}
                Register with Google
              </span>
            </button>

            <button
              onClick={handleFacebookSignIn}
              className="btn-outline my-2 border w-2/3 px-8 rounded  py-3"
            >
              <span className="flex items-center gap-2">
                <span className="text-blue-600 text-xl">
                  <FaFacebook />
                </span>
                Register with Facebook
              </span>
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
