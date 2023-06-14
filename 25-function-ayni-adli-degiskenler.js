//global ve local kapsamda (scope), değişkenler aynı adları alırlarsa?

const degisken = "Gündüz!";

function gununIcinden() {
 
  let degisken = "Gece!"; //aynı değişken adını kullandık

  console.log(degisken);
}

gununIcinden();

console.log(degisken);

/*
Gece!
Gündüz!
*/

