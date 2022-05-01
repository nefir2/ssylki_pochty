//переменные
let olay, inpt, text;
let bool = false;
const locName = "isChecked";
//места из html
inpt = document.getElementById('btn'); //галочка (checkbox)
olay = document.getElementsByClassName('targ'); //все теги "a" с классом "targ"
//значение для переменной при открытии страницы
if (localStorage.hasOwnProperty(locName)) {
	if (localStorage.getItem(locName) == "true") bool = true;
	else bool = false;
}
//синхронизация значений с памятью
inpt.checked = bool;
setAtrb(bool);
//нажатие на галочку
inpt.addEventListener('click', trueno);
//функция при нажатии на галочку
function trueno() {
	//решение добавлять атрибут или нет
	bool = !bool; //при срабатывании функции меняется значение переменной на противоположное
	setAtrb(bool);
	localStorage.setItem(locName, bool);
}
function setAtrb(set){
	if (set) { for (var i = 0; i < olay.length; i++) olay[i].setAttribute('target', '_blank'); }
	else { for (var i = 0; i < olay.length; i++) olay[i].removeAttribute('target'); }
}