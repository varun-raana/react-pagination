import React from "react";

function Select({ setTodoPerPage }) {
  return (
    <select
      className="text-sm border-2 border-black w-fit px-4 py-1 rounded"
      onChange={(e) => setTodoPerPage(e.target.value)}>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="25">25</option>
      <option value="50">50</option>
    </select>
  );
}

export default Select;
