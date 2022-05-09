//переменные
let olay, blank, switchbg, text;
let bool = true, boolbg = false; //стоковое значение для переменной, при первом открытии сайта
const locName = "isChecked";
const sbg = "Background";
//места из html
blank = document.getElementById('tab'); //галочка для открытия нового окна (checkbox)
switchbg = document.getElementById("bg"); //галочка для выключателя фона
olay = document.getElementsByClassName('targ'); //все теги "a" с классом "targ"
//значение для переменной при открытии страницы
if (localStorage.hasOwnProperty(locName)) {//получение значения переменной, если уже есть переменная в памяти
	if (localStorage.getItem(locName) == "true") bool = true; //дополнительные сравнения, так как в память запоминается строкой
	else bool = false; 
} //иначе стоковое значение
if (localStorage.hasOwnProperty(sbg)){
	if (localStorage.getItem(sbg) == "true") boolbg = true;
	else boolbg = false;
}
//синхронизация значений с памятью
blank.checked = bool; //выставление галочки
toggleAtrb(bool); //выставление атрибутов тегам "a", какие указаны в памяти
switchbg.checked = boolbg;
toggleBg(boolbg);
//нажатие на галочку
blank.addEventListener('click', trueno);
switchbg.addEventListener('click', changeBg)
//функция при нажатии на галочку
function trueno() {
	bool = !bool; //при срабатывании функции меняется значение переменной на противоположное
	toggleAtrb(bool); //выставление атрибутов тегам "a"
	localStorage.setItem(locName, bool); //сохранение значения в память
}
function changeBg() {
	boolbg = !boolbg;
	toggleBg(boolbg);
	localStorage.setItem(sbg, boolbg);
}
function toggleBg(what){
	if (what) document.body.style.backgroundImage = 'url(pics/phon/girl_and_the_pond.jpg)'; // убрал ../ так как настройки фона ставятся прямо в главный html файл
	else document.body.style.backgroundImage = '';
}
function toggleAtrb(set) 
{//решение добавлять атрибут или нет
	if (set) setAtrb();
	else delAtrb();
}
function setAtrb() { for (var i = 0; i < olay.length; i++) olay[i].setAttribute('target', '_blank'); }
function delAtrb() { for (var i = 0; i < olay.length; i++) olay[i].removeAttribute('target'); }