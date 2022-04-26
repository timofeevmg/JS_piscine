"use strict";

// class CoffeeMachine {
// 	_waterAmount = 0;
  
// 	set waterAmount(value) {
// 	  if (value < 0) throw new Error("Отрицательное количество воды");
// 	  this._waterAmount = value;
// 	}
  
// 	get waterAmount() {
// 	  return this._waterAmount;
// 	}
  
// 	constructor(power) {
// 	  this._power = power;
// 	}

// 	get power() {
// 		return this._power;
// 	}
  
//   }
  
//   // создаём новую кофеварку
//   let coffeeMachine = new CoffeeMachine(100);
  
//   // устанавливаем количество воды
//   // coffeeMachine.waterAmount = -10; // Error: Отрицательное количество воды

//   console.log(`Мощность ${coffeeMachine._power}W`);

//   coffeeMachine.power = 200; //error


/***************/
class CoffeeMachine {
	#waterLimit = 200;
  
	#checkWater(value) {
	  if (value < 0) throw new Error("Отрицательный уровень воды");
	  if (value > this.#waterLimit) throw new Error("Слишком много воды");
	}
  }
  
  let coffeeMachine = new CoffeeMachine();
  
  // снаружи  нет доступа к приватным методам класса
  coffeeMachine.#checkWater(); // Error
  coffeeMachine.#waterLimit = 1000; // Error