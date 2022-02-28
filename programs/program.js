//переменные
let olay, inpt, text;
var bool;
//места из html
inpt = document.getElementById('btn'); //галочка (checkbox)
olay = document.getElementsByClassName('targ'); //все теги "a" с классом "targ"
//нажатие на галочку
inpt.addEventListener('click', trueno);
//значение для переменной при открытии страницы
bool = false;
//функция при нажатии на галочку
function trueno() {
	//решение добавлять атрибут или нет
	bool = !bool; //при срабатывании функции меняется значение переменной на противоположное
	if (bool) { for (var i = 0; i < olay.length; i++) olay[i].setAttribute('target', '_blank'); }
	else { for (var i = 0; i < olay.length; i++) olay[i].removeAttribute('target'); }
}