var d=document.getElementById('on').disabled = true;
var equal = false;
function show(b){
	var a=document.getElementById('input');
	if(equal == true){
		equal = false;
		if(b == "/" || b == "*" || b =="-" || b == "+"){
			a.value += b 
		}else{
			a.value = b
		}
	}else{
		a.value += b
	}
}
	
function erase(){
	a=document.getElementById('input');
	a.value = "";
}
function equalto(){
	equal = true;
	a=document.getElementById('input');
	b=eval(a.value);
	a.value = b;
}
function turnoff(){
	erase()
	var a=document.getElementsByTagName('input')
	for(var i=0;i<a.length;i++){
		a[i].disabled = true;
	}
	var c=document.getElementById('on').disabled = false;
}
function turnon(){
	var a=document.getElementsByTagName('input')
	for(var i=0;i<a.length;i++){
		a[i].disabled = false;
	}
	var c=document.getElementById('on').disabled = true;
}
function del_last() {
	var a=document.getElementById('input');
	a.value=(a.value).slice(0,-1)
}