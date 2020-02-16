// 프린터 관리자 만들기
// public class Printer {
//   public Printer(){}
//   public void print(Resource r) {...}
// }

// 프린터는 하나이기 때문에 프린터를 이용하기 위해선 한 번만 호출되게 해야함
// 해소 법 : 생성자를 외부에서 호출할 수 없게 하는 것. private 로 수정
// public class Printer {
//   private Printer(){}
//   public void print(Resource r) {...}
// }

// 자신의 프린터에 대한 인스턴스를 하나 만들어 외부에 제공해줄 메서드가 필요
// static 은 구체적인 인스턴스에 속하는 영역이 아니고 클래스 자체에 속함
// 클래스의 인스턴스를 통하지 않고서도 메서드를 실행 할 수 있고 변수를 참조할 수 있다.
public class Printer {
  // 외부에 제공할 자기 자신의 인스턴스
  private static Printer printer = null;
  private Printer(){}
  // 자기 자신의 인스턴스를 외부에 제공
  // 만약 new Printer() 가 호출되기 전이면 인스턴스 메서드인 print() 메서드는 호출 x
  public static Printer getPrinter(){
    if (printer == null){
      // Printer 인스턴스 생성
      printer = new Printer();
    }
    return printer;
  }
  public void print(String str) {
    System.out.println(str);
  }
}



// Client 에서의 사용
public class User {
  private String name;
  public User(String name) { this.name = name; }
  public void print(){
    Printer printer = printer.getPrinter();
    printer.print(this.name + "print using" + printer.toString());

  }
}

public class Client {
  private static final int USER_NUM = 5;
  public static void main(String[] args) {
    User[] user = new USER_NUM; i++) {
      // User 인스턴스 생성
      user[i] = new User((i+1))
      user[i].print();
    }
  }
}
