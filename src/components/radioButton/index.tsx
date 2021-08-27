import React, { useState, useRef, useEffect } from "react";
import { createLogicalOr } from "typescript";

const LOCAL_STORAGE_KEY = "role";

export function RadioButton() {
  const [role, setRole] = useState("");
  const roleRef = useRef();
  const roleShipperRef = useRef();
  const roleTransporterRef = useRef();

  useEffect(() => {
    const storedRole = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedRole) setRole(storedRole);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(role));
  }, [role]);

  function handleToggle(e) {
    const { name, value } = e.target;
    console.log(e.target.value);
    const roleChoose = e.target.value;
    setRole(roleChoose);
    console.log(roleChoose);
    alert(role);
  }

  return (
    <div>
      <style>
        {/* input:checked ~ .radio style= color:white background-color: green; TODO:styling */}
      </style>
      <div className="flex justify-center items-center">
        <div className="bg-gray-200 rounded-lg">
          <div className="inline-flex rounded-lg">
            <input
              type="radio"
              name="role_transporter"
              id="role_transporter"
              checked
              hidden
              style={{}}
              value="transporter"
              onChange={handleToggle}
            />
            <label
              htmlFor="role_transporter"
              className="radio text-center self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75"
            >
              Transporter
            </label>
          </div>
          <div className="inline-flex rounded-lg">
            <input
              type="radio"
              name="role_shipper  "
              id="role_shipper"
              hidden
              value="shipper"
              onChange={handleToggle}
            />
            <label
              htmlFor="role_shipper"
              className={`radio text-center self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75`}
            >
              Shipper
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
