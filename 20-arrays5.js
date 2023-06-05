//pop ve shift işlevleri!

//pop() işlevi ile sondan öğe silme

let sayilar = [0, 1, 2, 3, 4, 5];

sayilar.pop();

console.log(sayilar); //[0, 1, 2, 3, 4];

//silinen öğeyi değişkene de atayabiliriz

const silinenIki = sayilar.pop();

console.log(silinenIki); //4

console.log(sayilar[silinenIki]); //?

//----------------------------------------

//shift() işlevi ilk öğeyi silme

let sayilar = [0, 1, 2, 3, 4, 5];

sayilar.shift();

console.log(sayilar); //[1, 2, 3, 4, 5]

//silinen değeri değişkene atama

let a = sayilar.shift();

console.log(a); //1
