import { Button } from "components/button";
import React, { useState } from "react";
import NavbarItem from "./navbarItem";
import { useHistory } from "react-router-dom";

export const Navbar: React.FC = () => {
  const history = useHistory();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.setItem("role", null);
    history.push("/login");
  };

  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-1 bg-gradient-to-r from-gray-100 to-blue-400 mb-3">
        {" "}
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/truck"
            >
              <img src="/assets/logo.png" alt="" className="w-28 h-auto" />
            </a>{" "}
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {" "}
              <i className="fas fa-bars"></i>{" "}
            </button>{" "}
          </div>{" "}
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            {" "}
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {" "}
              {role === "transporter" ? (
                <>
                  <NavbarItem name={"Shipments"} path={"/shipment"} />
                  <NavbarItem name={"Trucks"} path={"/truck"} />
                  <NavbarItem name={"Drivers"} path={"/driver"} />
                </>
              ) : (
                <NavbarItem name={"Shipments"} path={"/shipment"} />
              )}
              <Button onClick={handleLogout} variant="btn-logout">
                {role.toUpperCase()} | LOGOUT
              </Button>
              {/* <NavbarItem name={`${role} | Log Out`} path={"/logout"} /> */}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </nav>
    </div>
  );
};
