import { useState, useEffect } from "react";
import axios from "axios";

function Hero() {
  const [todos, setTodos] = useState([]);
  const [todoPerPage, setTodoPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(" https://jsonplaceholder.typicode.com/comments")
      .then(({ data }) => setTodos(data));
  }, []);

  const totalPages = Math.ceil(todos.length / todoPerPage);
  const pages = [...Array(todoPerPage + 1).keys()].slice(1);

  const lastPageIndex = currentPage * todoPerPage;
  const firstPageIndex = lastPageIndex - todoPerPage;
  console.log("totaPages " + totalPages);
  console.log("lastPageIndex " + lastPageIndex);
  console.log("firstPageIdex " + firstPageIndex);

  const visibleTodos = todos.slice(firstPageIndex, lastPageIndex);

  function showNextTodos() {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  function showPrevTodos() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className=" flex flex-col gap-4 p-10 max-w-7xl mx-auto w-full">
      <select
        className="text-sm border-2 border-black w-fit px-4 py-1 rounded"
        onChange={(e) => setTodoPerPage(e.target.value)}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
      </select>
      <div>
        {visibleTodos.map((item) => {
          return (
            <div className="flex flex-col gap-2 justify-center" key={item.id}>
              <p className="text-lg bg-white drop-shadow-xl p-2 rounded-md text-left">
                {item.email}
              </p>
              <p className="text-lg bg-white drop-shadow-xl p-2 rounded-md text-left">
                {item.body}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-5 flex justify-center w-full">
        <button
          className="w-fit font-black  flex items-center justify-center border-2 mx-1 border-black text-base capitalize p-2"
          onClick={showPrevTodos}>
          prev
        </button>
        <div className="flex items-center justify-center border-2 border-black ">
          {pages.map((page, index) => {
            return (
              <span
                className="text-base cursor-pointer w-10 h-full flex items-center justify-center border-x last-of-type:border-r-0 first-of-type:border-l-0 border-black border-collapse hover:bg-black hover:text-white transition-all duration-300 ease-in"
                key={index}
                onClick={() => setCurrentPage(page)}>
                {page}
              </span>
            );
          })}
        </div>
        <button
          className="w-fit font-black flex items-center justify-center border-2 mx-1 border-black text-base capitalize p-2"
          onClick={showNextTodos}>
          next
        </button>
      </div>
    </div>
  );
}

export default Hero;
