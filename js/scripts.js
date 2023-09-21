function mensaje(elemento){
  alert("Cargando el pronóstico del clima.")
}

function aceptarCookie(elemento){
  let elementoCookie = elemento.closest('.cookie');
  elementoCookie.classList.add('ocultar');
}

function cambiarTipoTemp(elemento){
  let valor = elemento.value;
  let listaTemp = document.querySelectorAll('.max > span, .min > span');
  if(valor === 'f'){
    for(let i=0;i<listaTemp.length;i++){
      let temperatura = listaTemp[i].innerText;
      temperatura = (temperatura * 1.8) + 32;
      listaTemp[i].textContent = Math.round(temperatura);
    }
  }else{
    for(let i=0;i<listaTemp.length;i++){
      let temperatura = listaTemp[i].innerText;
      temperatura = (temperatura - 32) / 1.8;
      listaTemp[i].textContent = Math.round(temperatura);
    }
  }
}