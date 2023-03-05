function suma(){
	x=parseInt(document.datos.valor1.value); //aqui es nombredevariable=document.nomdeformulario.nomdecampo.ATRIBUTO
	y=parseInt(document.datos.valor2.value); //con parceInt paso mi variable a entero
	r=x+y;
	document.datos.opera.value="Suma"; //aquí es document.nomdeformulario.nomdecampo donde va a aparecer.value="Suma(valor del campo que estoy llamando)"
	document.datos.res.value=r; //aquí es document.nomdeformulario.nomdecampo donde va a aparecer.value=r(nombre de variable que estoy llamando)"
}

function resta(){
	x=parseInt(document.datos.valor1.value); 
	y=parseInt(document.datos.valor2.value); 
	r=x-y;
	document.datos.opera.value="Resta";
	document.datos.res.value=r; 
}

function multipli(){
	x=parseInt(document.datos.valor1.value); 
	y=parseInt(document.datos.valor2.value); 
	r=x*y;
	document.datos.opera.value="Multiplicacion";
	document.datos.res.value=r; 
}

function division(){
	x=parseInt(document.datos.valor1.value); 
	y=parseInt(document.datos.valor2.value); 
	r=x/y;
	document.datos.opera.value="División";
	document.datos.res.value=r; 
}