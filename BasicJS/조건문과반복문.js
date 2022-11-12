const result = Math.floor((Math.random() * 10) + 1);
console.log(result);

// 조건문 : 여러 값들이 주어지고 그 값의 종류에 따라 처리 방법을 달리 해야할 경우 사용합니다.

if (result > 5) {
    console.log('값이 5보다 큽니다.');
} else if (result < 5) {
    console.log('값이 5보다 작습니다.');
}

// if 문에 비해 가독성이 좋다.
switch (Math.floor((Math.random() * 10) + 1)) {
    case 1:
    case 2:
    case 3:
    case 4:
        console.log('값이 5보다 작습니다.');
        break;
    case 5:
        console.log('값이 5입니다.');
        break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log('값이 5보다 큽니다.');
        break;
}

// 삼항 연산자
// 조건문 ? 트로인 경우 : 거짓인 경우 ;
const result1 = Math.floor((Math.random() * 10) + 1);
result1 > 5 ? console.log('값이 5보다 큽니다.') : console.log('값이 5보다 작습니다.');


// 반복문
// for in문 : 객체를 순환하고 싶을때 사용

const snack = {
    새우깡: 1000,
    짱구 : 1500,
    홈런볼 : 2000
}
// 모든 인스턴스들이 공유할 수 있는 공간 : 프로토타입
// 모든 인스턴스에 꼬북칩을 추가하게됨!!!!
// 사용하지 마세요
Object.prototype.꼬북칩 = 3000;

for (let item in snack) {
    // hasOwnProperty: 객체가 특정 프로퍼티를 가지고 있는지 확인합니다. (프로토타입에 등록된 프로퍼티는 제외합니다. - Object 안에 등록되어 있는 프로퍼티들을 필터링 하여 순수하게 내가 추가한 프로퍼티만 확인을 합니다.)
    // 프로퍼티 등록한 것들 제외 / 예방하기 위해 사용해줘야 합니다.
    // 내가 등록한 것만 출력
    if(snack.hasOwnProperty(item)) {
        console.log(`${item}의 가격은 ${snack[item]}원 입니다.`)
    }
}


// for of문 : 순환 가능한 것은 모두 순환 시킬 수 있습니다.
// 순환 가능한 것 : array, string, arguments, nodeList, set, map
// 단 object는 순환할 수 없습니다. - for in 문 (객체)

const heros = ['spiderman', 'blackwidow', 'batman', 'ironman', 'doctorstrange'];

for (const i of heros) {
    
    console.log(i + '!!')
}
// spider를 하나씩 순환
for (const i of heros[0]) {
    console.log(i);
}

function test(a, b, c) {
    // arguments는 전달받는 매개변수에 대한 정보를 가지고 있습니다.
    for(const arg of arguments) {
        console.log(arg);
    }
}
test(1, 3, 5);

// set 유일값 저장 - 중복 제거

const mySet = new Set('lliiijsf');
console.log(mySet)
// Set(5) {'l', 'i', 'j', 's', 'f'}

mySet.add(10);
console.log(mySet)
// {'l', 'i', 'j', 's', 'f', 10}

const testArr = [1, 2, 3, 3, 4, 5, 4, 6, 7, 7, 7, 7];
const testSet = new Set(testArr);
console.log(testSet)

// 콜백 함수를 이용한 순환문 (매개변수로 전달하는 함수) -> 신기한 기능 오직 자바스크립트에만 존재하는 기능

// forEach(), map()

// forEach -> 데이터 원본을 바꿉니다.

const list = [
    {name: 'lee', age: 10},
    {name: 'kim', age: 9},
    {name: 'sds', age: 11},
    {name: 'nnoj', age: 12}
]
// 콜백 함수 () => {}
list.forEach(item => console.log(item));

list.forEach(item => {
    console.log(item.name)
});

// 데이터에 있는 나이를 일괄적으로 1살씩 올리고 싶다면
list.forEach(item => {
    item.age += 1;
})
console.log(list)

// 원본 데이터 변경하지 않는 방법
const newList = [];
list.forEach(item => {
    const newObj = {name: item.name};
    // 새 객체에 할당하기
    newObj['age'] = item.age + 1;
    // {name: 'lee', age: 11}...
    newList.push(newObj);
})
console.log(list);
console.log(newList);

// map - 기존 배열을 가지고 새로울 배열을 생성합니다. (반환값이 존재합니다.)

const newList2 = list.map(item => {
    const newObj = {name: item.name};
    newObj['age'] = item.age + 1;
    return newObj;
})
console.log(list);
console.log(newList2);