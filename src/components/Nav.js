import React from "react";
import "./Nav.css";

const Nav = ({ username }) => {
  return (
    <div className="nav">
      <img
        src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-1/121144316_4235843479868633_1561909311908486242_n.png?stp=dst-png_p148x148&_nc_cat=1&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=Rr2M3PyhGFIAX96uIn5&_nc_ht=scontent-lhr8-1.xx&oh=00_AfA_cpBcDrQDqflegmt2hh6G4yDVBPPEeS7qS084EWruZg&oe=63B29E32"
        alt="logo"
      />
      <p>{username}</p>
    </div>
  );
};

export default Nav;
