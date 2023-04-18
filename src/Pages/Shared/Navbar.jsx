import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const Navbar = () => {
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
        <div>
          <img
            className="w-9 h-8"
            src="https://em-content.zobj.net/source/skype/289/flag-bangladesh_1f1e7-1f1e9.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
