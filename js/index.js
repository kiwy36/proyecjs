let titulo = document.getElementById("titulo")
titulo.innerHTML = "<h1>Juego de cartas generico de aplicacion web</h1><h2>diversion con limites visibles</h2>";//cambiar/poner titulo
titulo.innerHTML +="<h3>estas listo?</h3>";//el "+" sirve para ir sumando cosas sin perder la anterior
titulo.style.font="bold 50px monospace";//aqui cambiar tipografia
let redesSociales = document.getElementById("redesSociales")//tomar control de un id
redesSociales.style.background="yellow";

localStorage.setItem("usuario","TUTOR");
localStorage.setItem("verde","dorado");//se estan guardando datos de info en un espacio de almacenamiento en el buscador del navegador
//para recuperar data
let usuarioActivo = localStorage.getItem("usuario");
let color = localStorage.getItem("verde");
console.log(usuarioActivo);//visualisar la recuperacion por consola
console.log(color);//todo esto es devuelto en formato stream


//modos oscuro/normal
let principal =document.getElementById("principal");
let boton = document.getElementById("mode");
let modo = localStorage.getItem("modo");
//render
if(modo !=null){
    if(modo=="dark"){
        document.body.className = modo;
        principal.className="position-relative overflow-hidden p-1 p-md-1 m-md-3 text-center"+modo;
        boton.innerText = "ligth mode";
    }
}else{
    modo="light";
}
boton.onclick=()=>{
    if(modo == "light"){
        document.body.className="dark";
        principal.classList.remove("light");
        principal.classList.add("dark");
        boton.innerText="light mode";
        modo = "dark";
    }else{
        document.body.className="light";
        principal.classList.remove("dark");
        principal.classList.add("light");
        boton.innerText="dark mode";
        modo = "light";
    }
    localStorage.setItem("modo",modo)
}