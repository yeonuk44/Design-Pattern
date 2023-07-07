import { Singleton } from "./creational";
// import { Singleton } from "./creational/singleton";

function App() {
  /**
   * INFO: Singleton
   */
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  return (
    <div className="App">
      <header className="App-header">
        <p>{instance1}</p>
        <p>{instance1 === instance2 ? "true" : "false"}</p>
      </header>
    </div>
  );
}

export default App;
