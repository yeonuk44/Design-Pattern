# Design-Pattern
Design Pattern exercise


## Singleton
- 전역 변수를 사용하지 않고 객체를 하나만 생성, 생성한 객체를 어디서든 참조할 수 있도록 하는 패턴
- 생성 패턴
  - 객체 생성에 관련된 패턴
  - 객체의 생성과 조합을 캡슐화해 특정 객체가 생성되거나 변경 되어도 프로그램 구조에 영향을 크게 받지 않도록 유연성을 제공한다.

## Problem
Singleton 에서 성능을 향상시키기 위해 Multi Threading 사용 시 애플리케이션에 발생할 수 있는 문제이다.
- Problems When Using Multiple Threads
- Race Condition
  - 메모리와 같은 동일한 자원을 2개 이상의 thread 가 이용하려고 경합하는 현상

## Solution
1. Eager Initialization ( 정적 변수에 인스턴스를 만들어 바로 초기화하는 방법 )
  - static 변수 
    - 객체가 생성되기 전 클래스가 메모리에 로딩될 때 만들어져 초기화가 한 번만 실행된다.
    - 프로그램 시작 ~ 종료까지 없어지지 않고 메모리에 계속 상주하며 클래스에서 생성된 모든 객체에서 참조할 수 있다.
2. Thread-Safe Initialization ( 인스턴스를 만드는 메서드에 동기화하는 방법 )

  
