import { useState } from "react";

const createPost = () => {
  const [form, setForm] = useState({
    title: "",
    body: "",
  });

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const jsonResPosts = await fetch("http://localhost:3000/api/post/create", {
      method: "POST",
      body: JSON.stringify(form),
    });
    const result = await jsonResPosts.json();
    console.log("result:", result);
  };

  return (
    <>
      <h2>Create Post</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>body</label>
          <textarea name="body" value={form.body} onChange={changeHandler} />
        </div>
        <button type="submit">SEND</button>
      </form>
    </>
  );
};

export default createPost;
