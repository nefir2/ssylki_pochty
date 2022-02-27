//переменные
let olay, inpt, text;
var yes;
//места из html
inpt = document.getElementById('btn'); //галочка (checkbox)
text = document.getElementById('mini');
olay = document.getElementsByClassName('targ'); //все теги "a"
//нажатия
inpt.addEventListener('click', trueno);
text.addEventListener('click', trueno);
//значение для переменной при открытии страницы
yes = false;
//функция при нажатии на галочку
function trueno() {
	//решение добавлять атрибут или нет
	yes = !yes; //при срабатывании функции меняется значение переменной на противоположное
	if (yes) {
		for (var i = 0; i < olay.length; i++) olay[i].setAttribute('target', '_blank');
		inpt.setAttribute('checked', '');
	}
	else {
		for (var i = 0; i < olay.length; i++) olay[i].removeAttribute('target');
		inpt.removeAttribute('checked');
	}
}
