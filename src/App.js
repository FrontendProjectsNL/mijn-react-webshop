import React from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const todoItem = {
      id: new Date().getTime(),
      task: todo,
    };

    if (todo) {
      setTodos([...todos, todoItem]);
    } else {
      alert("Input field is empty! Please create a new Task!");
    }
    setTodo("");
  };

  const handleDelete = (id) => {
    if (id) {
      const filteredTodos = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(filteredTodos);
    }
  };

  const handleEdit = (id) => {
    const updatedToDo = todos.map((item) => {
      if (item.id === id) {
        item.task = todo;
      }
      return item;
    });
    setTodos(updatedToDo);
    setTodoEditing(null);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo-input">
          <input
            type="text"
            id="todo-input"
            name="task"
            onChange={(e) => setTodo(e.target.value)}
          />
        </label>
        <button type="submit">New Task</button>
      </form>
      <div>
        {todos.map((item) => (
          <div className="todo" key={item.id}>
            {item.id === todoEditing ? (
              <input
                type="text"
                // value={item.task}
                onChange={(e) => setTodo(e.target.value)}
              />
            ) : (
              <span>{item.task}</span>
            )}

            <div>
              {item.id === todoEditing ? (
                <>
                  <button
                    className="editButton"
                    onClick={() => setTodoEditing(null)}
                  >
                    X
                  </button>
                  <button
                    className="editButton"
                    onClick={(e) => handleEdit(item.id)}
                  >
                    V
                  </button>
                </>
              ) : (
                <button
                  className="editButton"
                  onClick={() => setTodoEditing(item.id)}
                >
                  Edit
                </button>
              )}

              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

// import React from "react";
// import "./App.css";

// const App = () => {
//   const [todos, setTodos] = React.useState([]);
//   const [todo, setTodo] = React.useState("");
//   const [todoEditing, setTodoEditing] = React.useState(null);
//   const [editingText, setEditingText] = React.useState("");

//   React.useEffect(() => {
//     const json = localStorage.getItem("todos");
//     const loadedTodos = JSON.parse(json);
//     if (loadedTodos) {
//       setTodos(loadedTodos);
//     }
//   }, []);

//   React.useEffect(() => {
//     const json = JSON.stringify(todos);
//     localStorage.setItem("todos", json);
//   }, [todos]);

//   function handleSubmit(e) {
//     e.preventDefault();

//     const newTodo = {
//       id: new Date().getTime(),
//       text: todo,
//       completed: false,
//     };
//     // setTodos([...todos].concat(newTodo));
//     setTodos([...todos, newTodo]);
//     setTodo("");
//   }

//   function deleteTodo(id) {
//     let updatedTodos = [...todos].filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   }

//   function toggleComplete(id) {
//     // let updatedTodos = [...todos].map((todo) => {
//     let updatedTodos = todos.map((todo) => {
//       if (todo.id === id) {
//         todo.completed = !todo.completed;
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   }

//   function submitEdits(id) {
//     // const updatedTodos = [...todos].map((todo) => {
//     const updatedTodos = todos.map((todo) => {
//       if (todo.id === id) {
//         todo.text = editingText;
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//     setTodoEditing(null);
//   }

//   return (
//     <div id="todo-list">
//       <h1>Todo List</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           onChange={(e) => setTodo(e.target.value)}
//           value={todo}
//         />
//         <button type="submit">Add Todo</button>
//       </form>
//       {todos.map((todo) => (
//         <div key={todo.id} className="todo">
//           <div className="todo-text">
//             <input
//               type="checkbox"
//               id="completed"
//               checked={todo.completed}
//               onChange={() => toggleComplete(todo.id)}
//             />
//             {todo.id === todoEditing ? (
//               <input
//                 type="text"
//                 onChange={(e) => setEditingText(e.target.value)}
//               />
//             ) : (
//               <div>{todo.text}</div>
//             )}
//           </div>
//           <div className="todo-actions">
//             {todo.id === todoEditing ? (
//               <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
//             ) : (
//               <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
//             )}

//             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;
