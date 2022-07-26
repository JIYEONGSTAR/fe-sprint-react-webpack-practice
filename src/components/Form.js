import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [content, setContent] = useState({
    name: "",
    title: "",
    story: "",
  });
  const handleChange = (e) => {
    const {
      target: { value, id },
    } = e;
    setContent({ ...content, [id]: value });
  };
  return (
    <section className="form__container">
      <h1>My Agora States</h1>
      <div className="form__input--wrapper">
        <div className="form__input--name">
          {/* <label for="name">Enter your name </label> */}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form__input--title">
          {/* <label for="title">Enter your title </label> */}
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            id="title"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form__textbox">
          {/* <label for="story">Your question </label> */}
          <textarea
            id="story"
            name="story"
            placeholder="Enter text"
            required
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <div className="form__submit">
        <button
          onClick={() => {
            //  createOne(content)
            onSubmit(content);
            setContent({
              name: "",
              title: "",
              story: "",
            });
          }}
        >
          SUBMIT
        </button>
      </div>
    </section>
  );
};

export default Form;
