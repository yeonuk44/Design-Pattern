public class Printer {
   // static 변수에 외부에 제공할 자기 자신의 인스턴스를 만들어 초기화
   private static Printer printer = new Printer();
   private Printer() { }
   // 자기 자신의 인스턴스를 외부에 제공
   public static Printer getPrinter(){
     return printer;
   }
   public void print(String str) {
     System.out.println(str);
   }
}
