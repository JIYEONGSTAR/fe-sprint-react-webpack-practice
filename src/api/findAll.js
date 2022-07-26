const URL = "http://localhost:3001/discussions";
const findAll = (currentPage) => {
  const getFindAll = fetch(`${URL}?page=${currentPage}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return getFindAll;
};

export default findAll;
