import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-center mb-5 my-bold">
        Desarrollo una <span style={{ color: "#7366ff" }}>Aplicación sencilla </span>
        con Node.js, Express, MySQL, API REST y ReactJS
      </h1>
      <HomePage />
    </>
  );
}

export default App;
