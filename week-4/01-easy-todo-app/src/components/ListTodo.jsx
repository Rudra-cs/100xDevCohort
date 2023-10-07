const ListTodo = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Todo List</h3>
      <div className="div">
        <p style={{ display: "inline" }}>todo</p>
        <input style={{ display: "inline" }} type="button" value="Delete" />
      </div>
    </div>
  );
};

export default ListTodo;
