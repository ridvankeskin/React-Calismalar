import { useEffect, useState } from "react";
import Form from "./components/Form";
import Loader from "./components/Loader";
import ListItem from "./components/ListItem";
import axios from "axios";

const App = () => {
  //  tuttuğumuz state
  const [todos, setTodos] = useState(null);

  // api ye todoolar için get isteği atığıyoruz
  useEffect(() => {
    axios
      .get("http://localhost:3000/todos")
      // istek başarılı olursa
      .then((res) => setTodos(res.data))
      // istek başarısız olursa
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container p-3 p-md-5">
      <h1 className="text-center ">
        Server <span className="text-warning">CRUD</span>
      </h1>

      <Form setTodos={setTodos} />

      <ul className="list-group">
        {/* VERİLER YOKSA LODER BAS */}
        {!todos && <Loader />}

        {/* veriler geldiyse ektana bas. 1. yöntem && */}

        {/* {todos && todos.map((todo) => <li key={todo.id}>ELEMAN</li>)} */}

        {/* veriler geldiyse ektana bas. 2. yöntem  ? */}
        {todos?.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
