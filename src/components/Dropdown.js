import React, { useState } from "react";
import "./dropdown.scss";

const Dropdown = ({ align }) => {
  const [showMenu, setShowMenu] = useState(false);

  const content = [
    { name: "Rename", action: () => setShowMenu(false) },
    { name: "Delete", action: () => setShowMenu(false) },
    { name: "Share", action: () => setShowMenu(false) },
  ];

  return (
    <div className="menu">
      <div className="menu-closed" onClick={() => setShowMenu(!showMenu)}>
        <svg
          viewBox="0 0 24 24"
          className="menu-closed-icon"
          fill="white"
          height="90%"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5 16.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm0-4.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm0-4.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"
          />
        </svg>
      </div>
      {showMenu && (
        <div className={`menu-open menu-align-${align}`}>
          <ul>
            {content.map((e, index) => (
              <li
                key={`dropMenu-${index}`}
                onClick={e.action}
                className="menu-open-item"
              >
                {e.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
