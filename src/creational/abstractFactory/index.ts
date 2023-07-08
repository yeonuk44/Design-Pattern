// 추상 팩토리 인터페이스
interface AbstractFactory {
  createProduct(): Product;
}

// WindowsFactory 클래스
export class WindowsFactory implements AbstractFactory {
  createProduct(): Product {
    return new WindowsProduct();
  }
}

// MacFactory 클래스
export class MacFactory implements AbstractFactory {
  createProduct(): Product {
    return new MacButton();
  }
}

// 추상 제품 클래스
abstract class Product {
  abstract operation(): string;
}

// WindowsFactory의 제품 클래스
class WindowsProduct extends Product {
  operation(): string {
    return "Rendering a Windows button";
  }
}

// MacFactory의 제품 클래스
class MacButton extends Product {
  operation(): string {
    return "Rendering a Mac button";
  }
}

// 클라이언트 코드
function createUI(factory: AbstractFactory) {
  const button = factory.createProduct();

  button.operation();
}

// 사용 예시
const windowsFactory = new WindowsFactory();
createUI(windowsFactory);

const macFactory = new MacFactory();
createUI(macFactory);
