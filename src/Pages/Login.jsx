import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaLock, FaEnvelope, FaLockOpen } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [show, setShow] = useState(true);
  const { signIn } = useContext(AuthContext);

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((res) => toast.success("Your login has successful"))
      .catch((error) => toast.error(error.message.split("/")[1]));
  };
  return (
    <div className="md:w-4/5  mx-auto my-4 border text-center">
      <div className="shadow-lg md:p-12 p-4 md:w-1/2 mx-auto my-8">
        <h3 className="text-xl font-semibold mb-4">
          Please login to get our service!!!
        </h3>
        <form onSubmit={handleSignIn} action="">
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

          <div className="">
            <p className="my-4">
              <small>
                Don't have an account ?{" "}
                <Link to="/register" className=" btn-link">
                  Register
                </Link>
              </small>
            </p>
            <input
              type="submit"
              className="w-full btn btn-outline"
              value="Login"
            />
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
