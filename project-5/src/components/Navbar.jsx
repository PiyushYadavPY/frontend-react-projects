import React from "react";

const Navbar = () => {
  return (
    <div
      className="my-4 h-[60px] bg-white rounded flex justify-center items-center gap-2 text-xl 
   font-medium"
    >
      <img src="/logos_firebase.svg" alt="" />
      <h1>Contact book</h1>
    </div>
  );
};

export default Navbar;
