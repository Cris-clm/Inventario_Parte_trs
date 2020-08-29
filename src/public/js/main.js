
let cargarDatos = async ()=>{
    await fetch('/listarDatos',{
        method:'GET'
    }).then(res => res.text()).then((data)=>{ 
        let resultado = JSON.parse(data).results
        console.log(resultado);
     })
   
}
let insertarDatos = async (usuario,mensaje)=>{
    console.log(usuario)
    console.log(mensaje);
    await fetch('/agregarChat',{
        method:'POST', 
        headers:{'Content-type':'application/x-www-form-urlencoded'},
        body:JSON.stringify({user:usuario,menssaje:mensaje,fecha:Date.now()})
    }).then(res =>res.text()).then((data)=>{
        cargarDatos();
        })
    
}
 window.onload= ()=> {document.getElementById('enviar').addEventListener('click',enviarDatos,true)} 
let enviarDatos=()=> {
    let usuario = document.getElementById('nombre').value 
    let mensaje = document.getElementById('mensaje').value 
    let respuesta= insertarDatos(usuario,mensaje)
    


}