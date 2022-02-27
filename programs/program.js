//переменные
let olay, inpt;
var yes;
//места из html
inpt = document.getElementById('btn'); //галочка (checkbox)
olay = document.getElementsByTagName('a'); //все теги "a"
//нажатие на галочку
inpt.addEventListener('click', trueno);
//значение для переменной при открытии страницы
yes = false;
//функция при нажатии на галочку
function trueno() {
	//решение добавлять атрибут или нет
	yes = !yes; //при срабатывании функции меняется значение переменной на противоположное
	if (yes) { for (var i = 0; i < olay.length; i++) olay[i].setAttribute('target', '_blank'); }
	else { for (var i = 0; i < olay.length; i++) olay[i].removeAttribute('target'); }
}