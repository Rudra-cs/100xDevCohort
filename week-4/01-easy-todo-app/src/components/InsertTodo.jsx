import { useEffect, useState } from "react";
// import ListTodo from "./ListTodo";
import axios from "axios";
import ListTodo from "./ListTodo";

const InsertTodo = () => {
  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);

  const handleCallback = async (event) => {
    event.preventDefault();
    const Todo = {
      title: todo,
      description: description,
    };

    try {
      const response = await axios.post("http://localhost:3000/todos", Todo);
      console.log("Data submitted successfully:", response.data);

      setTodo("");
      setDescription("");
      // After successfully submitting, fetch the updated data
      await fetchData();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos"); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log("Error");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "200px" }}>
      <h2
        style={{
          fontFamily: "cursive",
          fontWeight: "bolder",
          textDecoration: "underline",
        }}
      >
        Todo App
      </h2>
      <form onSubmit={() => handleCallback(event)}>
        <label htmlFor="todo">Title</label>
        <input
          value={todo}
          type="text"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          style={{ margin: "10px" }}
          name="todo"
          id="todo"
        />
        <br />
        <label htmlFor="todo">Desc</label>
        <input
          value={description}
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          style={{ margin: "10px" }}
          name="todo"
          id="todo"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <h3>Todo List</h3>
      {data.map((todo) => (
        <ListTodo key={todo.id} todo={todo} fetchData={fetchData} />
      ))}
    </div>
  );
};

export default InsertTodo;
