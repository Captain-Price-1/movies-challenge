import React from "react";

const Navbar = () => {
  return (
    <article>
      <div className="navbar">
        <div className="rightside">
          {/* <img src=" alt="" /> */}
          <input placeholder="Search Movie"></input>
          <button>Home</button>
          <button>Discover</button>
          <button>Apps</button>
        </div>
        <div className="left-logout">
          <button>Logout</button>
        </div>
      </div>
    </article>
  );
};

export default Navbar;
