import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <h4>This is App.js</h4>
      <Welcome user="Ehsan" />
    </div>
  );
}

export default App;
