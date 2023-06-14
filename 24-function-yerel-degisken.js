function yerelDegiskenliIslev() {
  
  let yerelDegisken = "Ben yerel bir değişkenim";

  console.log('Yerel değişkenin değeri: ', yerelDegisken);
}

yerelDegiskenliIslev(); //işevi çağırdığımızda, burası çalışacak

console.log('İşlev dışında: ', yerelDegisken); // hata, ReferenceError
