function makeClosure() {
    // 클로져 공간이 됩니다. (비공개 프로퍼티 - 접근할려면)
    // class에서 private 사용
    const val1 = 100;
    const val2 = 200;

    // 리턴 키워드를 통해 함수의 변수(val1, val2)를 밖에서 사용할 수 있도록 함수에 담아 반환합니다.
    return {
        getVal1: function () { return val1 },
        getVal2: function () { return val2 },
    }
}

// 이제 result 변수 안에는 makeClosure 함수안에 있던 val1, val2 값이 참조되어있게 됩니다. 그리고 여기에 접근하는 방법은 오직 getVal1, getVal2 함수만 가능해집니다.
let result = makeClosure(); // {getVal1... , getVal2....}
console.log(result.getVal1());
console.log(result.getVal2()); // 로 접근이 가능합니다.