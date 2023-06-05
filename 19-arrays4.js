//push() işlevi => array sonuna eleman ekleme

let sayilar = [0, 1, 2];

sayilar.push(101);

console.log(sayilar); //[0, 1, 2, 101]

sayilar.push([202, 303]);

console.log(sayilar);

/*
[5]
[
    0,
    1,
    2,
    101,
    [
        202,
        303
    ]
]
*/
