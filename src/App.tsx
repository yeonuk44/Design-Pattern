import { useState } from "react";
import { Singleton, Factory, WindowsFactory, MacFactory } from "./creational";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
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
  /**
   * INFO: Abstract Factory
   */
  interface AbstractFactory {
    createProduct(): Product;
  }
  abstract class Product {
    abstract operation(): string;
  }

  function createProduct(factory: AbstractFactory) {
    const product = factory.createProduct();

    return product.operation();
  }

  const windowsFactory = new WindowsFactory();
  const windowsFactoryProduct = createProduct(windowsFactory);

  const macFactory = new MacFactory();
  const macFactoryProduct = createProduct(macFactory);

  /**
   * INFO:
   * Design Patterns controller
   * [Creational Patterns]
   * 1. Singleton
   * 2. Factory
   * 3. Abstract Factory
   */
  let designPatternExample = null;

  switch (inputValue) {
    case "singleton":
      designPatternExample = (
        <>
          <p>{instance1}</p>
          <p>{instance1 === instance2 ? "true" : "false"}</p>
        </>
      );
      break;
    case "factory":
      designPatternExample = (
        <>
          <p>{productA.operation()}</p>
          <p>{productA.operation()}</p>
          <p>{productB.operation()}</p>
          <p>
            {productA.operation() === productA.operation() ? "true" : "false"}
          </p>
        </>
      );
      break;
    case "abstractFactory":
      designPatternExample = (
        <>
          <p>{windowsFactoryProduct}</p>
          <p>{macFactoryProduct}</p>
          <p>
            {windowsFactoryProduct === macFactoryProduct ? "true" : "false"}
          </p>
        </>
      );
      break;
    default:
      designPatternExample = <p>Plz input text</p>;
      break;
  }
  return (
    <div>
      <header>
        <h1>Design Patterns</h1>
        <h2>Plz input text (ref.below text)</h2>
        <h3>Singleton, factory, abstractFactory</h3>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p>
          The design pattern you chose is{" "}
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            {inputValue}
          </span>
          .
        </p>
        <hr />
        <h2>Design Pattern Example</h2>
        {designPatternExample}
      </header>
    </div>
  );
}

export default App;
