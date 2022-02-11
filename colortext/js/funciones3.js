function cambiarEstado()
{
	let lista_parrafos= document.getElementsByTagName("p");
	for(i=0; i<lista_parrafos.length; i++)
	{
		lista_parrafos[i].textContent="rojo";
		lista_parrafos[i].style.color="red";
	}

	let lista_div= document.getElementsByTagName("div");
	for(i=0;i<lista_div.length;i++)
	{
		lista_div[i].textContent="verde";
		lista_div[i].style.color="green";
	}
}