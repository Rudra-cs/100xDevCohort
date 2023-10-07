const InsertTodo = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Todo App</h2>
      <label htmlFor="todo">Todo</label>
      <input type="text" name="todo" id="todo" />
      <br />
      <input type="button" value="Submit" />
    </div>
  );
};

export default InsertTodo;
