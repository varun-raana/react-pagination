import React from "react";

function TodoList({ visibleTodos }) {
  return (
    <>
      {visibleTodos.map((item) => {
        return (
          <div
            className="flex flex-col gap-2 items-start bg-white shadow p-3 w-full relative"
            key={item.id}>
            <div className="absolute top-1 left-1 h-full bg-black w-full -z-10"></div>
            <p className="text-lg text-justify p-2">{item.email}</p>
            <p className="text-lg text-justify p-2 mt-auto">{item.body}</p>
          </div>
        );
      })}
    </>
  );
}

export default TodoList;
