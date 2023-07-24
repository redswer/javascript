let menu = '짜장';

console.log(`bar.js : menu = ${window.menu}`);
console.log(`bar.js : menu = ${menu}`);
console.log('');


const pi = Math.PI;

function square(x) {
    return x * x;
}

class Person {
    constructor(name) {
        this.name = name;
    }
}

// export : 외부에 공개
// 변수, 함수 클래스를 하나의 객체로 구성하여 공개
export { pi, square, Person };