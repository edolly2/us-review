import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

import { useState } from "react";

const Navigation = () => {
  const [assocDropdownActive, setAssocDropdownActive] = useState(false);
  return (
    <nav className="top-navigation--nav">
      <ul className="top-navigation--nav_list">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Press Releases</li>
        <li>Agenda</li>
        <li>Legislature</li>
        <li>Approval</li>
        <li>Local</li>
        <li>
          <div
            className="association-dropdown"
            onClick={() => {
              setAssocDropdownActive(!assocDropdownActive);
            }}
          >
            Association{" "}
            <BsFillCaretDownFill
              style={{ display: !assocDropdownActive ? "block" : "none" }}
            />
            <BsFillCaretUpFill
              style={{ display: assocDropdownActive ? "block" : "none" }}
            />
          </div>
          <ul
            className="association-dropdown--list"
            style={{ display: assocDropdownActive ? "block" : "none" }}
          >
            <li>FBI</li>
            <li>DHS</li>
            <li>FDA</li>
            <li>NIH</li>
            <li>DOJ</li>
          </ul>
        </li>
        <li>Donate</li>
      </ul>
    </nav>
  );
};

export default Navigation;
