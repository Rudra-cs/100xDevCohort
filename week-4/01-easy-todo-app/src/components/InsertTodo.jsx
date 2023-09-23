const InsertTodo = () => {
  return (
    <div>
      <label htmlFor="todoTitle">Todo Title</label>
      <input type="text" name="todoTitle" id="todoTitle" />
      <br />
      <label htmlFor="todoDesc">Todo Description</label>
      <input type="text" name="todoDesc" id="todoDesc" />
      <br />
      <input type="button" value="Submit" />
    </div>
  );
};

export default InsertTodo;
