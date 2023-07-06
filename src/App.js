import logo from "./logo.svg";
import "./App.css";
import { Singleton, Counter } from "./singleton/index.ts";

function App() {
  /**
   * INFO: Singleton
   */
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{instance1}</p>
        <p>{instance1 === instance2 ? "true" : "false"}</p>
      </header>
    </div>
  );
}

export default App;
