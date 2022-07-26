import React, { useState } from "react";

const Pagination = ({ currentPage, setCurrentPage, totalCount }) => {
  const pages =
    totalCount % 10 === 0 ? totalCount / 10 : Math.floor(totalCount / 10) + 1;
  return (
    <>
      {[...Array(pages)].map((num, i) => {
        return (
          <button
            className={currentPage !== i ? "pageBtn" : "pageBtn current"}
            onClick={() => setCurrentPage(i)}
          >
            {i + 1}
          </button>
        );
      })}
    </>
  );
};

export default Pagination;
