//переменные
let olay, inpt, text;
//инициализация переменной при открытии страницы
var bool = false;
//места из html
inpt = document.getElementById('btn'); //галочка (checkbox)
olay = document.getElementsByClassName('targ'); //все теги "a" с классом "targ"
//нажатие на галочку
inpt.addEventListener('click', trueno);
//функция при нажатии на галочку
function trueno() {
	//решение добавлять атрибут или нет
	bool = !bool; //при срабатывании функции меняется значение переменной на противоположное
	if (bool) { 
		for (var i = 0; i < olay.length; i++) olay[i].setAttribute('target', '_blank'); 
	}
	else { 
		for (var i = 0; i < olay.length; i++) olay[i].removeAttribute('target'); 
	}
}