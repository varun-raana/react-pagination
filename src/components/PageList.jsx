import React from "react";

function PageList({ pages, setCurrentPage, currentPage }) {
  return (
    <>
      {pages.map((page, index) => {
        return (
          <span
            className={`text-base cursor-pointer w-10 h-full flex items-center justify-center border-x  border-black border-collapse hover:bg-black hover:text-white transition-all duration-300 ease-in ${
              currentPage === page ? "bg-black text-white" : ""
            }`}
            key={index}
            onClick={() => setCurrentPage(page)}>
            {page}
          </span>
        );
      })}
    </>
  );
}

export default React.memo(PageList);
