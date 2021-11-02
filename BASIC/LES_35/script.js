"use strict";

const p = document.querySelectorAll('p');
console.log(p);


function loadScript(src) {
	const script = document.createElement('script');
	script.src = src;
	script.async = false;// теперь выключили асинхронность и скрипты выполняться строго друг за другом
	document.body.append(script);// добавили новый скрипт на страницу
};

loadScript("test.js");
loadScript("some.js");
