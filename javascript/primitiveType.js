//자바스크립트에서 원시 값은 객체가 아니면서 메서드 또는 속성도 가지지 않는 데이터이며,
//모든 원시 값은 불변하며 변형할 수 없다

//문자형 string
//자바스크립트에서는 작은따옴표''와 큰따옴표 ""의 차이를 두지 않음
let str = 'single quotes';
let str2 = 'double quotes';

//숫자형 number
let numOne = 123;
let numTwo = 45;
console.log(numOne + numTwo, numOne - numTwo, numOne * numTwo, numOne / numTwo); //사칙연산 가능

let pi = 3.141592; //부동소수점 숫자 또한 숫자형 데이터

//Infinity, -Infinity, NaN 같은 특수 숫자값도 숫자형에 포함 됨
console.log(1 / 0); // Infinity
console.log(Infinity); //직접 참조 가능
console.log('숫자형이 아님' / 2); //NaN

//bigint
//내부 표현 방식 때문에 자바스크립트에선 (253-1)(9007199254740991) 보다 큰 값 혹은
//-(253-1) 보다 작은 정수는 '숫자형’을 사용해 나타낼 수 없음
//이러한 숫자가 필요한 경우가 발생하는데, 길이에 상관없이 정수를 나타낼 수 있게 됨
let bigInt = 1234567890123456789012345678901234567890n;

//불린형 boolean
//논리 타입인 boolean은 true와 flase 두 가지 값 밖에 없는 자료형
let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4 > 1; //비교 값을 저장할 때도 사용
console.log(isGreater);

//undefined
//값이 할당되지 않은 상태를 나타낼 때 사용
let age;
console.log(age); // undefined 출력 > 값이 할당되지 않았기 때문에

//null
//존재하지 않는 값, 비어 있는 값, 알 수 없는 값을 나타내는데 사용
let gender = null; //의도적으로 값을 알 수 없거나, 비어있을 경우 사용할 수 있음

//symbol
//객체의 고유 식별자를 만들 때 사용
const symbol = Symbol();
