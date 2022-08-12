import React from "react";

function Button({ children, onClick }) {
  return (
    <button
      className="w-fit font-black  flex items-center justify-center border-2 mx-1 border-black text-base capitalize p-2"
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
