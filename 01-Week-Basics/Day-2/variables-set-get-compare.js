// alert("2. uyarı")
// console.log("2. log")
// console.error(true)

// Deiğişkenler
// var isim ;
//var 3isim // sayısal ifadeyle tanımlanmaz 
// Komut isimleriyle tanımlanmaz
// birden fazla kelimeyle tanımlanmaz
 // var isim, soyisim;
// var fonksiyon bazlı değişken 
// if (true) {
//     var x = 10;
// }
// console.log(x); // 10 (Blok dışından erişilebilir)

// if (true) {
//     let y = 20;
// }
// console.log(y); // Hata: y is not defined (Blok dışından erişilemez)



// console.log(a); // undefined
// var a = 5;

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 10;

// var x = 1;
// var x = 2;
// console.log(x); // 2

// let y = 3;
// let y = 4; // Hata: Identifier 'y' has already been declared

// const w = 15;
// w = 20; // Hata: Assignment to constant variable
// console.log(w); // 10


//Değişken Türleri 
// var x ;
// console.log(typeof x); // undefined
// var y = null;
// console.log(typeof y); // object

// var name = "Mertcan";
// console.log(typeof name); // string

// var age = 25;
// console.log(typeof age); // number

// var study =true;
// console.log(typeof study); // boolean
// //Reference Types - Objects 
// //Array
// var renk = ["Mavi", "Yeşil", "Sarı"];
// console.log(renk);

// var kisi = {
//     ad: "Mertcan",
//     yas: 25

// }
// console.log(typeof kisi);

//Operatörler
// var sonuc ;
// const a = 70;
// const b = 30;
// sonuc = a + b;  
// sonuc = a - b;
// sonuc = a * b;
// sonuc = a / b;
// sonuc = a % b;
// let z = 10;
// let t = 9   
// // sonuc = x++; //const değiştirilmez 
// sonuc = z++ //sayıyı bir arttırdı ama hafızada tutmadı 10 yazar
// sonuc= ++z //sayıyı bir arttırdı ve ekrana yazdırdı 
// sonuc = z-- //sayıyı bir azalttı ama hafızada tutmadı 11 yazar  
// sonuc = --z //sayıyı bir azalttı ve ekrana yazdırdı

// //Atama Operatörleri
// sonuc = a; //sonuca a değerini atadı
// sonuc += a; //sonuc = sonuc + a;
// sonuc -= a; //sonuc = sonuc - a;
// sonuc *= a; //sonuc = sonuc * a; üs alır
// sonuc /= a; //sonuc = sonuc / a;
// sonuc %= a; //sonuc = sonuc % a; 

// //Karşılaştırma Operatörleri
// sonuc =z == t; //false
// t= 9;

// sonuc = z == t; //true
// sonuc = z === t; //true
// t="9"
// sonuc = z === t; //false 3 eşittir tür kontrolü yapar
// sonuc = z != t; //false 
// t=10
// sonuc = z != t; //false
// //Mantıksal Operatörler
// // && (And) Operatörü (ve)
// // || (Or) Operatörü (veya)
// // ! (Not) Operatörü (değil)
// z=10
// t=9
// sonuc = (z>t) && (a>b) //true
// sonuc = (z>t) || (a<b) //true
// sonuc = !(z>t) //false

var d = new Date();
console.log(d);

 // set Methods
 d.setFullYear(2023);
 d.setMonth(10)
 d.setDate(15);
 d.getDate(30);

//get Methods
console.log(d.getFullYear());
console.log(d.getMonth()); // Ocak 0.indis 8.indis Eylül
console.log(d.getDate()); // gün
console.log(d.getDay()); // günler 0-6 Pazar  0.indis
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());





console.log(sonuc)
console.log(typeof sonuc)
