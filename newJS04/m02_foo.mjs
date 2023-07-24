let menu = '짬뽕';

console.log(`foo.js : menu = ${window.menu}`);
console.log(`foo.js : menu = ${menu}`);
console.log('');

// import1
/* import { pi, square, Person } from './m02_bar.mjs';

console.log(`foo import 확인 : pi = ${pi}`);
console.log(`foo import 확인 : square = ${square(5)}`);
console.log(new Person('안진혁')); */


// import2
// myLib 를 통해 접근
/* import * as myLib from './m02_bar.mjs';

console.log(`foo import 확인 2 : pi = ${myLib.pi}`);
console.log(`foo import 확인 2 : square = ${myLib.square(5)}`);
console.log(new myLib.Person('안진혁')); */


// import3
// export 한 식별자 이름을 변경하여 import 한다
import { pi as PI, square as mySquare, Person as p } from './m02_bar.mjs';

console.log(`foo import 확인 3 : pi = ${PI}`);
console.log(`foo import 확인 3 : square = ${mySquare(5)}`);
console.log(new p('안진혁'));