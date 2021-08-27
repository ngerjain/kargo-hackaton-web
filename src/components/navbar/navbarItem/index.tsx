import React from "react";

// import library from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function NavbarItem({ name, path, icon }) {
  // library.add(faCoffee);
  return (
    <div>
      <li className="nav-item">
        {" "}
        <a
          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          href={`${path}`}
        >
          {" "}
          {/* <FontAwesomeIcon icon="coffee" /> */}
          <span className="ml-2">{name}</span>{" "}
        </a>{" "}
      </li>
    </div>
  );
}
