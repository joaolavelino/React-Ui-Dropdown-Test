import React, { useState } from "react";
import "./dropdown.scss";

const Dropdown = ({ align }) => {
  const [showMenu, setShowMenu] = useState(false);

  const content = [
    { name: "Rename", type: "function", action: () => setShowMenu(false) },
    { name: "Delete", type: "function", action: () => setShowMenu(false) },
    { name: "Share", type: "function", action: () => setShowMenu(false) },
    {
      name: "GitHub",
      type: "anchor",
      action: "https://github.com/joaolavelino",
    },
    {
      name: "Button",
      type: "button",
      action: () => alert("You pushed the button"),
    },
  ];
  //The "content" array is meant to carry all the menu items. Using an array to be mapped allow us to bring the menu content from an external file when using multi-language interfaces.
  //Type options: "anchor", "button", or "Function" (if you want a button that will trigger a function, like navigation (in the case of SPAs), update a state, etc.)
  //Action options: set an url for an anchor, or set a callback function to be triggered

  const createListItem = (e, index) => {
    if (e.type == "anchor") {
      return (
        <li key={`dropMenu-${index}`} className="menu-open-item">
          <a href={e.action} target="_blank">
            {e.name}
          </a>
        </li>
      );
    }
    if (e.type == "button") {
      return (
        <li key={`dropMenu-${index}`} className="menu-open-item ">
          <button onClick={e.action} className="menu-button">
            {e.name}
          </button>
        </li>
      );
    }

    if (e.type == "function") {
      return (
        <li
          key={`dropMenu-${index}`}
          className="menu-open-item"
          onClick={e.action}
        >
          {e.name}
        </li>
      );
    }
  };

  return (
    <div className="menu">
      <div
        className="menu-closed"
        onClick={() => setShowMenu(!showMenu)}
        data-testid="closed-menu"
      >
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
        <div
          className={`menu-open menu-align-${align}`}
          data-testid="open-menu"
        >
          <ul>{content.map((e, index) => createListItem(e, index))}</ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
