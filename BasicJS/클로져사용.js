function makeClosure() {
    // 클로져 공간이 됩니다. (비공개 프로퍼티 - 접근할려면)
    // class에서 private 사용
    const val1 = 100;
    const val2 = 200;

    return {
        getVal1: function () { return val1 },
        getVal2: function () { return val2 },
    }
}

let result = makeClosure(); // {getVal1... , getVal2....}
console.log(result.getVal1());
console.log(result.getVal2()); // 로 접근이 가능합니다.