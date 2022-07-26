const URL = "http://localhost:3001/discussions";
const createOne = (content) => {
  console.log(content);
  let body = {
    author: content.name,
    title: content.title,
    createdAt: new Date().toISOString(),
    avatarUrl: "https://avatars.githubusercontent.com/u/53474999?v=4",
    bodyHTML: content.story,
  };
  fetch(URL, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default createOne;
