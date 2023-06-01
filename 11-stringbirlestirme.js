//artı + işareti ile string birleştirebiliriz, concatenation operator

 let dil = "Java" + "Script"; //JavaScript

//birleşen ifadeler arasında boşluk olsun istiyorsak, bunu biz sağlayacağız

let s = "Sayı" + " say!"; //Sayı say!

//string birleşimlerinde değişkenleri de kullanabiliriz

let ad = "Mustafa";
let soyad = " Büyükdereli"; //boşluğa dikkat
let ben = ad + soyad; //Mustafa Büyükdereli

//+= ile de string birleştirilebilir

let ad = "Mustafa "; //boşluğa dikkat
ad += "Büyükdereli"; //ad -> Mustafa Büyükdereli

//son 2 örnek

const adim = "Aygün";
const cumlem = "Benim adim " + adim + " ve 21 yaşındayım.";

//Benim adim Aygün ve 21 yaşındayım.

let birDuygu = "güzel!";
let cumle = "Özgürce yaşamak ";
cumle += birDuygu;

//Özgürce yaşamak güzel!
