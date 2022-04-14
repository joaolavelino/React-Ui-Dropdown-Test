import React from "react";

const AlignButton = ({ menuAlign, setMenuAlign }) => {
  const handleAlignment = () => {
    menuAlign == "left" ? setMenuAlign("right") : setMenuAlign("left");
  };

  return (
    <button
      className="align-button"
      onClick={handleAlignment}
      data-testid="align-button"
    >
      {`Align menu to the ${menuAlign == "left" ? "right" : "left"}`}
    </button>
  );
};

export default AlignButton;
