//переменные
let olay, inpt, text;
let bool = true; //стоковое значение для переменной, при первом открытии сайта
const locName = "isChecked";
//места из html
inpt = document.getElementById('btn'); //галочка (checkbox)
olay = document.getElementsByClassName('targ'); //все теги "a" с классом "targ"
//значение для переменной при открытии страницы
if (localStorage.hasOwnProperty(locName)) {//получение значения переменной, если уже есть переменная в памяти
	if (localStorage.getItem(locName) == "true") bool = true; //дополнительные сравнения, так как в память запоминается строкой
	else bool = false; 
} //иначе стоковое значение
//синхронизация значений с памятью
inpt.checked = bool; //выставление галочки
toggleAtrb(bool); //выставление атрибутов тегам "a", какие указаны в памяти
//нажатие на галочку
inpt.addEventListener('click', trueno);
//функция при нажатии на галочку
function trueno() {
	bool = !bool; //при срабатывании функции меняется значение переменной на противоположное
	toggleAtrb(bool); //выставление атрибутов тегам "a"
	localStorage.setItem(locName, bool); //сохранение значения в память
}
function toggleAtrb(set) 
{//решение добавлять атрибут или нет
	if (set) setAtrb();
	else delAtrb();
}
function setAtrb() { for (var i = 0; i < olay.length; i++) olay[i].setAttribute('target', '_blank'); }
function delAtrb() { for (var i = 0; i < olay.length; i++) olay[i].removeAttribute('target'); }