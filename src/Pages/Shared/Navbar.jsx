import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, getSignOut } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    Swal.fire({
      title: "Are your sure to log out?",
      showDenyButton: true,
      denyButtonText: `Cancel`,
      confirmButtonText: "Yes",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        getSignOut().then(() => {
          Swal.fire("You successfully log out");
        });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved");
      }
    });
  };
  return (
    <div className=" flex justify-between p-4 md:mx-12">
      <div className="flex justify-between gap-2 text-xl font-semibold">
        <img
          src="http://file-dhaka.portal.gov.bd/media/central/themes/theme-default/img/logo.png"
          alt=""
        />
        <Link to="/">
          {" "}
          NPI <br />{" "}
          <span className="text-slate-600">
            <small>নরসিংদী পলিটেকনিক ইনস্টিটিউট</small>
          </span>
        </Link>
      </div>
      <div className="flex gap-4">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <span className="flex items-center">
            {" "}
            Home <FaAngleRight />
          </span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <span className="flex items-center">
            {" "}
            About <FaAngleRight />
          </span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <span className="flex items-center">
            {" "}
            Contact <FaAngleRight />
          </span>
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <span className="flex items-center">
            {" "}
            Login <FaAngleRight />
          </span>
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <span className="flex items-center">
            {" "}
            Register 🚩 <FaAngleRight />
          </span>
        </NavLink>
        <div className="flex gap-3">
          {user ? (
            <div className="dropdown dropdown-end">
              <img
                tabIndex={0}
                className="w-9 h-8 cursor-pointer"
                src="https://em-content.zobj.net/source/skype/289/flag-bangladesh_1f1e7-1f1e9.png"
                alt=""
              />
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link>Profile</Link>
                </li>
                <li onClick={handleSignOut}>
                  <button>Log out</button>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
