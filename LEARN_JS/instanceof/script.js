"use strict";

// class Rabbit {}
// let rabbit = new Rabbit();

// // это объект класса Rabbit?
// alert( rabbit instanceof Rabbit ); // true


/**************/

// проверка instanceof будет полагать,
// что всё со свойством canEat - животное Animal
class Animal {
	static [Symbol.hasInstance](obj) {
	  if (obj.canEat) return true;
	}
  }
  
  let obj = { canEat: true };
  alert(obj instanceof Animal); // true: вызван Animal[Symbol.hasInstance](obj)


/************/

let s = Object.prototype.toString;

alert( s.call(123) ); // [object Number]
alert( s.call(null) ); // [object Null]
alert( s.call(alert) ); // [object Function]

let user = {
	[Symbol.toStringTag]: "User"
  };
  
  alert( {}.toString.call(user) ); // [object User]

// toStringTag для браузерного объекта и класса
alert( window[Symbol.toStringTag]); // window
alert( XMLHttpRequest.prototype[Symbol.toStringTag] ); // XMLHttpRequest

alert( {}.toString.call(window) ); // [object Window]
alert( {}.toString.call(new XMLHttpRequest()) ); // [object XMLHttpRequest]