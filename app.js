// tapsiriq - 01
// function Car(brend, model, year, engine) {
//     this.brend = brend;
//     this.model = model;
//     this.year = year;
//     this.engine = engine;
// }
// const car1 = new Car("tesla", "model 3", "2018 to 2020")
// const car2 = new Car("bmw", "i7 eDrive50", "2024")
// const car3 = new Car("porsche", "718 boxster", "2017")
// console.log(car1);
// console.log(car2);
// console.log(car3);


// tapsirig - 02
// const user1 = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//         street: "Kulas Light",
//         suite: "Apt. 556",
//         city: "Gwenborough",
//         zipcode: "92998-3874",
//         geo: {
//             lat: "-37.3159",
//             lng: "81.1496"
//         }
//     }
// }
// const user2 = { ...user1 }
// user1.username = "Medyn";
// user2.name = "Medine";
// console.log(user1);
// console.log(user2);

// FIKIRLERIM
// birinci obyekti ikinci obyekte value copy ile menimsetdik hansiki ... operatoru ile
// buna gorede user1de etdiyimiz deyisiklik user2ye tesir etmedi.


// tapsirig - 03
// const GameUser = {
//     name: "medine",
//     username: "medyn",
//     level: "50 level",
//     power: "fire, ice"
// }
// const GameUser2 = Object.assign({}, GameUser)
// GameUser.level = "35 level"
// GameUser2.level = "90 level"
// console.log(GameUser);
// console.log(GameUser2);

// NEYE GORE Object.assign() METODU? 
// yaratdigim obyektden birini daha yaratmag istedim buna gorede
// ilk yaratdigim obyekti ikinci obyektime menimsetdim ancag bunu
// edende men referance copy etmis oldum hansiki ilk obyektdimde deyisiklik etsem ikinci 
// obyektimede menimseyecek, amma mene bu serf etmir ve buna gorede Object.assign() metodundan
// istifade ederek obyektimi value copy'e cevirdim ve etdiyim deyisiklik 2ci obyektime yansimayacag 
// hemcinin ikinci obyektdimde etdiyimin deyisiklikde birinciye yansimayacag.


// tapsirig - 04
// spread bir obyektin icindekileri digerine yayir parcalayir yeni menimsedir. rest ise fucksiyada 
// istifade edilir meselen bir sira reqemler verilib rest ile hamsini bir yere toplaya bilerik.
// NUMUNELER 

// spread
// const book1 = {
//     pages: "780",
//     language: "english",
//     price: "20$"
// }
// const book2 = {...book1}
// console.log(book1);
// console.log(book2);

// rest
// const numbers = (...n) => {
//     console.log(n);
// }
// numbers(3, 55, 31, 0, 89, 27, 7, 5, 21);


// tapsirig - 05
// JavaScript-in stack və heap yaddaşını və primitiv və non-primitiv məlumat
//  növlərinin bu boşluqlarla necə qarşılıqlı əlaqədə olduğunu anlamaq kodlaşdırma
//  səmərəliliyinizi və performansınızı əhəmiyyətli dərəcədə yaxşılaşdıra bilər.
//  heap sürətli, qısamüddətli məlumatlar üçün mükəmməldir, stack isə dinamik,
//  uzunömürlü məlumat strukturlarının inkişafına imkan verir.


// tapsirig - 06
// function existsAndTruthy(obj, propertyName) {
//     return obj.hasOwnProperty(propertyName) && Boolean(obj[propertyName]);
// }

// console.log(existsAndTruthy({a: 1, b: 2, c: 3}, 'b'));
// console.log(existsAndTruthy({x: 'a', y: null, z: 'c'}, 'y'));
// console.log(existsAndTruthy({x: 'a', b: 'b', z: undefined}, 'z')); 