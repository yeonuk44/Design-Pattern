export const Singleton = (function () {
  let instance; // 싱글톤 인스턴스 변수

  function createInstance() {
    // 인스턴스 생성 로직 함수
    const object = new Object("I am the instance");
    return object;
  }

  return {
    // 인스턴스 접근 메서드 getInstance
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// 싱글톤 인스턴스에 접근
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

// true (동일한 인스턴스), 여러 번 호출해도 동일한 인스턴스를 반환
console.log(instance1 === instance2);
