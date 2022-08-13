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
    let isCancelled = false;

    axios
      .get(" https://jsonplaceholder.typicode.com/comments")
      .then(({ data }) => {
        if (!isCancelled) {
          setTodos(data);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  const totalPages = Math.ceil(todos.length / todoPerPage);
  let pages = [...Array(totalPages + 1).keys()].slice(1);

  const nextPageIndex = currentPage * todoPerPage;
  const firstPageIndex = nextPageIndex - todoPerPage;

  const visibleTodos = todos.slice(firstPageIndex, nextPageIndex);

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
        <div className="flex items-center justify-center border-2 border-black w-fit ">
          <Button onClick={showPrevTodos}>prev</Button>
          <PageList
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pages={pages}
          />
          <Button onClick={showNextTodos}>next</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
