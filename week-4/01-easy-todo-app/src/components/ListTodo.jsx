/* eslint-disable react/prop-types */
import axios from "axios";

const ListTodo = ({ todo, fetchData }) => {
  // Function to delete a note
  const handleDelete = (noteId) => {
    axios
      .delete(`http://localhost:3000/todos/${noteId}`)
      .then(() => {
        console.log("Deleted Todo Successfully!! ");

        fetchData();
      })
      .catch((error) => {
        console.error("Error deleting Todo:", error);
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div className="div">
        <p style={{ display: "inline" }}>
          {todo.title}-{todo.description}
        </p>
        <input
          style={{ display: "inline" }}
          type="button"
          value="Delete"
          onClick={() => handleDelete(todo.id)}
        />
      </div>
    </div>
  );
};

export default ListTodo;
