import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import Discussions from "../components/Discussions";
import findAll from "../api/findAll";
import Pagination from "../components/Pagination";
import createOne from "../api/createOne";

const Main = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [list, setList] = useState([]);
  const init = async () => {
    let data = await findAll(currentPage);
    setTotalCount(data.totalCount);
    setList(data.sliceData);
  };
  const handleSubmit = (content) => {
    console.log(content);
    createOne(content);
  };
  useEffect(() => {
    init();
  }, [currentPage, handleSubmit]);
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <main>
        <Form onSubmit={handleSubmit} />
        <section className="discussion__wrapper">
          <Discussions list={list} />
          <section className="pageNum__wrapper">
            <ul className="pageNum__container">
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalCount={totalCount}
              />
            </ul>
          </section>
        </section>
      </main>
    </>
  );
};

export default Main;
