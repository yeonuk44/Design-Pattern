// 인터페이스: 생성될 객체들이 구현해야 하는 메서드를 정의합니다.
interface Product {
  operation(): string;
}

// 구체적인 객체 클래스: 인터페이스를 구현한 구체적인 객체들입니다.
class ConcreteProductA implements Product {
  operation(): string {
    return "ConcreteProductA operation";
  }
}

class ConcreteProductB implements Product {
  operation(): string {
    return "ConcreteProductB operation";
  }
}

// 팩토리 클래스: 객체를 생성하고 반환하는 역할을 합니다.
export class Factory {
  createProduct(type: string): Product {
    if (type === "A") {
      return new ConcreteProductA();
    } else if (type === "B") {
      return new ConcreteProductB();
    } else {
      throw new Error("Invalid product type");
    }
  }
}

// 클라이언트 코드
const factory = new Factory();

const productA = factory.createProduct("A");
productA.operation(); // Output: ConcreteProductA operation

const productB = factory.createProduct("B");
productB.operation(); // Output: ConcreteProductB operation
