import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");
  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    console.log(title);
    if(!title.trim()){
      return setTitle("")
    }
    createTodo(title)
    setTitle("");
  };
  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className="flex gap-4 items-center bg-white dark:bg-gray-800 rounded-md overflow-hidden py-4 px-4 transition-all duration-1000"
    >
      <span className="w-5 h-5 rounded-full border-2 inline-block"></span>
      <input
        type="text"
        className="w-full text-gray-300 outline-none dark:bg-gray-800 transition-all duration-1000"
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};
export default TodoCreate;
