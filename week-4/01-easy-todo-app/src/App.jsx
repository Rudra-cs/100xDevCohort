import Footer from "./components/Footer";
import InsertTodo from "./components/InsertTodo";
import ListTodo from "./components/ListTodo";

const App = () => {
  return (
    <>
      <h2>Todo App</h2>
      <InsertTodo />
      <ListTodo />
      <Footer />
    </>
  );
};

export default App;
