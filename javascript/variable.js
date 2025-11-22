//변수와 선언
//1. var - 재선언, 재할당 가능
var num = 1;
console.log(num); //1

num = 5;
console.log(num); //5

var num = 10;
console.log(num); //10

//2. let - 재선언 불가능, 재할당 가능
let message;
message = 'Hello';
message = 'World';
// let message = 'Hi' 재할당은 불가능

let user = 'David',
  age = '25',
  gender = 'male'; //한 줄에 여러 변수 선언 가능

//3. const - 재선언, 재할당 불가능
//const로 선언한 변수는 변할 수 없기 때문에 상수로 취급
const myNumber = '8826';

// const myNumber = '8888'; 재선언 에러
// myNumber = '1234'; 재할당 에러

console.log(myNumber);

//대문자 상수를 사용해서 기억하기 힘든 값을 별칭으로 사용하면 유용함
const COLOR_RED = '#F00';
const COLOR_GREEN = '#0F0';
const COLOR_BLUE = '#00F';
const COLOR_ORANGE = '#FF7F00';

let color = COLOR_ORANGE;
