// 스코프 : 변수의 유효 범위
// 전역 스코프 - 전역 공간에 선언된 변수, 함수 스코프, 블록 스코프 - 중괄호{} 안에서 끝남

// 전역 스코프
let val = 2; // val 변수는 자바스크립트 어디에서는 접근 가능한 변수

// 함수 스코프 - 함수 안에 존재하는 변수
function test() {
    let val2 = 1; // 함수 안에서만 유효합니다.
    console.log(val2); 
}
console.log(val2); // 접근이 불가능합니다.

function test1() {
    let a = 1;
    let b = 2;
    return a + b;
}
let a = 20; // test1()의 a와 관계가 없습니다.
console.log(test1()); // 3


// 함수안에 정의된 변수는 외부에서 접근할 수 없습니다.
// 함수안에서 정의된 변수는 함수안에서는 어디든 접근이 가능합니다.
// 상위 스코프에서 찾아보게 됩니다. -> 스코프 체이닝 (탐색해가는 과정)
//
const myFunc = function () {
    g = 10; // 전역변수가 됩니다.
    let a = 1;
    let b = 2;

    const myFunc2 = function () {
        let b = 5;
        let c = 6;

        a = a + b + c;
        console.log(a); // 1 + 5 + 6 => 12
    }
    myFunc2();
}
myFunc();
console.log(g); // 10