import { Singleton, Factory } from "./creational";

function App() {
  /**
   * INFO: Singleton
   */
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  /**
   * INFO: Factory
   */
  const factory = new Factory();
  const productA = factory.createProduct("A");
  const productB = factory.createProduct("B");

  return (
    <div>
      <header>
        {/* <p>{instance1}</p>
        <p>{instance1 === instance2 ? "true" : "false"}</p> */}
        <p>{productA.operation()}</p>
        <p>{productB.operation()}</p>
      </header>
    </div>
  );
}

export default App;
