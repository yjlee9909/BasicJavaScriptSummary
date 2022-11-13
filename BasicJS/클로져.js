const myFunc = function () {
    g = 10; // 전역변수가 됩니다.

    // myFunc2 함수를 통해 접근할 수 있습니다.
    // 클로저 기법을 통해 외부에서 접근할 수 없도록 
    let a = 1;

    let b = 2;

    // 클로저 함수
    const myFunc2 = function () {
        let b = 5;
        let c = 6;

        a = a + b + c;
        console.log(a); // 1 + 5 + 6 => 12
    }
    // return myFunc2(); // 실행시킨 결과를 반환하겠다.
    return myFunc2; // 함수가 return 받으면 함수가 종료됨 (데이터들은 메모리에서 전부 다 지워짐)
}
const innerFunc = myFunc(); 
innerFunc(); // myFunc2(); -> a는 과연 존재하는가??
// 12가 잘 실행됩니다.

// 아직 참조가 되어 있는 경우 메모리 상에 남겨둡니다.

// myFunc 함수는 myFunc2를 반환합니다.
// 자바스크립트에서 메모리 관리는 참조 카운팅이라는 방법으로 이루어 집니다. a를 여전히 myFunc3에서 참조하고 있기 때문에 myFunc2의 b는 사라지지만 a는 여전히 남아있습니다.

// 클로저 기법을 사용하는 예시
// 함수 안에 함수가 있을 떄만 사용 가능