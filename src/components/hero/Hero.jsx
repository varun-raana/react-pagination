import { useState, useEffect } from "react";
import axios from "axios";
import Select from "../Select";
import Button from "../../UI/Button";
import TodoList from "../TodoList";
import PageList from "../PageList";

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
      <Select setTodoPerPage={setTodoPerPage} />
      <TodoList visibleTodos={visibleTodos} />
      <div className="mt-5 flex justify-center w-full">
        <Button onClick={showPrevTodos}>prev</Button>
        <div className="flex items-center justify-center border-2 border-black ">
          <PageList setCurrentPage={setCurrentPage} pages={pages} />
        </div>
        <Button onClick={showNextTodos}>next</Button>
      </div>
    </div>
  );
}

export default Hero;
