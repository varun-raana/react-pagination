import React from "react";

function TodoList({ visibleTodos }) {
  return (
    <>
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
    </>
  );
}

export default TodoList;
