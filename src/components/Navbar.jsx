import React from "react";

const style = {
  nav: `bg-gray-800 h-20 flex justify-center items-center p-4`,
  heading: `text-white text-3xl`,
};

function Navbar() {
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat App</h1>
    </div>
  );
}

export default Navbar;
