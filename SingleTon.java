// 프린터 관리자 만들기
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
