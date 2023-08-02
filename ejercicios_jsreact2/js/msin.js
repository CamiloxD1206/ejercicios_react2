//mouse over
// const boton=document.querySelector('#boton');
// boton.addEventListener('mouseover',()=>{
//     alert('no')
// })
//-teclas-----------
// document.addEventListener('keydown',()=>{
//     console.log('tecla presionada')
// })
//-----------------
// document.addEventListener('keyup',()=>{
//     console.log('tecla despresionada')
// })
//----------inputs----------------------
// document.addEventListener('input',(evt)=>{
//     console.log(evt)
// })
//-------fuera---------------------------
// boton.addEventListener('blur',()=>{
//     console.log('diste fuera del boton')
// })
//------------------input que muestra valor-------------------
// const input=document.querySelector("#inpute")
// input.addEventListener('input',(evt)=>{
//     console.log(evt.target.value)
// })
//--------------premium-------
// const premium=document.querySelector('.premium')
// const ubicacion=premium.getBoundingClientRect();
// console.log(ubicacion)
// if(ubicacion.top<100){
//     console.log('estas en la seccion premium')
// }else{
//     console.log('no')
// }
//-----------------------
//evento 
// i.stopPropagation()
//---------------------
//todos los datos de un motero
//datos moto
//---------------------------------------





const form=document.querySelector('#formulario');

function motoviajero(){
    const nombre=document.querySelector('#nombre').value;
    const apellido=document.querySelector('#apellido').value;
    const numerocc=document.querySelector('#numerocc').value;
    const telefono=document.querySelector('#telefono').value;
    const fechan=document.querySelector('#fechan').value;
   
    const obj1={nombre,apellido,nombre,numerocc,telefono,fechan}
    return obj1;
    
}

function moto (){
    const marca=document.querySelector('#marca').value;
    const linea=document.querySelector('#linea').value;
    const placa=document.querySelector('#placa').value;
    const cilindraje=document.querySelector('#cilindraje').value;
      const obj2={marca,linea,placa,cilindraje}
      return obj2;
}
 form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    if(fechan.value<='2005-01-01'){
        alert('Bienvenido')
    const retorno=motoviajero();
    const retorno2=moto();
    console.log('===========Datos motoviajero==========')
    console.log(`nombre:${retorno.nombre}`)
    console.log(`apellido:${retorno.apellido}`)
    console.log(`cc:${retorno.numerocc}`)
    console.log(`telefono:${retorno.telefono}`)
    console.log(`fecha de nacimiento:${retorno.fechan}`)
    console.log('==========DATOS MOTO==============')
    console.log(`m+arca:${retorno2.marca}`)
    console.log(`linea:${retorno2.linea}`)
    console.log(`placa:${retorno2.placa}`)
    console.log(`cilindraje:${retorno2.cilindraje}`)
}else {
    alert('eres menor de edad')
    console.log('por menoria de edad no puedes acceder')
}
})

    
 


