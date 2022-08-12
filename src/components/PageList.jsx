import React from "react";

function PageList({ pages, setCurrentPage }) {
  return (
    <>
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
    </>
  );
}

export default PageList;
